import sequelize from "../../db/config.js";
import UserModel from "../user/user.js";
import {DataTypes} from "sequelize";

 const User_FollowModel=sequelize.define("user_follow",{
   

    followid: {
        type: DataTypes.INTEGER,
        references: {
          model: UserModel,
          key: 'userid'
        }
      },
      followingid: {
        type: DataTypes.INTEGER,
        references: {
          model: UserModel,
          key: 'userid'
        }
      }
 },{
    timestamps:false,
 });

UserModel.belongsToMany(UserModel ,{ through: User_FollowModel ,foreignKey:"followid",  as: "Follow" })
UserModel.belongsToMany(UserModel,{ through: User_FollowModel,foreignKey:"followingid", as: "Following" })

 export default User_FollowModel;

