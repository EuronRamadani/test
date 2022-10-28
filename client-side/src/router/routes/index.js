export default [
	{
		path: "/CreateForm",
		name: "CreateForm",
		component: () =>
			import(/* webpackChunkName: "CreateForm" */ "../../views/CreateForm.vue"),
	},
	{
		path: "/",
		name: "Home",
		component: () =>
			import(/* webpackChunkName: "Home" */ "../../views/Home.vue"),
	},
];
