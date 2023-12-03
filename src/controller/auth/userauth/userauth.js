import { compare,hash } from "bcrypt";
import jwt from "jsonwebtoken";
import Send_Mail from "../../../mail/mail.js";

import UserModel from "../../../model/user/user.js"
const AuthController={

    UserLogin:async(req,res)=>{

        try{
           const{Email,Password}=req.body;
           const data=await UserModel.findOne({
            where:{
                Email
            }
           })
           if(!data){
            return res.json({
                Message:"Email not found.."
            })
           }

           const comparepassword=await compare(Password,data.Password)
           if(!comparepassword){
            return res.json({
                Message:"Invalid Password.."
            })

           }
           const data1 = {
            id: data.userid,
            email: data.Email,
            test: "test",
          };
    
          const token = jwt.sign(data1, process.env.JWT_SECRET, {
            expiresIn: "14d",
          });


          Send_Mail({
            to:data.Email,
            name:data.username,
        })
          
           return res.json({
            Message:"Successfully logined...",
            token,
        
           })

        }
        catch(error){
            return res.json({
                Message:"There is some error...",
                error

            })
        }
    }


    
}

export default AuthController;