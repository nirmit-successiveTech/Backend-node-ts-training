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
import { AuthUser } from "../middleware/authUser";
import { AuthUserSignUp } from "../controller/authSignup";
import { AuthUserLogin } from "../middleware/authLogin";
import { AdminToken } from "../middleware/adminrole";
import { Crud } from "../controller/crud";





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
const  authUser= new AuthUser();
const authUserSignUp= new AuthUserSignUp();
const  authUserLogin= new AuthUserLogin();
const adminToken= new AdminToken();

const crud = new Crud();


router.get("/userdata",validateUserCredentials.validateUserJwt,userController.showData);
router.post("/storedata",validateUserCredentials.validateUser,userController.storeData);
router.post("/usercredentials",validateUserSchema.validateSchema,userController.checkSchema);
router.get("/fetchid/:id",adminToken.verifyToken,validateUserQuery.validateQuery);  //a11
router.get("/location",adminToken.verifyToken,validateUserLocation.validateLocation);  // a11
router.post('/user/register',dynamicUserValidation.dynamicValidation);
router.get('/checkapi',adminToken.verifyToken,checkheath.checkHealthApi); //a11

router.post('/newuser',storeNewUser.newUserDetail,userController.newUserStorage) //a9 
router.post('/signup',signUpUser.newSignUp,userController.signUser) //a10
router.post('/login',userLogin.existingUserLogin);

router.post('/authsignup',authUser.authValidation,authUserSignUp.UserSignUp) //a11
router.post('/authlogin',authUserLogin.UserLogin); //a11

// router.get('/verify-token',adminToken.verifyToken);

//crud 
router.post("/create",crud.create);
router.put("/update/:id",crud.update)
router.delete("/delete/:id",crud.delete)

export {router};