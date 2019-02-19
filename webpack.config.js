/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


const INDEX_TEMPLATE_PATH = path.resolve(__dirname, './src/index.html');
const INDEX_PATH = path.resolve(__dirname, './src/main.js');

const envVars = {
	'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: ['babel-polyfill', INDEX_PATH].concat(isDev ? ['webpack-hot-middleware/client?reload=true'] : []),
	output: {
		path: path.join(__dirname, './build/temp'),
		filename: process.env.NODE_ENV !== 'production' ? 'app.js' : 'app-[hash].js',
		publicPath: '/',
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}, {
			test: /\.html$/,
			use: { loader: 'underscore-template-loader' },
		}, {
			test: /\.(ico)$/,
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				context: './src',
			},
		}, {
			test: /\.sass$/,
			use: [
				'style-loader',
				'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
				'resolve-url-loader',
				'sass-loader',
			],
			include: /@material/,
		}, {
			test: /\.sass$/,
			use: [
				'style-loader',
				'css-loader',
				'resolve-url-loader',
				'sass-loader',
			],
			exclude: /@material/,
		}, {
			test: /\.(png|jpg|woff|ttf|woff2)$/,
			loader: 'url-loader',
			options: {
				limit: 100000,
			},
		}],
	},
	stats: {
		colors: true,
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({ debug: true }),
		new webpack.DefinePlugin(envVars),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'My App',
			env: envVars,
			template: INDEX_TEMPLATE_PATH,
			inject: 'body',
		}),
		new CopyWebpackPlugin([
			{ from: './src/locales/locale-app', to: 'locales' },
		]),
	],
	devServer: {
		port: 6009,
		headers: { 'Access-Control-Allow-Origin': '*' },
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: '/' },
			],
		},
	},
};

const generateIndex = {
	title: 'My App',
	env: envVars,
	template: INDEX_TEMPLATE_PATH,
	inject: 'body',
};

if (isDev) {
	console.warn('Using dev environment');
	module.exports.devtool = 'source-map';
	module.exports.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	);
} else {
	console.warn('Using prod environment');
	module.exports.devtool = false;
	module.exports.plugins.push(new UglifyJSPlugin({
		sourceMap: 'source-map',
		compress: {
			screw_ie8: true,
			warnings: false,
		},
		comments: false,
		mangle: true,
		minimize: true,
		warningsFilter: function filter() {
			return false;
		},
	}));

	module.exports.plugins.push(new CompressionPlugin({
		asset: '[path].gz[query]',
		algorithm: 'gzip',
		test: /\.(js|html|s?css)$/,
		threshold: 500,
		minRatio: 0.8,
		deleteOriginalAssets: 0,
	}),
	/*
	 * Plugin: HtmlWebpackPlugin
	 * Description: Simplifies creation of HTML files to serve your webpack bundles.
	 * This is especially useful for webpack bundles that include a hash in the filename
	 * which changes every compilation.
	 *
	 * See: https://github.com/ampedandwired/html-webpack-plugin
	 */
	new HtmlWebpackPlugin(generateIndex)
	);
	module.exports.devServer.compress = true;
}

