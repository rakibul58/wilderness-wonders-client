import { useEffect, useState } from "react";
import Loader from "../components/shared/Loader";
import { TProducts } from "../components/types/Product.type";
import { useGetProductsQuery } from "../redux/api/baseApi";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";
import Pagination from "../components/Products/Pagination";
import { Button } from "../components/ui/button";
import SearchComponent from "../components/Products/SearchComponent";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const query = useQuery();
  const queryCategory = query.get("category");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    category: queryCategory || "",
    sort: sort,
    page: page,
    limit: 6,
    searchTerm,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleSort = () => {
    if (sort.charAt(0) === "-" || sort == "") {
      setSort("price");
    } else {
      setSort("-price");
    }
  };

  return (
    <div className="mt-10 flex flex-col gap-10 items-center">
      <div className="w-full flex gap-4 flex-wrap">
        <SearchComponent setSearchTerm={setSearchTerm} />
        <Button>Filter</Button>
        <Button
          onClick={() => handleSort()}
          variant="outline"
          className="dark:bg-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Sort Price
        </Button>
      </div>
      <div className="w-full">
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <div className="w-full flex flex-col md:flex-row justify-between flex-wrap gap-10 md:gap-16 ">
            {products?.data?.result?.map((item: TProducts) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        totalPage={products?.data?.meta?.totalPage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Products;
