import { categories } from "../../constants/categories";
import SectionContainer from "../layout/SectionContainer";
import ComponentTitle from "../shared/ComponentTitle";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <SectionContainer>
      <ComponentTitle
        title="Product Categories"
        subTitle="Explore our wide range of product categories"
      />
      <div className="flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-10">
        {categories.map((item) => (
          <CategoriesCard key={item.name} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Categories;
