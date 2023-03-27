import express from "express";

export const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.send("Hello from API!"));
