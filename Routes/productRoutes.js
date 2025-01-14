import { Router } from "express";
import { addProduct, deleteProductById, getAllProducts, getProductById } from "../Controller/productController.js";

export const productRouter = new Router()

productRouter.get("/",getAllProducts)
productRouter.get("/:id",getProductById)
productRouter.post("/",addProduct)
productRouter.delete("/:id",deleteProductById)