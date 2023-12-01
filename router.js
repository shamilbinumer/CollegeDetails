import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);

router.route("/addstaff").post(controller.addStaff);
router.route("/stafflogin").post(controller.staffLogin);


export default router;