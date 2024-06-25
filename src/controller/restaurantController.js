import { responseSend } from "../config/config.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/sequelize-con.js";

let model = initModels(sequelize)
export const getAllRestaurant = async (req, res) => {
    let data = await model.restaurant.findAll()
    responseSend(res, data, "Thành công !", 200)
}