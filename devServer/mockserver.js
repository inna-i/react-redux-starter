/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();
const path = require('path');
const serveStatic = require('serve-static');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const opn = require('opn');
const config = require('../webpack.config');
const bodyParser = require('body-parser');

const uri = 'http://localhost:6009';

const compiler = webpack(config);
compiler.apply(new webpack.ProgressPlugin());

console.log(`Listening at ${uri}\n`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, {
	publicPath: '/',
	stats: {
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false,
		progress: true,
	},
}));

app.use(webpackHotMiddleware(compiler));
app.get([
	'/tree**',
	'/not-found**',
], (req, resp) => {
	req.url = '/';
	app.handle(req, resp);
});

app.listen(6009, err => {
	if (err) {
		console.log(err);
		return;
	}
	opn(uri);
});

function mockPathWithJson(url, object, interval) {
	app.get(url, (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		if (interval) {
			setTimeout(() => {
				res.send(JSON.stringify(object));
			}, interval);
			return;
		}
		res.send(JSON.stringify(object));
	});
}


// get images
app.use('/images', serveStatic(path.join(__dirname, 'images')));

// data
mockPathWithJson('/v1/config/api-paths', require('./mocks/api-paths'), 1000);

app.put('/api/users/id', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(400).send(JSON.stringify({ detail: null, message: "Can't update user" }));
});

app.get('/api/users/id', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	setTimeout(() => res.send(JSON.stringify({ id: 12 })), 1000);
});

