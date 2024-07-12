import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { removeAllProduct } from "../redux/features/cartSlice";
import NoProducts from "../components/shared/NoProducts";
import { useCheckoutProductMutation } from "../redux/api/baseApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/shared/Loading";

const Checkout = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [checkoutProduct] = useCheckoutProductMutation();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "cod") {
      // Handle Cash on Delivery
      await handleCOD();
    } else {
      // Handle Stripe Payment
      handleStripePayment();
    }
  };

  const handleCOD = async () => {
    // handling cash on delivery place order
    try {
      Loading()
      const result = await checkoutProduct(cart);
      if (result.data.statusCode === 200) {
        dispatch(removeAllProduct());
        Swal.fire({
          title: "Success!",
          text: result.data.message,
          icon: "success",
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Opps!",
          text: "Something went wrong.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleStripePayment = () => {
    // implement later
  };

  if (!cart?.length) {
    return (
      <div className="mt-10">
        <NoProducts />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <Label htmlFor="name" className="font-semibold mb-1">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              onBlur={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="email" className="font-semibold mb-1">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              onBlur={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Label htmlFor="phone" className="font-semibold mb-1">
            Phone
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            onBlur={handleChange}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="address" className="font-semibold mb-1">
            Delivery Address
          </Label>
          <Textarea
            id="address"
            name="address"
            onBlur={handleChange}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Payment Method</h2>
          <RadioGroup onValueChange={setPaymentMethod} defaultValue="cod">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cod" id="r1" />
              <Label htmlFor="r1">Cash on Delivery</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem disabled value="stripe" id="r2" />
              <Label htmlFor="r2">Credit/Debit Card (Stripe)</Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" className="font-semibold">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
