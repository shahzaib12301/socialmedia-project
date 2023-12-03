import sequelize from "../../db/config.js";
import {DataTypes} from "sequelize";
import UserModel from "../user/user.js";

 const PostModel=sequelize.define("post",{
    postid:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    type:{
        type:DataTypes.STRING,
      
    }
 },{
    timestamps:false,
 });

 UserModel.hasMany(PostModel,{
    onDelete:'CASCADE',
 });
 PostModel.belongsTo(UserModel);


 export default PostModel;