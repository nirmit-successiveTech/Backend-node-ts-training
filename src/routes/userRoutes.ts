import { Router } from "express";
import { showData, storeData } from "../controller/userController";
import { validateUser, validateUserJwt } from "../middleware/validateUser";
// import { loggerFunction } from "../middleware/loggerFunction";



const router = Router();

router.get("/userdata",validateUserJwt,showData);
router.post("/storedata",validateUser,storeData)



export {router};