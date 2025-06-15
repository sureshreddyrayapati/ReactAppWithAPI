// AddProduct.tsx
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_Name: '',
    product_Price: '',
    product_ExpityDate: '',
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7080/api/Products', product);
      alert('Product added!');
    } catch (error) {
      console.error(error);
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Products</h2>
      <input name="product_Name" onChange={handleChange} placeholder="Name" />
      <input name="product_Price" onChange={handleChange} placeholder="Price" />
      <input name="product_ExpityDate" type="date" onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
