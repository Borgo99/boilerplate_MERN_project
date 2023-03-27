import express from "express";
import { apiRouter } from "./routes/apiRouter";

export const router = express.Router();

router.use("/api", apiRouter);
