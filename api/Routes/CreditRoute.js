import express from "express";

import CreditController from "../controllers/CreditController";

const CreditRoute = express.Router();

CreditRoute.get("/", CreditController.list);

//Get By Id
CreditRoute.get("/:id", CreditController.get);
//Create Credit
CreditRoute.post("/create", CreditController.post);
//Update Credit
CreditRoute.put("/update/:id", CreditController.put);
//Delete Credit
CreditRoute.delete("/delete/:id", CreditController.delete);

export default CreditRoute;
