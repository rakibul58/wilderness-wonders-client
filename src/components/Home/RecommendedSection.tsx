import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import SectionContainer from "../layout/SectionContainer";
import ComponentTitle from "../shared/ComponentTitle";
import Loader from "../shared/Loader";
import NoProducts from "../shared/NoProducts";
import ProductCard from "../shared/ProductCard";
import { TProducts } from "../types/Product.type";
import { Button } from "../ui/button";

const RecommendedSection = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    sort: "-rating",
    limit: 3,
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <SectionContainer>
      <ComponentTitle
        title="Our Best Selling Products"
        subTitle="Top Picks for Your Next Adventure"
      />
      <div className="w-full flex flex-col justify-center items-center gap-10">
        {products?.data?.result.length ? (
          <div className="flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-10">
            {products?.data?.result?.map((item: TProducts) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <NoProducts />
        )}
        <Link to="/products">
          <Button className="hover:bg-stone-600 font-semibold">Show more</Button>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default RecommendedSection;
