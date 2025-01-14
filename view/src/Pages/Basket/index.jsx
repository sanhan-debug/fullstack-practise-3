import React, { useContext } from 'react'
import { basketContext } from '../../Context/basketContext'
import { FaTrash } from 'react-icons/fa'

function BasketPage() {
    const { basket, setBasket } = useContext(basketContext)

   
    const removeItem = (id) => {
        setBasket(basket.filter(item => item.id !== id))
    }

  
    const totalAmount = basket.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Your Basket</h2>
            {basket.length === 0 ? (
                <p className="text-center">Your basket is empty.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="d-flex justify-content-between">
                <h4>Total: ${totalAmount.toFixed(2)}</h4>
                <button className="btn btn-success">submit</button>
            </div>
        </div>
    )
}

export default BasketPage
