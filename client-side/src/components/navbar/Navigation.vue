<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info" class="p-2">
			<router-link class="router-link" :to="{ name: 'Home' }">
				<img src="../../../public/logo.png" alt="" />
			</router-link>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" class="justify-content-between" is-nav>
				<b-navbar-nav>
					<b-nav-item class="nav-links">
						<router-link
							v-if="isLoggedIn"
							class="link"
							:to="{ name: 'CreateForm' }"
						>
							Add a Credit/Debit card
						</router-link>
					</b-nav-item>
					<b-nav-item class="nav-links">
						<router-link
							v-if="isLoggedIn"
							class="router-link"
							:to="{ name: 'Transactions' }"
						>
							Transactions
						</router-link>
					</b-nav-item>
					<b-nav-item v-if="!isLoggedIn" class="nav-links">
						<router-link class="router-link" :to="{ name: 'Login' }">
							Login
						</router-link>
					</b-nav-item>
					<b-nav-item v-if="!isLoggedIn" class="nav-links">
						<router-link class="router-link" :to="{ name: 'Register' }">
							Register
						</router-link>
					</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto align-items-center">
					<b-nav-form class="">
						<div class="d-flex justify-content-center"></div>
					</b-nav-form>
					<b-nav-item v-if="isLoggedIn" class="nav-links">
						{{ currentUser.email }}
					</b-nav-item>

					<b-nav-item
						v-if="isLoggedIn"
						class="nav-links"
						@click="handleSignOut"
					>
						Sign Out
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { signOut } from "firebase/auth";
export default {
	methods: {
		handleSignOut() {
			signOut(this.auth).then(() => {
				this.$router.push("/");
			});
		},
	},
	computed: {
		currentUser() {
			return this.auth?.currentUser;
		},
		firstName() {
			return this.currentUser.displayName;
		},
		userImg() {
			return this.currentUser.photoURL;
		},
	},
	props: {
		isLoggedIn: {
			required: true,
			type: Boolean,
		},
		auth: {
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.nav-links {
	::v-deep {
		a {
			color: white !important;
		}
	}
}
img {
	height: 50px;
	width: 50px;
}
</style>
