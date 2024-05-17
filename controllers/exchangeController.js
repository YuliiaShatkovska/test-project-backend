import { getUsdExchange } from "../helpers/getUsdExchange.js";

export const exchangeController = async (_, res, next) => {
  try {
    const usdRate = await getUsdExchange();
    res.status(200).json({ usdRate });
  } catch (error) {
    next(error);
  }
};
