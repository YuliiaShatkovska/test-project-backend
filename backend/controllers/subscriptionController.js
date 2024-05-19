import Subscription from "../models/subscriptionModel.js";

export const userSubscription = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await Subscription.findOne({ email });

    if (user) {
      throw new Error(`${user.email} вже підписаний на розсилку!`);
    }

    const newUser = await Subscription.create({
      ...req.body,
    });

    res.status(201).json({
      message: "Успішна підписка на розсилку!",
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};
