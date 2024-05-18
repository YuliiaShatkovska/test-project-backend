import cron from "node-cron";
import { sendDailyEmail } from "../controllers/emailController.js";

cron.schedule("0 9 * * *", async () => {
  try {
    sendDailyEmail();
    console.log("Запуск розсилки електронних листів щоденно о 9:00");
  } catch (error) {
    console.log(error);
  }
});
