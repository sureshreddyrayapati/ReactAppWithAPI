// UpdateProduct.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    prodct_Id: '', // this is needed to identify which product to update
    product_Name: '',
    product_Price: '',
    product_ExpityDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7080/api/Products/${product.prodct_Id}`, product);
      alert('Product updated!');
    } catch (error) {
      console.error(error);
      alert('Error updating product');
    }
  };

  return (
    <form onSubmit={handleUpdate}>
    <h2>Update Product</h2>
      <input name="prodct_Id" onChange={handleChange} placeholder="Product ID" />
      <input name="product_Name" onChange={handleChange} placeholder="New Name" />
      <input name="product_Price" onChange={handleChange} placeholder="New Price" />
      <input name="product_ExpityDate" type="date" onChange={handleChange} />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
