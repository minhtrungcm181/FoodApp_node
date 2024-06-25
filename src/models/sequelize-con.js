import { Sequelize } from "sequelize";

const sequelize = new Sequelize("food_sql", "root", "admin", {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
})
export default sequelize