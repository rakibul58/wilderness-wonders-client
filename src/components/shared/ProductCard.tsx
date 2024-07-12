import { TProducts } from "../types/Product.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import default_thumbnail from "../../assets/images/default_thumbnail.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ProductCard = ({ ...props }: TProducts) => {
  return (
    <Link to={`/product-details/${props?._id}`} className="hover:shadow-2xl shadow-primary dark:shadow-accent transition-shadow ease-in-out duration-300">
      {" "}
      <Card className="w-full max-w-[350px] dark:bg-secondary">
        <CardHeader>
          <img className="rounded-lg h-[220px] w-full object-cover" src={props.thumbnail || default_thumbnail} alt="card thumbnail" loading="lazy" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <CardTitle className="text-primary">
              {props?.name?.length > 23
                ? props?.name?.slice(0, 23) + "..."
                : props?.name}
            </CardTitle>
            <CardDescription className="md:max-h-[45px] md:min-h-[45px]">
              {props?.description?.length > 60
                ? props?.description?.slice(0, 60) + "..."
                : props?.description}
              <Link to={`/product-details/${props?._id}`}>
                <Button
                  className="font-semibold text-accent-foreground"
                  variant="link"
                >
                  Details
                </Button>
              </Link>
            </CardDescription>

            <div className="flex justify-between items-center mt-1 md:mt-0">
              <h3 className="font-bold text-accent-foreground">
                ${props?.price}
              </h3>
              <h3 className="font-semibold">{!props?.rating ? "⭐ 5.0": `⭐ ${props?.rating}`}</h3>
            </div>
          </div>
        </CardContent>
        {/* <CardFooter className="flex justify-end gap-3">
          <Button
            className="font-semibold dark:bg-stone-400 dark:text-black dark:hover:bg-stone-500 dark:hover:text-white"
            variant="outline"
          >
            Add Wishlist
          </Button>
          <Button className="hover:bg-stone-600 font-semibold">
            Add to Cart
          </Button>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export default ProductCard;
