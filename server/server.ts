import express, { Request, Response } from "express";
import next from "next";
import errorMiddleware from "./middlewares/errorMiddleware";
import { router } from "./router";
require("dotenv").config({ path: `${__dirname}/../config.env` });

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(express.json());

    server.use("/", router);

    server.all("*", (req: Request, res: Response) => {
      handle(req, res);
    });

    server.use(errorMiddleware);

    server.listen(PORT, (err?: any) => {
      if (err) throw err;
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error("Unable to start server.", error);
    process.exit(1);
  }
})();
