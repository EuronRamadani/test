import mongoose from "mongoose";

const schema = mongoose.Schema({
	owner: String,
	cvv: Number,
	card_number: Number,
	expiration_date: Date,
});
const model = mongoose.model("Credit", schema);

export default model;
