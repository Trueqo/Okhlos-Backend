import { Sequelize } from "sequelize";



const db = new Sequelize(process.env.DB_DATABASE || 'jqkuxc5h95dn7dkc', process.env.DB_USER || 'x3wcuaof7qkdm3xl', process.env.DB_PASSWORD || 'hdkwycrjmv9n43nh',{
    host: process.env.DB_HOST || 'cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',

})

export default db