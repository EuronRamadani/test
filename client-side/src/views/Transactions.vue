<template>
	<div>
		<b-form-input
			size="sm"
			class="mr-sm-2"
			placeholder="Filter by Owner name"
			v-model="search"
		></b-form-input>
		<Card v-for="credit in filter" :key="credit._id" :credit="credit" />
	</div>
</template>

<script>
import getCreditList from "../utility/Credit/GetCreditList";
import { mapGetters } from "vuex";
import Card from "../components/Card.vue";
export default {
	name: "transactions",
	components: {
		Card,
	},
	data() {
		return {
			search: "",
		};
	},
	computed: {
		...mapGetters({
			creditList: "creditList",
		}),
		filter() {
			return this.creditList.filter((credit) => {
				return credit.owner.match(this.search);
			});
		},
	},
	created() {
		this.fetchCredits();
	},
	methods: {
		async fetchCredits() {
			const result = await getCreditList();
			this.$store.dispatch("fetchCredits", result);
		},
	},
};
</script>
