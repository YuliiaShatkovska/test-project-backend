import axios from "axios";

const bankUrl =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json";

export const getUsdExchange = async () => {
  try {
    const response = await axios.get(bankUrl);
    const data = response.data;

    if (data.length > 0) {
      const usdRate = data[0].rate.toFixed(2);
      return usdRate;
    } else {
      throw new Error("Дані не отримано");
    }
  } catch (error) {
    throw new Error("Помилка при отриманні курсу долара:", error);
  }
};
