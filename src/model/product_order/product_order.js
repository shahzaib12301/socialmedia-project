import sequelize from "../../db/config.js";
// import {DataTypes} from "sequelize";
// import ProductModel from "../product/product.js";
// import Ordermodel from "../order/order.js";
const product_ordermodel=sequelize.define("product_order",{}
    
,{
    timestamps:false,

});


// ProductModel.belongsToMany(Ordermodel, { through: product_ordermodel,foreignKey: 'pid',sourceKey:"productid"});
// Ordermodel.belongsToMany(ProductModel, { through:  product_ordermodel ,foreignKey: 'oid',sourceKey:"orderid"});

export default product_ordermodel;