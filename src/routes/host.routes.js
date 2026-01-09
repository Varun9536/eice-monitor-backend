import express from "express";
import { requireLogin } from "../middlewares/auth.middlewares.js";
import { getHostGroups, getHostsByGroup } from "../controllers/host.controller.js";

const hostRouter = express.Router();

hostRouter.get("/groups", requireLogin , getHostGroups );
hostRouter.post("/groups/hosts", requireLogin, getHostsByGroup);

export default hostRouter;
