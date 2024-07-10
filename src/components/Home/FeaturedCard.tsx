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

const FeaturedCard = ({ ...props }: TProducts) => {
  return (
    <div className="hover:shadow-2xl shadow-primary dark:shadow-accent transition-shadow ease-in-out duration-300">
      {" "}
      <Card className="w-full max-w-[350px] dark:bg-secondary">
        <CardHeader>
          <img
            loading="lazy"
            src={default_thumbnail}
            alt="featured card image"
            className="rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <CardTitle className="text-primary">
              {props?.name?.length > 23
                ? props?.name?.slice(0, 23) + "..."
                : props?.name}
            </CardTitle>
            <CardDescription>
              {props?.description?.length > 80
                ? props?.description?.slice(0, 80) + "..."
                : props?.description}
            </CardDescription>
            <div className="flex justify-between items-center mt-1 md:mt-0">
              <h3 className="font-bold text-accent-foreground">
                ${props?.price}
              </h3>
              <h3 className="font-semibold">⭐ {props?.rating}</h3>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Link to={`/product-details/${props?._id}`}>
            {" "}
            <Button className="hover:bg-stone-600 font-semibold">
              Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeaturedCard;
