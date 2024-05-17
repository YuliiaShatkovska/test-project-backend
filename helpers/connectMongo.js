import mongoose from "mongoose";
import "dotenv/config";

const { DB_HOST } = process.env;

export const createConection = async () => {
  try {
    await mongoose.connect(DB_HOST);
  } catch (error) {
    console.log(error);
  }
};

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Connecting error:", err);
  process.exit(1);
});

db.once("open", () => {
  console.log("Database connection successful");
});
