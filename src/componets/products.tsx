import { useEffect, useState } from "react";

type Product = {
  prodct_Id: number;
  product_Name: string;
  product_price: number;
  product_expityDate: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://localhost:7080/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>

      {error && <p className="text-red-500">Error: {error}</p>}

      {products.length > 0 ? (
        <ul className="list-disc pl-5">
          {products.map((product) => (
            <li key={product.prodct_Id}>
              {product.product_Name} - ₹{product.product_price} - Expiry:{" "}
              {new Date(product.product_expityDate).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Loading products...</p>
      )}
    </div>
  );
};

export default Products;
