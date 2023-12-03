import sequelize from "../../db/config.js";
import PostModel from "../post/post.js";
import UserModel from "../user/user.js";

 const LikeModel=sequelize.define("like",{
   
   
 },{
    createdAt:true,
    updatedAt:false
 });

 PostModel.hasMany(LikeModel,{
   onDelete:'CASCADE',
 });
 LikeModel.belongsTo(PostModel);


 UserModel.hasMany(LikeModel,{
   onDelete:'CASCADE',
 })
 LikeModel.belongsTo(UserModel)


 export default LikeModel;