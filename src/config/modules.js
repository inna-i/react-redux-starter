import Root from '../containers/Root/Root';
import NotFound from '../containers/NotFound/NotFoundContainer';
import Categories from '../containers/CategoriesTree';

export default ([
	{
		path: '/',
		component: Root,
		name: 'Portal',
		label: 'Portal home page',
	},
	{
		path: '/tree',
		component: Categories,
		name: 'Categories',
	},
	{
		path: 'not-found',
		component: NotFound,
		label: 'Page not found',
	},

	// {
	// 	path: 'user',
	// 	component: UserSettings,
	// 	indexRoute: {
	// 		onEnter: (nextState, replace) => replace(`/user/aboutme${location.search}`),
	// 	},
	// 	childRoutes: [
	// 		{
	// 			path: 'aboutme',
	// 			component: UserDetails,
	// 		},
	// 		{
	// 			path: 'password',
	// 			component: ChangePassword,
	// 		},
	// 	],
	// },

]);

