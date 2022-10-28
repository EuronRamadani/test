<template>
	<body class="d-flex justify-content-center form-wrap">
		<form class="register">
			<p class="login-register">
				Already have an Account?
				<router-link class="router-link" :to="{ name: 'Login' }">
					<h2>Login</h2>
				</router-link>
			</p>
			<div class="inputs">
				<div class="input">
					<input type="text" placeholder="Name" v-model="displayName" />
				</div>
				<br />
				<div class="input">
					<input type="text" placeholder="Email" v-model="email" />
				</div>
				<br />
				<div class="input">
					<input type="password" placeholder="Password" v-model="password" />
				</div>
				<br />
				<div class="error" v-if="error">
					{{ this.errorMsg }}
				</div>
			</div>
			<button @click.prevent="submitForm">Sign Up</button>
		</form>
		<div class="background"></div>
	</body>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
	data() {
		return {
			email: null,
			displayName: null,
			password: null,
			photoURL: null,
			phoneNumber: null,
			roles: [0],
			status: 1,
			error: null,
			errorMsg: null,
		};
	},

	methods: {
		submitForm() {
			if (this.isFormValid()) {
				this.error = false;
				this.errorMsg = null;
				createUserWithEmailAndPassword(getAuth(), this.email, this.password)
					.then((result) => {
						console.log("result", result);

						console.log("User registered!");
						this.$router.push("/home");
					})
					.catch((err) => {
						console.log(err.code);
						alert(err.message);
					});
			} else {
				this.error = true;
				this.errorMsg = "Please fill out all the fields!";
			}
		},
		isFormValid() {
			if (
				this.firstName !== null &&
				this.lastName !== null &&
				this.email !== null &&
				this.password !== null
			) {
				return true;
			} else {
				return false;
			}
		},
	},
};
</script>

<style></style>
