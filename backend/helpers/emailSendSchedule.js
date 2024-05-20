import cron from "node-cron";
import { sendDailyEmail } from "../controllers/emailController.js";

// cron.schedule("13 20 * * *", async () => {
//   try {
//     sendDailyEmail();
//     console.log("Запуск розсилки електронних листів щоденно о 10:00");
//   } catch (error) {
//     console.log(error);
//   }
// });

cron.schedule(
  "15 10 * * *",
  async () => {
    try {
      console.log("Запуск розсилки електронних листів щоденно о 10:00");
      sendDailyEmail();
    } catch (error) {
      console.log(error);
    }
  },
  { scheduled: true, timezone: "Europe/Kiev" }
);
