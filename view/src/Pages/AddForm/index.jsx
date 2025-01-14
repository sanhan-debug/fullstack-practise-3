import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios'; 

function AddProductForm() {
    const [status, setStatus] = useState('');

    const initialValues = {
        _id: '',
        name: '',
        price: '',
        image: '',
        discount: 0
    };

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:3000/products', values);
            console.log(response)
        } catch (er) {
            console.error(er)
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Add New Product</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter product name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <Field
                            type="text"
                            id="price"
                            name="price"
                            className="form-control"
                            placeholder="Enter price"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <Field
                            type="text"
                            id="image"
                            name="image"
                            className="form-control"
                            placeholder="Enter image URL"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="discount" className="form-label">Discount</label>
                        <Field
                            type="number"
                            id="discount"
                            name="discount"
                            className="form-control"
                            placeholder="Enter discount percentage"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Add Product</button>
                </Form>
            </Formik>

            {status && <p className="mt-3 text-center">{status}</p>}
        </div>
    );
}

export default AddProductForm;
