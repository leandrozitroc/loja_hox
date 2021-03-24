
import * as sequelize from "sequelize";
import {UserFactory} from "./Auth";
import {CategoryFactory} from "./Category";
import {ProductsFactory} from "./Products"

export const dbConfig = new sequelize.Sequelize(
    (process.env.DB_NAME = "loja_hox1"),
    (process.env.DB_USER = "hox"),
    (process.env.DB_PASSWORD = "123456"),
    {
        port: Number(process.env.DB_PORT) || 3306,
        host: process.env.DB_HOST || "localhost",
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);



export const User = UserFactory(dbConfig);
export const Category = CategoryFactory(dbConfig);
export const Products = ProductsFactory(dbConfig)




Products.hasOne(Category);

