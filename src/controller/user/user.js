
import PostModel from "../../model/post/post.js";
import sequelize from "../../db/config.js";
import UserModel from "../../model/user/user.js";
import { hash } from "bcrypt";
import Send_Mail from "../../mail/mail.js";

const UserController = {
  CreateUser: async (req, res) => {
    try {
      const { userid, username, age, phoneno,Email,Password } = req.body;


      const Email_check=await UserModel.findOne({
        attributes:[
            "Email"
        ],
        where:{
            Email,
        }
       
        
        
    })
    if(Email_check){
        return res.json({
            Message:`This email ${Email_check.Email} already exists...`
        })
    }

    const hpassword=await hash(Password,10)
      const data = await UserModel.create({
        userid,
        username,
        age,
        phoneno,
        Email,
        Password :hpassword
      });

      Send_Mail(
        {
          to:data.Email,
          name:data.username
        }
      )

      return res.json({
        message: "Data is Inserted...",
        data,
      });
    } 
    catch (error) {
       res.status(500).json({
        Message: "The error occur while adding new user...",
        error
      });
    }
  },
  SearchUser: async (req, res) => {
    try {
      const { search } = req.params;
     

      const data = await UserModel.findAll({
        attributes: [
          "username",
          [sequelize.literal('COUNT("posts"."postid")'), 'CountPost'],
      
        ],
        include: [{
          model: PostModel,
          attributes:[]
          
        
        }],
        group:['userid']
      });

        
        
       
    
        
      

      return res.json({
        data,
      });
    } catch (error) {
        console.log(error)
      return res.status(500).json({
         error,
      });
    }
  },
  UpdateUser: async (req, res) => {
    try {
      const { userid, username, age, phoneno ,Email,Password } = req.body;
      const data = await UserModel.findOne({
        where: {
          userid,
        },
      });
      (data.username = username), (data.age = age), (data.phoneno = phoneno), (data.Email = Email), (data.Password = Password);
      const newdata = await data.save();
      return res.json({
        Message: "Data Updated...",
        newdata,
      });
    } catch (error) {
      res.json({
        Message: error,
      });
    }
  },
  RemoveUser: async (req, res) => {
    try {
      const { del } = req.params;
      const data = await UserModel.findOne({
        where: {
          userid: del,
        },
      });
      await data.destroy();

      return res.json({
        message: "This Entry is Deleted...",
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  },
  DisplayUser: async (req, res) => {
    try {
      const data = await UserModel.findAll();
      res.json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  },
};

export default UserController;
