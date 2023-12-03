import { Router } from "express";
import UserController from "../../controller/user/user.js";
import UserValidation from "../../validation/uservalidation/user.js";
const UserRouter=Router();
UserRouter.post('/createuser',UserValidation.UserCreate,UserController.CreateUser);
UserRouter.post('/search/:search',UserController.SearchUser);
UserRouter.put('/update',UserController.UpdateUser);
UserRouter.delete('/delete/:del',UserController.RemoveUser);
UserRouter.get('/display',UserController.DisplayUser);



export default UserRouter;