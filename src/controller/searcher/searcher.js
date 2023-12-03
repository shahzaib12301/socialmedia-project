import UserModel from "../../model/user/user.js";
import sequelize from "../../db/config.js";
import PostModel from "../../model/post/post.js";
import LikeModel from "../../model/like/like.js";
const searchercontroller={

GetallFolower:async(req,res)=>{
    try{

       const data = await UserModel.findAll({
        attributes: [
          'username',
          [
            sequelize.literal('(SELECT COUNT(*) FROM "user_follows" WHERE "user_follows"."followid" = "user"."userid")'),
            'followerCount',
          ],
          [
            sequelize.literal('(SELECT COUNT(*) FROM "user_follows" WHERE "user_follows"."followingid" = "user"."userid")'),
            'followingCount',
          ],
        ],
       
      });

      return res.json({
        data,
      });
    }
    catch(error){

        return res.json({
            Message:"There is some problem"
        })
    }
  
},
GetFollower:async(req,res)=>{
    try{
       const {search}=req.params;
       const data = await UserModel.findAll({
        attributes: [
            "userid",
          'username',
          [
            sequelize.literal('(SELECT COUNT(*) FROM "user_follows" WHERE "user_follows"."followid" = "user"."userid")'),
            'followerCount',
          ],
          [
            sequelize.literal('(SELECT COUNT(*) FROM "user_follows" WHERE "user_follows"."followingid" = "user"."userid")'),
            'followingCount',
          ],
        ],
        where:{
            "userid":search,
        }
       
      });

      return res.json({
        data,
      });
    }
    catch(error){

        return res.json({
            Message:"There is some problem"
        })
    }
  

    
        

},
Getallpost:async(req,res)=>{
    try{
    
      const data=await PostModel.findAll({
        attributes:[
            'postid',
          
           [sequelize.literal("COUNT('*')"),"countlikes"]
     

        ],
        include:[{
            model:LikeModel,
            attributes:[]
      }],
      group:["postid"]



      });
       
      

      return res.json({
        data,
      });
    }
    catch(error){

        return res.json({
            Message:`There is some problem  ${error}`
        })
    }
  

    
        

},
Getuserlikes:async(req,res)=>{
    try{

      const data=await UserModel.findAll({
      
        include:[
            PostModel,
            LikeModel,
        
      ],
     
      
      



      });
       
      

      return res.json({
        data,
      });
    }
    catch(error){

        return res.json({
            Message:`There is some problem  ${error}`
        })
    }
  

    
        

}




}

export default searchercontroller;