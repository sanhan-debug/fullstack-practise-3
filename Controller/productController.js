import { Product } from "../Model/productModel.js";


let getAllProducts = async (req, res) => {
    try {
        let products = await Product.find()
        res.send(products).status(200)
    } catch (err) {
        console.error("get all Product error : ", err)
        res.status(500).send({ error: "get all Product eror : ", detail: err.message })
    }
}

let addProduct = async (req, res) => {
    try {
        let newProduct = await Product.create(req.body)
        res.send(newProduct).status(200)
    } catch (err) {
        console.error("addProduct error : ", err)
        res.status(500).send({ error: "add Product error : ", detail: err.message })
    }
}

let updateProduct = async (req, res) => {
    try {
        let updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ error: "Product not found" });
        }

        res.status(200).send(updatedProduct);
    } catch (err) {
        console.error("updateProduct error : ", err);
        res.status(500).send({ error: "update Product error : ", detail: err.message });
    }
};




let getProductById = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return res.send({ message: "Product not found" }).status(404)
        }
        res.send(product).status(200)
    } catch (err) {
        console.error("delete Product error : ", err)
        res.status(500).send({ error: "getbyid  error : ", detail: err.message })
    }
}

let deleteProductById = async (req, res) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.send("Product not found").status(200)
        }
        res.status(200).send(`deleted element id ${Product._id}`)

    } catch (err) {
        console.error("delete Product error : ", err)
        res.status(500).send({ error: "delete Product error : ", detail: err.message })
    }
}





export { addProduct, getAllProducts, deleteProductById, getProductById ,updateProduct }