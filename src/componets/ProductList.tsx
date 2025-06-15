// src/components/ProductList.tsx
import { useEffect, useState } from "react";
import { getProducts } from "../Api/productsApi";

type Product = {
  prodct_Id: number;
  product_Name: string;
  product_price: number;
  product_expityDate: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.prodct_Id} className="border p-2 rounded shadow">
            <p><strong>{p.product_Name}</strong></p>
            <p>Price: ₹{p.product_price}</p>
            <p>Expiry: {p.product_expityDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
