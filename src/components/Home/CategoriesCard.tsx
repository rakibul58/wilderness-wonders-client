import { Link } from "react-router-dom";
import { Card } from "../ui/card";

const CategoriesCard = ({...items}) => {
  return (
    <Link to={`/products?category=${items.name}`} className="hover:shadow-2xl shadow-primary transition-shadow ease-in-out duration-300 rounded-lg">
      <Card className="relative rounded-lg overflow-hidden w-full min-w-[280px] md:w-[350px]">
        <img
          alt=""
          src={items.image}
          className="absolute inset-0 min-w-full h-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <p>
              <h3 className="mt-0.5 text-lg text-white">
                {items.name}
              </h3>
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoriesCard;
