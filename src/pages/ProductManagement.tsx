import AddProduct from "../components/ProductManagement/AddProduct";
import ProductTable from "../components/ProductManagement/ProductTable";

const ProductManagement = () => {
  return (
    <div className="mt-10">
      <div className="mb-5">
        <AddProduct />
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductManagement;
