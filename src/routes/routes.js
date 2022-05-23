import express from "express";
import { createActualRole, deleteActualRole, getActualRole, getOneActualRole, updateActualRole } from "../controllers/ActualRoleController.js";
import { createAdmin, deleteAdmin, getAdmin, getOneAdmin, updateAdmin } from "../controllers/AdminController.js";
import { createBusiness, deleteBusiness, getBusiness, getOneBusiness, updateBusiness } from "../controllers/BusinessController.js";
import { createInterests, deleteInterests, getInterests, getOneInterests, updateInterests } from "../controllers/InterestsController.js";

import { createMentor, deleteMentor, getMentor, getOneMentor, updateMentor, getAllMentors } from "../controllers/MentorController.js";

import { createPrograms, deletePrograms, getOnePrograms, getPrograms, updatePrograms } from "../controllers/ProgramsController.js";
import { createSessions, deleteSessions, getOneSessions, getSessions, updateSessions, getAllSessions } from "../controllers/SessionsController.js";
import { createStudent, deleteStudent, getOneStudent, getStudent, updateStudent, getAllStudents, searchStudent, getMaxCohort, getStudentsAvailable } from "../controllers/StudentController.js";
import { createStudies, deleteStudies, getOneStudies, getStudies, updateStudies } from "../controllers/StudiesController.js";
<<<<<<< HEAD
import { createUsers, deleteUsers, getOneUsers, getUsers, updateUsers } from "../controllers/UsersController.js";
import { checkLogin } from "../controllers/LoginController.js";
import { createUserStudent, deleteAllUserStudent, getUserStudent } from "../controllers/userStudentsController.js";
// import { getMatch, getMatchCohort, updateMatch, calculateMatch, updateMatchAutomatic, createMatch } from "../controllers/MatchController.js";
=======
import { createUsers, deleteUsers, getOneUsers, getUsers, register, updateUsers } from "../controllers/UsersController.js";
import { authController, checkLogin } from "../controllers/LoginController.js";
import { getMatch, getMatchCohort, updateMatch, calculateMatch, updateMatchAutomatic, createMatch } from "../controllers/MatchController.js";
>>>>>>> feature/julian


//middelwares
import { isAuth } from "../middelwares/auth.js";
import { loginP } from "../controllers/PruebaLogin.js";


const router = express.Router();

//########## Login sin JWT y datos por el headers ###########
router.get('/login/:email/:password', checkLogin)
//########## Login con JWT y datos por el body ###########
router.post('/login2', loginP)

<<<<<<< HEAD
// router.get('/match/calculate/:id_student', calculateMatch)
// router.get('/match/:cohort/:program', getMatchCohort)
// router.get('/matchs', getMatch)
// router.put('/match/update/:id_student/:id_mentor', updateMatch)
// router.put('/match/confirm', updateMatchAutomatic)
// router.post('/match/create', createMatch)

router.get('/admin', getAdmin) //funciona
router.get('/admin/:id', getOneAdmin) //funciona
router.post('/admin', createAdmin)  // funciona
router.put('/admin/:id', updateAdmin) //funciona
router.delete('/admin/:id', deleteAdmin) //funciona

//revisar 
router.get('/all-mentors', getAllMentors) //funciona
router.get('/mentors', getMentor) //funciona
router.get('/mentor/:id', getOneMentor) //funciona
router.post('/mentor', createMentor) //funciona
router.put('/mentor/:id', updateMentor) //funciona
router.delete('/mentor/:id', deleteMentor) //funciona
// router.get('/mentors/available', getMentorsAvailable)

router.get('/all-sessions', getAllSessions) //funciona
router.get('/sessions', getSessions) //funciona
router.get('/sessions/:id', getOneSessions) //funciona
router.post('/sessions', createSessions) //funciona
router.put('/sessions/:id', updateSessions) //funciona
router.delete('/sessions/:id', deleteSessions) //funciona

//revisar
router.get('/all-students', getAllStudents) //funciona
=======
router.get('/match/calculate/:id_student', calculateMatch)
router.get('/match/:cohort/:program', getMatchCohort)
router.get('/matchs', getMatch)
router.put('/match/update/:id_student/:id_mentor', updateMatch)
router.put('/match/confirm', updateMatchAutomatic)
router.post('/match/create', createMatch)

router.get('/admin', getAdmin)
router.get('/admin/:id', getOneAdmin)
router.post('/admin', createAdmin)
router.put('/admin/:id', updateAdmin)
router.delete('/admin/:id', deleteAdmin)

