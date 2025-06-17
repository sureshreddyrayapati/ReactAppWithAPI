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

  {products.length > 0 && (
    <div className="overflow-x-auto">
      <table border={2}>
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Id</th>
            <th className="px-4 py-2 border">Product Name</th>
            <th className="px-4 py-2 border">Price (₹)</th>
            <th className="px-4 py-2 border">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.prodct_Id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{p.prodct_Id}</td>
              <td className="px-4 py-2 border">{p.product_Name}</td>
              <td className="px-4 py-2 border">{p.product_price}</td>
              <td className="px-4 py-2 border">{p.product_expityDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default ProductList;
