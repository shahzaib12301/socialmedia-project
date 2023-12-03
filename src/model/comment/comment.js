import sequelize from "../../db/config.js";
// import {DataTypes} from "sequelize";
import PostModel from "../post/post.js";
import UserModel from "../user/user.js";

 const CommentModel=sequelize.define("comment",{
   //  commentid:{
   //      type:DataTypes.INTEGER,
   //      primaryKey:true
   //  },
   
 },{
    createdAt:true,
    updatedAt:false
 });

 PostModel.hasMany(CommentModel,{
   onDelete:'CASCADE',
 });
 CommentModel.belongsTo(PostModel);

 UserModel.hasMany(CommentModel,{
   onDelete:'CASCADE',
 });
 CommentModel.belongsTo(UserModel);


 export default CommentModel;