<template>
	<body class="createCredit">
		<form action="" @submit.prevent="createCredit">
			<div class="container">
				<input required type="text" placeholder="Owner" v-model="form.owner" />
				<span>CVV:</span>
				<input required placeholder="CVV" v-model="form.cvv" />
				<span>Card Number:</span>
				<input required placeholder="Card number" v-model="form.card_number" />
				<span>Expiration Date: </span>
				<input
					type="date"
					required
					placeholder="Expiration Date"
					v-model="form.expiration_date"
				/>

				<button type="submit">Continue</button>
			</div>
		</form>
	</body>
</template>

<script>
import CreateForm from "../utility/Credit/CreateCredit";
export default {
	name: "CreateForm",
	data() {
		return {
			form: {
				owner: "",
				cvv: 0,
				card_number: 0,
				expiration_date: 0,
			},
		};
	},
	components: {},
	methods: {
		async createCredit() {
			const newCredit = await CreateForm({ ...this.form });
			this.$router.push({
				name: "Transactions",
				params: { id: newCredit._id },
			});
		},
	},
};
</script>

<style lang="scss">
@media (max-width: 900px) {
	.createCredit {
		justify-content: center !important;
		margin-right: 0%;
		margin-left: 0%;
	}
}

.createCredit {
	@media (max-width: 900px) {
		.container {
			width: 100% !important;
			flex-wrap: nowrap;
			justify-content: center;
		}
	}

	margin-right: 5%;
	margin-left: 5%;
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	padding: 15px;

	.container {
		padding: 15px;
		margin-top: 3%;
		margin-bottom: 3%;
		width: 160%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		input {
			border: 1px solid black;
			font-size: 20px;
			height: 20%;
			width: auto;
			padding: 15px;
			margin-bottom: 3%;
			margin-top: 3%;
		}

		textarea {
			font-size: 20px;
			height: 20%;
			width: auto;
			padding: 15px;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			border: 3px solid black;
			margin-bottom: 3%;
			margin-top: 3%;
		}
		button {
			background-color: black;
			border: none;
			color: white;
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			margin-bottom: 3%;
			margin-top: 3%;
		}
	}
}
</style>
