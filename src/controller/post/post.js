
import PostModel from "../../model/post/post.js";
import LikeModel from "../../model/like/like.js";
import sequelize from "../../db/config.js";
import { Sequelize } from "sequelize";
 
 const PostController={
    createPost:async(req,res)=>{
        try{
            const {postid,type,userUserid}=req.body;
           const data=await PostModel.create({
                  postid,
                 type,
                  userUserid
            });
            
            return res.status(201).json({
                Message:"The post is Added...",
                data,
            });
               
        }
        catch(error)
        {
            return res.status(500).json({
                Message:"The post is not Added...",
                
            });
        }
        
    },
    SearchPost:async(req,res)=>{
        try{ 
            const {search}=req.params;
            const data=await PostModel.findAll({
                
                where:{
                    postid:search
                },
                include:[
                    LikeModel
                    
                ]
               
               
            })
           
          

            return res.json({
                
                data
            })



        }catch(error){
            return res.status(500).json({
                message:"there is something wrong"
            })
        }
    },
    UpdatePost:async(req,res)=>{
        try{
            const {postid,type,userUserid}=req.body;
            const data=await PostModel.findOne({
                where:{
                    postid,
                }
            })
            data.postid=postid,
            data.type=type,
            data.userUserid=userUserid
            const newdata= await data.save()
            return res.json({
                Message:"Data Updated....",
                newdata,
            })
        }
        catch(error){

            res.json({
                Message:error,
            })


        }
    },
    RemovePost:async(req,res)=>{

        try{ 
            const {del}=req.params;
            const data=await PostModel.findOne({
                where:{
                    postid:del,
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
    DisplayPost:async(req,res)=>{

        try{
            const data= await PostModel.findAll({
                attributes:[
                    "postid",
                    [Sequelize.fn("COUNT", Sequelize.col("*")), "LikeCount"]
                ],
                include:[{
                    model:LikeModel,
                    attributes:[]

                }],
                group:['postid']
            })
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
 export default PostController;