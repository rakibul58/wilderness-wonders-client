import { TProducts } from "../types/Product.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import default_thumbnail from "../../assets/images/default_thumbnail.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ProductCard = ({ ...props }: TProducts) => {
  return (
    <Link
      className="hover:shadow-2xl shadow-primary transition-shadow ease-in-out duration-300"
      to={`/product-details/${props?._id}`}
    >
      {" "}
      <Card className="w-full max-w-[350px] dark:bg-secondary">
        <CardHeader>
          <img src={default_thumbnail} alt="" />
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <CardTitle className="text-primary">{props?.name}</CardTitle>
            <CardDescription className="min-h-10 max-h-10">
              {props?.description?.slice(0, 80) + "..."}
            </CardDescription>
            <div className="flex justify-between items-center mt-1 md:mt-0">
              <h3 className="font-bold text-destructive">${props?.price}</h3>
              <h3 className="font-semibold">⭐ {props?.rating}</h3>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button
            className="font-semibold dark:bg-stone-400 dark:text-black dark:hover:bg-stone-500 dark:hover:text-white"
            variant="outline"
          >
            Add Wishlist
          </Button>
          <Button className="hover:bg-stone-600 font-semibold">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
