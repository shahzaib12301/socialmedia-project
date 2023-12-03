import { Router } from "express";
import AuthController from "../../../controller/auth/userauth/userauth.js";
import UserValidation from "../../../validation/uservalidation/user.js";
const AuthRouter=Router();

AuthRouter.post('/login',UserValidation.Login,AuthController.UserLogin);

export default AuthRouter;