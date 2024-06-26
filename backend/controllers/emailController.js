import Subscription from "../models/subscriptionModel.js";

import { getUsdExchange } from "../helpers/getUsdExchange.js";
import "dotenv/config";
import { createTransporter } from "../helpers/createTransporter.js";

const { UKR_NET_FROM } = process.env;

export const sendDailyEmail = async () => {
  try {
    const transporter = createTransporter();
    const usdRate = await getUsdExchange();

    const subscriptions = await Subscription.find();

    const day = new Date().toLocaleDateString("en-GB");

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
    console.log(error);
  }
};
