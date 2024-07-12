import { useParams } from "react-router-dom";
import { useGetAProductQuery } from "../redux/api/baseApi";
import Loader from "../components/shared/Loader";
import { Button } from "../components/ui/button";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetAProductQuery(id);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);
  const cardData = cart.find((item) => item._id === product?.data?._id);

  console.log({ cardData });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 mx-auto mt-10">
      <div className="w-full">
        <img
          className="max-h-[400px] max-w-[400px] w-full mx-auto bg-cover"
          src={product?.data?.thumbnail}
          alt="Product Image"
        />
      </div>
      <div className="w-full">
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
          <dl className=" divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Product Name</dt>
              <dd className=" sm:col-span-2">{product?.data?.name}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Price</dt>
              <dd className=" sm:col-span-2">$ {product?.data?.price}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Rating</dt>
              <dd className=" sm:col-span-2">
                ⭐ {product?.data?.rating ? product?.data.rating : 5.0}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Stock Quantity</dt>
              <dd className=" sm:col-span-2">{product?.data?.stock}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Category</dt>
              <dd className=" sm:col-span-2">{product?.data?.category}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Description</dt>
              <dd className=" sm:col-span-2">{product?.data?.description}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-secondary/20 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium ">Quantity</dt>
              <dd className=" sm:col-span-2">
                <Button
                  disabled={0 === cardData?.quantity}
                  onClick={() => dispatch(removeFromCart(product?.data?._id))}
                  className="font-bold text-xl"
                  variant="outline"
                  size="icon"
                >
                  -
                </Button>
                <span className="font-bold text-xl mx-3">
                  {cardData?.quantity ? cardData?.quantity : 0}
                </span>{" "}
                <Button
                  disabled={product?.data?.stock === cardData?.quantity}
                  onClick={() => dispatch(addToCart(product?.data))}
                  className="font-bold text-xl"
                  variant="outline"
                  size="icon"
                >
                  +
                </Button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
