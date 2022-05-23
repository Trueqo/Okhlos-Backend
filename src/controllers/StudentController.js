import StudentModel from '../models/StudentModel.js';
import db from '../db/db.js';
import { Sequelize } from "sequelize";
const op = Sequelize.Op;

export const getStudent = async (req, res) => {
	try {
		const [result, metadata] = await db.query(`
			users.email, estudiantes.name, estudiantes.cohort, estudiantes.age, estudiantes.phone, 
			estudiantes.status,estudiantes.gender, programs.name,interests.name, 
			estudiante_interest.nivel FROM estudiantes, users, programs, interests, 
			estudiante_interest WHERE estudiantes.id_user = users.id and estudiantes.id_program = 
			programs.id and estudiante_interest.id_estudiante = estudiantes.id and estudiante_interest.id_interest =
			 interests.id; 
		`);
		res.json(result)
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getAllStudents = async (req, res) => {
	try {
		const students = await StudentModel.findAll()
		res.json(students)
	} catch (error) {
		res.json({ message: error.message })
	}
}
export const getMaxCohort = async (req, res) => {
	try {
		const [ result, metadata ] = await db.query(`
      SELECT max(cohort)
      FROM Estudiantes
    `);
		res.json(result)
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getOneStudent = async (req, res) => {
	try {
		const student = await StudentModel.findAll({
			where: { id: req.params.id },
		});
		res.json(student[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createStudent = async (req, res) => {
	try {
		await StudentModel.create(req.body);
		res.json({
			message: '¡Registro creado correctamente!',
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateStudent = async (req, res) => {
	try {
		await StudentModel.update(req.body, {
			where: { id: req.params.id },
		});
		res.json({
			message: '¡Registro actualizado correctamente!',
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteStudent = async (req, res) => {
	try {
		await StudentModel.destroy({
			where: { id: req.params.id },
		});
		res.json({
			message: '¡Registro eliminado correctamente!',
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const searchStudent = async (req, res) => {

	try {
		const student = await db.query('SELECT * FROM Estudiantes WHERE name LIKE "%' + req.params.name + '%"')
		res.json(student);
	}  catch (error) {
		res.json({ message: error.message })
	}
};

export const getStudentInterests = async (id) => {
	try {
		const student = await db.query(`
			SELECT students.id as id_student, students_interests.id_interests_fk as interest 
			FROM
				students,
				students_interests
			WHERE
				students.id = students_interests.id_students_fk and
				students.id = ${id}
		`)

		let interests = []
		
		for(let i=0 ; i<3 ; i++){
			interests.push(student[0][i].interest);
		}

		return(interests)
	} catch (error) {
		console.log("message:" + error.message)
	}
};

export const getStudentAge = async (id) => {
	try {
		const student = await db.query(`
			SELECT students.birth_date
			FROM
				students
			WHERE
				students.id = ${id}
		`)
		let date = student[0][0].birth_date.split("-");
		let year = parseInt(date[0]);
		
		return(year);
	}  catch (error) {
		console.log("message:" + error.message)
	}
};

export const getStudentsAvailable = async (req, res) => {
	try {
		const [result, metadata] = await db.query(`
		SELECT Estudiantes.id as id_student, Estudiantes.name, Estudiantes.last_name, Estudiantes.birth_date
		FROM 
			Estudiantes
		WHERE
			Estudiantes.id not in (
				SELECT id_students_fk
				FROM 
					_matchs
				WHERE 
					_matchs.id_students_fk = students.id
			)
		ORDER BY Estudiantes.id
		`);
		res.json(result);
	} catch (error) {
		res.json({ message: error.message });
	}
};