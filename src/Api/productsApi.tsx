// src/api/productsApi.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7080/api", // your API base URL
});

export const getProducts = () => api.get("/products");

// export const createProduct = (product: {
//   product_Name: string;
//   product_price: number;
//   product_expityDate: string;
// }) => api.post("/products", product);
