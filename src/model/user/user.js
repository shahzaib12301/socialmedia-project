import sequelize from "../../db/config.js";
import {DataTypes} from "sequelize";


 const UserModel=sequelize.define("user",{
    userid:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
       
    },
    age:{
        type:DataTypes.STRING,
      
    },
    phoneno:{
        type:DataTypes.STRING,
    
    },
    Email:{
        type:DataTypes.STRING,
    
    },
    Password:{
        type:DataTypes.STRING,
    
    }
 },{
    timestamps:false,
 });




 export default UserModel;