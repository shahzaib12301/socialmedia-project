import { Router } from "express";
import ProductController from "../../controller/product/product.js";

const ProductRoute=Router();

ProductRoute.post("/add",ProductController.createProduct);

export default ProductRoute;