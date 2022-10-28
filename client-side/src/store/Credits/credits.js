export default {
	state: {
		credits: [],
	},

	getters: {
		creditList(state) {
			return state.credits;
		},
	},

	mutations: {
		SET_LIST(state, payload) {
			state.credits = payload;
		},
	},
	actions: {
		fetchCredits({ commit }, payload) {
			commit("SET_LIST", payload);
		},
	},
};
