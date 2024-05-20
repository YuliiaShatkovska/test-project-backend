import { createConection } from "./helpers/connectMongo.js";
import { app } from "./app.js";
// import "./helpers/emailSendSchedule.js";

import emailSendSchedule from "./helpers/emailSendSchedule.js";

const { PORT } = process.env;

const startServer = async () => {
  try {
    await createConection();
    app.listen(PORT, () => {
      console.log("Server is running!");
      emailSendSchedule();
    });
  } catch (er) {
    console.log(er);
  }
};
startServer();
