import User_FollowModel from "../../model/user_follow/user_follow.js";
import UserModel from "../../model/user/user.js";
import PostModel from "../../model/post/post.js";
const FollowerController={

     CreateFollower:async(req,res)=>{
        try{

            const {followid,followingid}=req.body;
            const data= await  User_FollowModel.create({
                followid,
                followingid

            })
         
            return res.json({
                message:"Data is Inserted...",
                data,
            })


        }catch(error){
            return res.status(500).json({
                Message:"The error occur while adding new user..."
            })
        }
    },
    SearchFollower:async(req,res)=>{
        try{ 
            const {search}=req.params;
            const data=await  UserModel.findAll({

                where:{
                    userid:search,
                },
            
               
                include:[{
                    model:UserModel,
                    as:"Following",
                    // model:UserModel,
                    // as:"Follow",
                    
             
                }],
                // group:['userid']
          
                
               
            })

            return res.json({
                data,
            })



        }catch(error){
            return res.status(500).json({
                message:"there is something wrong"
            })
        }
    },
    UpdateFollower:async(req,res)=>{
        try{
            const {followid,followingid}=req.body;
            const data=await  User_FollowModel.findOne({
                where:{
                    followid,
                }
            })
            data.followid=followid,
            data.followingid=followingid
         
            const newdata= await data.save()
            return res.json({
                Message:"Data Updated...",
                newdata,
            })
        }
        catch(error){

            res.json({
                Message:error,
            })


        }
    },
    RemoveFollower:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await  User_FollowModel.findOne({
                where:{
                    followerid:del,
                }
               
                
            })
            await data.destroy()

            return res.json({
                message:"This Entry is Deleted...",
               
            })



        }catch(error){
            return res.status(500).json({
                message:error
            })
        }


    },
    DisplayFollower:async(req,res)=>{

        try{
            const data= await  User_FollowModel.findAll()
            res.json({
                data
            })


        }catch(error){
            return res.status(500).json({
                message:error
            })
        }

    }

}


export default FollowerController;