import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { initializeApp } from "firebase/app";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const firebaseConfig = {
	apiKey: "AIzaSyAn5-SfbuY9gpl6oLHFJa1ShboL_ALsQHY",
	authDomain: "bank-transaction-9bdfd.firebaseapp.com",
	projectId: "bank-transaction-9bdfd",
	storageBucket: "bank-transaction-9bdfd.appspot.com",
	messagingSenderId: "291984666608",
	appId: "1:291984666608:web:7ce78549fa73ac81c0b735",
};

initializeApp(firebaseConfig);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
