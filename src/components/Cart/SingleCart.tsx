import {
  addToCart,
  removeAllProductById,
  removeFromCart,
  TCartProduct,
} from "../../redux/features/cartSlice";
import default_thumbnail from "../../assets/images/default_thumbnail.png";
import { Button } from "../ui/button";
import { useAppDispatch } from "../../redux/hook";
import Swal from "sweetalert2";

const SingleCart = ({ ...item }: TCartProduct) => {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = () => {
    // confirming before removing
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(removeAllProductById(item._id));
          Swal.fire({
            title: "Removed!",
            text: "Product Removed from cart successfully.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Opps!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <li className="flex flex-col md:flex-row items-center gap-4">
      <img
        src={item?.thumbnail || default_thumbnail}
        alt=""
        className="size-16 rounded object-cover"
      />

      <div>
        <h3 className="text-sm font-bold">{item?.name}</h3>

        <dl className="mt-0.5 space-y-px text-[12px] ">
          <div>
            <dt className="inline mr-1">Price:</dt>
            <dd className="inline font-semibold">${item?.price}</dd>
          </div>

          <div>
            <dt className="inline mr-1">Category:</dt>
            <dd className="inline">{item.category}</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <dd className=" sm:col-span-2">
          <Button
            disabled={0 === item?.quantity || !item?.quantity}
            onClick={() => dispatch(removeFromCart(item?._id))}
            className="font-bold text-xl"
            variant="outline"
            size="icon"
          >
            -
          </Button>
          <span className="font-bold text-xl mx-3">
            {item?.quantity ? item?.quantity : 0}
          </span>{" "}
          <Button
            disabled={item?.stock === item?.quantity}
            onClick={() => dispatch(addToCart(item))}
            className="font-bold text-xl"
            variant="outline"
            size="icon"
          >
            +
          </Button>
        </dd>
        <Button
          onClick={handleRemoveProduct}
          className="font-bold text-xl transition hover:text-red-600"
          variant="outline"
          size="icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </Button>
      </div>
    </li>
  );
};

export default SingleCart;
