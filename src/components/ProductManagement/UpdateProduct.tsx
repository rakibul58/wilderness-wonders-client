import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { categories } from "../../constants/categories";
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../shared/Loading";
import { TProducts } from "../types/Product.type";
import { useUpdateProductMutation } from "../../redux/api/baseApi";

const UpdateProduct = ({ ...item }: TProducts) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [image, setImage] = useState<File | null>(null);
  const [stock, setStock] = useState(item.stock);
  const [category, setCategory] = useState(item.category);
  const [updateProduct] = useUpdateProductMutation();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps!",
        text: "Something went wrong!",
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    Loading();

    try {
      let response;
      if (image !== null) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "upload_preset",
          `${import.meta.env.VITE_CLOUDINARY_PRESET}`
        );
        response = await axios.post(
          `${import.meta.env.VITE_CLOUDINARY_URI}`,
          formData
        );
      }

      let imageURL = "";

      if (response) {
        imageURL = response.data.secure_url;
      }

      const data = {
        name,
        description,
        price,
        thumbnail: imageURL || item.thumbnail,
        stock,
        category,
      };

      const productDetails = {
        id: item._id,
        data,
      };

      const result = await updateProduct(productDetails);

      console.log({ result });

      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Success!",
          text: result.data.message,
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
        text: "Something went wrong.!",
        icon: "error",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="bg-[#a88338a8]">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full sm:max-w-[425px] md:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Update the necessary information of the product
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Name
              </Label>
              <Input
                defaultValue={name}
                onBlur={(e) => setName(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                defaultValue={description}
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                defaultValue={price}
                onBlur={(e) => setPrice(parseFloat(e.target.value))}
                type="text"
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Current URL
              </Label>
              <Input
                defaultValue={item.thumbnail}
                type="text"
                id="image"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                onChange={handleFileChange}
                type="file"
                id="image"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stock" className="text-right">
                Stock
              </Label>
              <Input
                defaultValue={stock}
                onBlur={(e) => setStock(parseInt(e.target.value))}
                type="number"
                id="stock"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {categories.map((item) => (
                      <SelectItem key={item.name} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <DialogClose asChild>
              <Button
                type="submit"
                className="disabled:bg-secondary disabled:hover:bg-secondary"
              >
                Update Product
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
