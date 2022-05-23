import db from "../db/db.js";

import { DataTypes } from "sequelize";

const StudentModel = db.define('Estudiantes', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    cohort: { type: DataTypes.INTEGER },
    age: { type: DataTypes.INTEGER },
<<<<<<< HEAD
    phone: { type: DataTypes.INTEGER },
    status: { type: DataTypes.BOOLEAN },
    gender: { type: DataTypes.STRING }
=======
    phone: { type: DataTypes.BIGINT },
    status: { type: DataTypes.INTEGER },
    gender: { type: DataTypes.STRING },
    
    
>>>>>>> feature/julian
})

export default StudentModel;