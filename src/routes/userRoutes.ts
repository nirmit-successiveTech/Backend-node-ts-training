import { Router } from "express";
import { showData, ShowDetails, storeData } from "../controller/userController";
import { validateUser } from "../middleware/validateUser";



const router = Router();

router.get("/userdata",showData);
router.post("/storedata",validateUser,storeData)
router.get("/showdetails",ShowDetails)


export {router};