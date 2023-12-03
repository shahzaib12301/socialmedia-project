import { Router } from "express";
import product_ordercontroller from "../../controller/product_order/product_order.js";

const product_orderrouter=Router();
product_orderrouter.get('/add',product_ordercontroller.add);

export default product_orderrouter;
