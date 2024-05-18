import { createConection } from "./helpers/connectMongo.js";
import { app } from "./app.js";
import "./helpers/emailSendSchedule.js";

const { PORT } = process.env;

const startServer = async () => {
  try {
    await createConection();
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  } catch (er) {
    console.log(er);
  }
};
startServer();
