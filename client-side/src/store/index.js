import Vue from "vue";
import Vuex from "vuex";

import app from "./app/index";

import credits from "./Credits/credits";

const initialState = {
	credits: { ...credits.state },
};

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		app,
		credits,
	},
	state: {},
	mutations: {
		RESET_STATE(state) {
			sessionStorage.clear();
			Object.keys(state).forEach((key) => {
				Object.assign(state[key], initialState[key]);
			});
		},
	},
	strict: process.env.DEV,
	actions: {},
	getters: {},
});
