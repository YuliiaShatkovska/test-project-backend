import cron from "node-cron";
import { createConection } from "./helpers/connectMongo.js";
import { app } from "./app.js";
import { sendDailyEmails } from "./controllers/emailController.js";

const { PORT } = process.env;

cron.schedule("0 12 * * *", () => {
  console.log("Запуск розсилки електронних листів щоденно о 11:00");
  sendDailyEmails();
});

const startServer = async () => {
  try {
    await createConection();
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  } catch (er) {
    console.log(er);
  }
};
startServer();
