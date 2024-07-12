import { TProducts } from "../types/Product.type";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import default_thumbnail from "../../assets/images/default_thumbnail.png";
import { useDeleteProductMutation } from "../../redux/api/baseApi";
import Swal from "sweetalert2";
import UpdateProduct from "./UpdateProduct";
import { Link } from "react-router-dom";

const ProductTableRow = ({ ...item }: TProducts) => {
  const [deleteProduct, { isError }] = useDeleteProductMutation();

  const handleDelete = () => {
    // confirming before delete
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
          deleteProduct(item._id);
          if (!isError) {
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted Successfully.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Opps!",
              text: "Something went wrong.",
              icon: "error",
            });
          }
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
    <TableRow key={item._id}>
      <TableCell>
        <div className="size-12 object-cover">
          <img src={item.thumbnail || default_thumbnail} alt="" />
        </div>
      </TableCell>
      <TableCell className="font-medium">
        <Link className="hover:border-b" to={`/product-details/${item?._id}`}>
          {item.name}
        </Link>
      </TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>{item.stock}</TableCell>
      <TableCell>${item.price}</TableCell>
      <TableCell>
        <div className="flex items-start gap-3 flex-wrap">
          <Button onClick={handleDelete} variant="destructive" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
          <UpdateProduct {...item} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
