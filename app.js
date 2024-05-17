import express from "express";
import morgan from "morgan";
import cors from "cors";
import exchangeRouter from "./routes/exchangeRouter.js";
import subscriptionRouter from "./routes/userSubscriptionRoute.js";

import "dotenv/config";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/users", subscriptionRouter);
app.use("/api/currency", exchangeRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
