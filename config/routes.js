import express from "express";
import HomeController from "../app/controllers/HomeController";

const router = express.Router();

/* GET home page. */
router.get("/", HomeController.index);

export default router;
