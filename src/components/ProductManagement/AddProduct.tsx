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
import { useAddProductMutation } from "../../redux/api/baseApi";
import axios from "axios";
import Loading from "../shared/Loading";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [addProduct] = useAddProductMutation();

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
    const formData = new FormData();
    if (image) formData.append("file", image);
    formData.append(
      "upload_preset",
      `${import.meta.env.VITE_CLOUDINARY_PRESET}`
    );

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_URI}`,
        formData
      );
      if (response.data.secure_url) {
        const productDetails = {
          name,
          description,
          price,
          thumbnail: response.data.secure_url || "",
          stock,
          category,
        };

        console.log({ productDetails });
        const result = await addProduct(productDetails);
      
        if (result.data.statusCode === 201) {
          setName("");
          setPrice(0);
          setDescription("");
          setImage(null);
          setStock(0);
          setCategory("");
          Swal.fire({
            title: "Success!",
            text: result.data.message,
            icon: "success",
          });
        } else {
          setName("");
          setPrice(0);
          setDescription("");
          setImage(null);
          setStock(0);
          setCategory("");
          Swal.fire({
            title: "Opps!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
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
        <Button className="text-xl font-semibold">Add Product</Button>
      </DialogTrigger>

      <DialogContent className="w-full sm:max-w-[425px] md:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add the necessary information of the product
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Name
              </Label>
              <Input
                onBlur={(e) => setName(e.target.value)}
                required
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                required
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                onBlur={(e) => setPrice(parseFloat(e.target.value))}
                required
                type="text"
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                onChange={handleFileChange}
                required
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
                onBlur={(e) => setStock(parseInt(e.target.value))}
                required
                type="number"
                id="stock"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Select required onValueChange={setCategory}>
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
                Add Product
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
