import express from "express";
import { exchangeController } from "../controllers/exchangeController.js";

const exchangeRouter = express.Router();

exchangeRouter.get("/exchange", exchangeController);

export default exchangeRouter;
