import AddProduct from "./componets/AddProduct";
import ProductList from "./componets/ProductList";
import UpdateProduct from "./componets/UpdateProduct";

function App() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-6">React + ASP.NET Core API</h1>
      <ProductList />
      <AddProduct/>
      <br />
      <UpdateProduct/>
    </div>
  );
}

export default App;
