import { useEffect, useState } from "react";
import Loader from "../components/shared/Loader";
import { TProducts } from "../components/types/Product.type";
import { useGetProductsQuery } from "../redux/api/baseApi";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";
import Pagination from "../components/Products/Pagination";
import { Button } from "../components/ui/button";
import SearchComponent from "../components/Products/SearchComponent";
import SortPrice from "../components/Products/SortPrice";
import FilterByCategories from "../components/Products/FilterByCategories";
import FilterByPrice from "../components/Products/FilterByPrice";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const query = useQuery();
  const queryCategory = query.get("category");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [category, setCategory] = useState(queryCategory || "");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    category: category,
    sort: sort,
    page: page,
    limit: 6,
    searchTerm,
    maxPrice,
    minPrice,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleReset = () => {
    setCategory("");
    setSort("");
    setSearchTerm("");
    setMaxPrice(null);
    setMinPrice(null);
  };

  return (
    <div className="mt-10 flex flex-col gap-10 items-center">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FilterByCategories
          category={category as string}
          setCategory={setCategory}
        />
        <FilterByPrice
          maxPrice={maxPrice}
          minPrice={minPrice}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
        />
        <SortPrice sort={sort} setSort={setSort} />
        <Button variant={"outline"} onClick={handleReset}>
          Reset Filters
        </Button>
      </div>
      <div className="w-full">
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <div className="w-full flex flex-col md:flex-row md:justify-between items-center flex-wrap gap-10 md:gap-16 ">
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
