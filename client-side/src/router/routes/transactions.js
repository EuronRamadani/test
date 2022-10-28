export default [
	{
		path: "/transations",
		name: "Transactions",
		meta: {
			requiresAuth: true,
		},
		component: () =>
			import(
				/* webpackChunkName: "transactions" */ "../../views/Transactions.vue"
			),
	},
];
