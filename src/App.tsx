import { useLocation } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/theme/theme-provider";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();

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
