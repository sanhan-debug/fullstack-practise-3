import React, { useContext } from 'react';
import { FaTrash, FaShoppingCart, FaUnderline } from 'react-icons/fa';
import { productContext } from '../../Context/productContext';
import axios from 'axios';

function Cards() {

  let { products, getData } = useContext(productContext);

  function handleDelete(id) {
    axios.delete(`http://localhost:3000/products/${id}`)
    getData()
  }



  return (
    <div className="container-fluid py-12">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card border p-4 rounded-lg shadow-md">
              <div className="position-relative">
                {product.discount && (
                  <span className="position-absolute top-0 start-0 bg-danger text-white text-xs px-2 py-1 rounded">-{product.discount}%</span>
                )}
                <img src={product.image} alt={product.name} className="card-img-top w-100 h-100 object-cover rounded" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-lg font-semibold text-gray-800">{product.name}</h5>
                <p className="card-text text-gray-500 mt-1">{product.category}</p>
                <p className="text-danger font-bold text-xl mt-2">${product.price}</p>
                {product.oldPrice && (
                  <p className="text-muted text-decoration-line-through">${product.oldPrice}</p>
                )}
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button className="btn btn-indigo py-2 px-4 rounded hover:bg-indigo-500 d-flex align-items-center">
                    <FaShoppingCart className="me-2" /> Add to Cart
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="btn btn-danger py-2 px-4 rounded hover:bg-red-500 d-flex align-items-center">
                    <FaTrash className="me-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
