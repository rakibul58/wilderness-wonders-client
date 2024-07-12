import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import SingleCart from "../components/Cart/SingleCart";
import { useAppSelector } from "../redux/hook";
import { TCartProduct } from "../redux/features/cartSlice";
import NoProducts from "../components/shared/NoProducts";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);

  if (!cart.length) {
    return (
      <div className="mt-10">
        <NoProducts />
      </div>
    );
  }

  let total = 0;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-primary sm:text-3xl">Manage Cart</h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart?.map((item: TCartProduct) => {
                total += (item.quantity || 0) * item.price;
                return <SingleCart key={item._id} {...item} />;
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm ">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>$0</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-$0</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <Button disabled={total === 0} variant={"outline"}>
                    <Link to="/checkout" className="">
                      Checkout
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
