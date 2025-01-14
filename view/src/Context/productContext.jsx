import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios"
export let productContext = createContext()


function ProductProvider({ children }) {

    let [products, setProducts] = useState([])

    function getData() {
        axios.get("http://localhost:3000/products")
            .then(res => {
                setProducts(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    let value = {
        products,
        setProducts,
        getData
    }

    return <productContext.Provider value={value}>{children}</productContext.Provider>
}


export default ProductProvider