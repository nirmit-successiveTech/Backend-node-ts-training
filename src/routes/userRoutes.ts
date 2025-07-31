import { Router } from "express";
import { ValidateUserCredentials } from "../middleware/validateUser";
import {  ValidateUserSchema } from "../middleware/validateSchema";
import { ValidateUserQuery } from "../middleware/validateQuery";
import { UserController } from "../controller/userController";
import { ValidateUserLocation } from "../middleware/validateLocation";
import { DynamicUserValidation } from "../middleware/dynamicValidation";
import { HealthCheck } from "../middleware/checkHeath";
import { StoreNewUser } from "../middleware/storeUser";
import { SignUpUser } from "../middleware/signupDetails";
import { UserLogin } from "../controller/userLogin";





const router = Router();
const userController = new UserController();
const validateUserSchema = new ValidateUserSchema();
const validateUserQuery = new ValidateUserQuery();
const validateUserLocation = new ValidateUserLocation();
const dynamicUserValidation = new DynamicUserValidation();
const validateUserCredentials= new ValidateUserCredentials();
const checkheath = new HealthCheck();
const storeNewUser= new StoreNewUser();
const  signUpUser= new SignUpUser();
const userLogin= new UserLogin();


router.get("/userdata",validateUserCredentials.validateUserJwt,userController.showData);
router.post("/storedata",validateUserCredentials.validateUser,userController.storeData);
router.post("/usercredentials",validateUserSchema.validateSchema,userController.checkSchema);
router.get("/fetchid/:id",validateUserQuery.validateQuery);
router.get("/location",validateUserLocation.validateLocation);
router.post('/user/register',dynamicUserValidation.dynamicValidation);
router.get('/checkapi',checkheath.checkHealthApi);

router.post('/newuser',storeNewUser.newUserDetail,userController.newUserStorage) //a9 
router.post('/signup',signUpUser.newSignUp,userController.signUser) //a10
router.post('/login',userLogin.existingUserLogin)



export {router};