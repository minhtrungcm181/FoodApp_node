import express from "express";
import { getAllRestaurant, getLikeByUser, getResLikeByUser, likeRestaurant, unlikeByUser } from "../controller/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.get("/all", getAllRestaurant)

restaurantRouter.post("/like", likeRestaurant)

restaurantRouter.post("/unlike", unlikeByUser)

restaurantRouter.get("/get-like-by-user/:user_id", getLikeByUser)

restaurantRouter.get("/get-restaurant-like-by-user/:user_id", getResLikeByUser)

export default restaurantRouter