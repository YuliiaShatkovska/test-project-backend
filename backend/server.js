import { createConection } from "./helpers/connectMongo.js";
import { app } from "./app.js";
import cron from "node-cron";

import { sendDailyEmail } from "./controllers/emailController.js";

const { PORT } = process.env;

const startServer = async () => {
  try {
    await createConection();
    app.listen(PORT, () => {
      console.log("Server is running!");

      cron.schedule(
        "0 10 * * *",
        async () => {
          try {
            console.log("Запуск розсилки електронних листів щоденно о 10:00");
            sendDailyEmail();
          } catch (error) {
            console.log(error);
          }
        },
        { scheduled: true }
      );
    });
  } catch (er) {
    console.log(er);
  }
};
startServer();
