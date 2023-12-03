import sequelize from "../../db/config.js";
import {DataTypes} from "sequelize";


const Ordermodel= sequelize.define("order",{

    orderid:{
        type:DataTypes.INTEGER,
        primaryKey:true,

    },
     costumername: {
        type: DataTypes.STRING,
        allowNull: false
      }
},{
    timestamps:false,
});

export default Ordermodel;