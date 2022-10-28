import CreditModel from "../Models/CreditModel";

export default {
	list: async (req, res) => {
		const list = await CreditModel.find();

		return res.json(list);
	},
	get: async (req, res) => {
		const id = req.params.id;

		const foundItem = await CreditModel.findOne({ _id: id });

		return res.json(foundItem);
	},
	post: async (req, res) => {
		try {
			const credit = req.body;

			const addCredit = await new CreditModel(credit);

			addCredit.save();

			return res.json(addCredit);
		} catch (err) {
			console.log(`Errori ${err}`);
		}
	},
	delete: async (req, res) => {
		const { name } = req.params;
		try {
			const removeCredit = await CreditModel.deleteOne({ name: name });
			return res.json(removeCredit);
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	},
	put: async (req, res) => {
		const { id } = req.params;
		const body = req.body;

		const credit = await CreditModel.findOne({ _id: id });
		const updateCredit = await CreditModel.updateOne(credit, body);

		return res.json(updateCredit);
	},
};
