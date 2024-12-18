import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import ProductManagement from "../pages/ProductManagement";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import GalleryPage from "../pages/GalleryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "product-management",
        element: <ProductManagement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);
