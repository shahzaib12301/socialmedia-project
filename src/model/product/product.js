import sequelize from "../../db/config.js";
import {DataTypes} from "sequelize";


   
        const ProductModel=sequelize.define("Product",{
            productid:{
                type:DataTypes.INTEGER,
                primaryKey:true,
             },
            productname: {
                type: DataTypes.STRING,
                allowNull: false
              },
              productprice:{
                type: DataTypes.STRING,
                allowNull: false

              }

        

            
        },{
            timestamps:false,
        });




    


export default ProductModel;