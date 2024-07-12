import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ProductTableRow from "./ProductTableRow";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { TProducts } from "../types/Product.type";
import Loader from "../shared/Loader";
import Pagination from "./Pagination";
import NoProducts from "../shared/NoProducts";

const ProductTable = () => {
  const [page, setPage] = useState(1);
  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    sort: "-createdAt",
    page: page,
    limit: 5,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div className="flex items-center flex-col gap-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!products?.data?.result?.length ? (
            <div className="mt-3 w-full flex justify-start">
              <NoProducts />
            </div>
          ) : (
            products?.data?.result?.map((item: TProducts) => (
              <ProductTableRow key={item._id} {...item} />
            ))
          )}
        </TableBody>
      </Table>
      <Pagination
        totalPage={products?.data?.meta?.totalPage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default ProductTable;
