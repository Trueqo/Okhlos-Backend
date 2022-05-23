import db from "../db/db.js";

import { DataTypes } from "sequelize";

const StudentModel = db.define('students', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    cohort: { type: DataTypes.INTEGER },
    age: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.BIGINT },
    status: { type: DataTypes.INTEGER },
    gender: { type: DataTypes.STRING },
    
    
})

export default StudentModel;