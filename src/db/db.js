import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_DATABASE || 'Okhlos', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '',{
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: 3307
})

export default db