import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config({path: './.env'})


const sequelizeConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { 
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: parseInt(process.env.DB_PORT
    )
})



 export { sequelizeConnection }