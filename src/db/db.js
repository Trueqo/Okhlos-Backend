import { Sequelize } from "sequelize";

<<<<<<< HEAD
const db = new Sequelize(process.env.DB_DATABASE || 'Okhlos', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '',{
=======




const db = new Sequelize(process.env.DB_DATABASE || 'okhlos', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '',{
>>>>>>> feature/julian
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: 3307
})

export default db