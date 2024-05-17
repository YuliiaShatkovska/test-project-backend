import nodemailer from "nodemailer";
const { UKR_NET_FROM, UKR_PASSWORD } = process.env;

export const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.ukr.net",
    port: 465,
    secure: false,
    auth: {
      user: UKR_NET_FROM,
      password: UKR_PASSWORD,
    },
  });
};
