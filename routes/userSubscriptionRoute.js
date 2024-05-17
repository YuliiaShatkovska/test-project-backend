import express from "express";
import { userSubscription } from "../controllers/subscriptionController.js";

const subscriptionRouter = express.Router();

subscriptionRouter.post("/subscribe", userSubscription);

// subscriptionRouter.get("/send", sendDailyEmails);

export default subscriptionRouter;
