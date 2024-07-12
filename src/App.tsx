import { useLocation } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/theme/theme-provider";
import { useEffect } from "react";
import { useAppSelector } from "./redux/hook";

const App = () => {
  const { pathname } = useLocation();
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cart.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // Required for Chrome to show the prompt
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  //to scroll to top every time route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <MainLayout />
      </ThemeProvider>
    </>
  );
};

export default App;
