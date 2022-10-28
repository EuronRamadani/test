import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import CreditRoute from "./Routes/CreditRoute";

const connectionSting = "mongodb://localhost:27017/Bank";

mongoose.connect(connectionSting).then(() => {
	console.log("Connected to mongodb on: " + connectionSting);
	const port = process.env.PORT || 1000;

	const app = express();

	app.use(
		cors({
			origin: "*",
		})
	);

	app.use(helmet());

	app.use(express.urlencoded({ extended: true }));

	app.use(express.json());

	app.use("/credit", CreditRoute);

	app.listen(port, () => {
		console.log(`you are running on ${port}`);
	});
});
