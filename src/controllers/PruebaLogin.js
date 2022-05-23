import db from "../db/db.js"
import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs"

const conexion = db

export const loginP = async (req, res, next) => {

    const email = req.body.email
    const password = req.body.password
    console.log(email)
    console.log(password)

    try {
        
        // const [ results, metadata ] = await db.query(`SELECT id,role FROM users
        //     WHERE email='${email}' and password='${password}'`);

            conexion.query(`SELECT * FROM users WHERE email ='${email}'`,[email],async (error, results)=>{
                // if (!results) { return next() }
                    // console.log(await bcryptjs.compare(password, results[0].password))
                    
                if (!(await bcryptjs.compare(password, results[0].password))) {
                   console.log("Entre al if") 
                 }else{
                    console.log("No entre al if") 
                    const token = jsonwebtoken.sign(results[0], process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIME_EXPIRE })
                    console.log(results[0])
                    const data = {'acces':token}
                    res.json(data);
                    return next()
                 }
            })
            
            
    } catch (error) {
        console.log(error)
        return next()
    }

}
