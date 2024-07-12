import { useGetProductsQuery } from "../../redux/api/baseApi";
import SectionContainer from "../layout/SectionContainer";
import ComponentTitle from "../shared/ComponentTitle";
import Loader from "../shared/Loader";
import NoProducts from "../shared/NoProducts";
import { TProducts } from "../types/Product.type";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    sort: "-createdAt",
    limit: 3,
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <SectionContainer>
      <ComponentTitle
        title="Featured Products"
        subTitle="Check out our highlighted products"
      />
      <div className="w-full flex flex-col justify-center items-center gap-10">
        {products?.data?.result.length ? (
          <div className="flex flex-col md:flex-row flex-wrap md:justify-center items-center md:items-start gap-10">
            {products?.data?.result?.map((item: TProducts) => (
              <FeaturedCard key={item._id} {...item} />
            ))}
          </div>
        ) : (
          <NoProducts />
        )}
      </div>
    </SectionContainer>
  );
};

export default FeaturedSection;
