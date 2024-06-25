import express from "express";
import { getAllRestaurant } from "../controller/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.get("/all", getAllRestaurant)


export default restaurantRouter