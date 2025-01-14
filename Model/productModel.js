import { Schema, model } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: String,
    image: String,
    discount:Number
}, {
    versionKey: false
})

export const Product = model("product", productSchema)