router.get('/all-mentors', getAllMentors)
router.get('/mentors', getMentor)
router.get('/mentor/:id', getOneMentor)
router.post('/mentor', createMentor)
router.put('/mentor/:id', updateMentor)
router.delete('/mentor/:id', deleteMentor)
router.delete('/admin/:id', deleteMentor)
router.get('/mentors/available', getMentorsAvailable)


router.get('/all-sessions', getAllSessions)
router.get('/sessions', getSessions)
router.get('/sessions/:id', getOneSessions)
router.post('/sessions', createSessions)
router.put('/sessions/:id', updateSessions)
router.delete('/sessions/:id', deleteSessions)

//################# Sin el middelwares ##########

router.get('/all-students', getAllStudents)

//################# Con el middelwares ##########
router.get('/all-studentss',isAuth, getAllStudents)

>>>>>>> feature/julian
router.get('/students', getStudent)
router.get('/search-students/:name', searchStudent)
router.get('/student/:id', getOneStudent) //funciona
router.get('/students/max-cohort', getMaxCohort)
router.post('/student', createStudent)
router.put('/student/:id', updateStudent)
router.delete('/student/:id', deleteStudent)
router.get('/students/available', getStudentsAvailable)

<<<<<<< HEAD
router.get('/cargo', getActualRole) //funciona
router.get('/cargo/:id', getOneActualRole) //funciona
router.post('/cargo', createActualRole) //funciona
router.put('/cargo/:id', updateActualRole) //funciona
router.delete('/cargo/:id', deleteActualRole) //funciona

router.get('/business', getBusiness) //funciona
router.get('/business/:id', getOneBusiness) //funciona
router.post('/business', createBusiness) // funciona
router.put('/business/:id', updateBusiness) // funciona
router.delete('/business/:id', deleteBusiness) //funciona

router.get('/interests', getInterests) //funciona
router.get('/interests/:id', getOneInterests) //funciona
router.post('/interests', createInterests) //funciona
router.put('/interests/:id', updateInterests) //funciona
router.delete('/interests/:id', deleteInterests) //funciona

router.get('/programs', getPrograms) //funciona
router.get('/programs/:id', getOnePrograms) //funciona
router.post('/programs', createPrograms) //funciona
router.put('/programs/:id', updatePrograms) //funciona
router.delete('/programs/:id', deletePrograms) //funciona

router.get('/studies', getStudies) //funciona
router.get('/studies/:id', getOneStudies) //funciona
router.post('/studies', createStudies) //funciona
router.put('/studies/:id', updateStudies) //funciona
router.delete('/studies/:id', deleteStudies) //funciona

router.get('/users', getUsers) //funciona
router.get('/users/:id', getOneUsers) //funciona
router.post('/users', createUsers) //funciona
router.put('/users/:id', updateUsers) //funciona
router.delete('/users/:id', deleteUsers) //funciona

router.get('/user/student', getUserStudent) //funciona
router.post('/create/userStudent', createUserStudent) //funciona
router.delete('/delete/userStudent', deleteAllUserStudent) //funciona
=======
router.get('/actual-role', getActualRole)
router.get('/actual-role/:id', getOneActualRole)
router.post('/actual-role', createActualRole)
router.put('/actual-role/:id', updateActualRole)
router.delete('/actual-role/:id', deleteActualRole)

router.get('/business', getBusiness)
router.get('/business/:id', getOneBusiness)
router.post('/business', createBusiness)
router.put('/business/:id', updateBusiness)
router.delete('/business/:id', deleteBusiness)

router.get('/interests', getInterests)
router.get('/interests/:id', getOneInterests)
router.post('/interests', createInterests)
router.put('/interests/:id', updateInterests)
router.delete('/interests/:id', deleteInterests)

router.get('/programs', getPrograms)
router.get('/programs/:id', getOnePrograms)
router.post('/programs', createPrograms)
router.put('/programs/:id', updatePrograms)
router.delete('/programs/:id', deletePrograms)

router.get('/studies',authController, getStudies)
router.get('/studies/:id', getOneStudies)
router.post('/studies', createStudies)
router.put('/studies/:id', updateStudies)
router.delete('/studies/:id', deleteStudies)

router.get('/users', getUsers)
router.get('/users/:id', getOneUsers)
router.post('/users', createUsers)
// prueba
router.post('/userss', register)
router.put('/users/:id', updateUsers)
router.delete('/users/:id', deleteUsers)

>>>>>>> feature/julian

export default router
