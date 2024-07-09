import Loader from "../components/shared/Loader";
import { useGetProductsQuery } from "../redux/api/baseApi";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <h1>{JSON.stringify(products)}</h1>
    </div>
  );
};

export default Products;
