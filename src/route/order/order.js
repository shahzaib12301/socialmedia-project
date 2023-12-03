import { Router } from "express";
import orderController from "../../controller/order/order.js";

const orderrouter=Router();
orderrouter.post("/add",orderController.createorder);




export default orderrouter;