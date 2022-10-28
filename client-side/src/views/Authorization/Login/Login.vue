<template>
	<body class="d-flex justify-content-center form-wrap">
		<form class="login">
			<p class="login-register">
				Don't have an Account?
				<router-link class="router-link" :to="{ name: 'Register' }">
					<h2>Register</h2>
				</router-link>
			</p>
			<div class="inputs">
				<div class="input">
					<input type="text" placeholder="Email" v-model="email" />
				</div>
				<br />
				<div class="input">
					<input type="password" placeholder="Password" v-model="password" />
				</div>
				<br />
				<div class="error" v-if="errorMsg">
					{{ errorMsg }}
				</div>
			</div>
			<button @click.prevent="submitForm">Sign In</button>
		</form>
		<div class="background"></div>
	</body>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
	data() {
		return {
			email: null,
			password: null,
			errorMsg: null,
		};
	},

	methods: {
		submitForm() {
			if (this.isFormValid()) {
				this.errorMsg = null;
				signInWithEmailAndPassword(getAuth(), this.email, this.password)
					.then(() => {
						console.log("Successfully signed in!");
						this.$router.push("/home");
					})
					.catch((err) => {
						this.errorMsg = err.code;
					});
			} else {
				this.errorMsg = "Please fill out all the fields!";
			}
		},
		isFormValid() {
			if (this.email !== null && this.password !== null) {
				return true;
			} else {
				return false;
			}
		},
	},
};
</script>
