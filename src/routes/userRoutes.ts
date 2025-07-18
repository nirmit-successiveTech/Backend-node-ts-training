import { Router } from "express";
import { checkSchema, showData, storeData } from "../controller/userController";
import { validateUser, validateUserJwt } from "../middleware/validateUser";
import { validateSchema } from "../middleware/validateSchema";
import { validateQuery } from "../middleware/validateQuery";
import { validateLocation } from "../middleware/validateLocation";
import { dynamicValidation } from "../middleware/dynamicValidation";
// import { loggerFunction } from "../middleware/loggerFunction";



const router = Router();

router.get("/userdata",validateUserJwt,showData);
router.post("/storedata",validateUser,storeData);
router.post("/usercredentials",validateSchema,checkSchema);
router.get("/fetchid/:id",validateQuery);
router.get("/location",validateLocation);
router.post('/user/register',dynamicValidation)



export {router};