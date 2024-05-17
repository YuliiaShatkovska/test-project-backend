import Subscription from "../models/subscriptionModel.js";

import { createTransporter } from "../helpers/createTransporter.js";
import { getUsdExchange } from "../helpers/getUsdExchange.js";
import "dotenv/config";

const { UKR_NET_FROM } = process.env;

export const sendDailyEmails = async () => {
  try {
    const transporter = createTransporter();

    const usdRate = await getUsdExchange();

    const subscriptions = await Subscription.find();

    const day = new Date().toLocaleString("en-GB");

    subscriptions.forEach(async (subscription) => {
      const mailOptions = {
        from: UKR_NET_FROM,
        to: subscription.email,
        subject: "Щоденний курс долара",
        text: `Актуальний курс долара: ${usdRate} на ${day}`,
      };

      await transporter.sendMail(mailOptions);
    });
  } catch (error) {
    console.error("Помилка при відправленні електронних листів:", error);
  }
};
