import { Router } from "express";
import { checkSchema, showData, storeData } from "../controller/userController";
import { validateUser, validateUserJwt } from "../middleware/validateUser";
import { validateSchema } from "../middleware/validateSchema";
import { validateQuery } from "../middleware/validateQuery";
// import { loggerFunction } from "../middleware/loggerFunction";



const router = Router();

router.get("/userdata",validateUserJwt,showData);
router.post("/storedata",validateUser,storeData);
router.post("/usercredentials",validateSchema,checkSchema);
router.get("/fetchid/:id",validateQuery)



export {router};