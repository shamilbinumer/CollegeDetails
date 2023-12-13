import { Router } from "express";
import Auth from "./src/Components/MainPage/Auth.js";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/addstaff").post(controller.addStaff);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getfullstaff").get(controller.getFullstaff);
router.route("/getDetails/:id").post(controller.getfullDetails);
router.route("/deletestaff/:id").delete(controller.deleteStaff);
router.route("/editstaff/:id").patch(controller.editStaff);
router.route("/getusername/:phone").get(controller.forgotUsername);
router.route("/forgotepwd/:phone").patch(controller.staffFrgtPwd);
router.route("/addstudent").post(controller.addStudent)
router.route("/getallstuds").get(controller.getStudents)
router.route("/deletestudent/:id").delete(controller.deleteStudent);
router.route("/getstudentdetails/:id").post(controller.getStudentDetails);
router.route("/editstudentdetails/:id").patch(controller.EditStudentDetails);
router.route("/studentlogin").post(controller.StudentLogin);
router.route("/getdetsilsloginedstudent").get(Auth,controller.GetDtsilsLoginedStudent);


export default router;