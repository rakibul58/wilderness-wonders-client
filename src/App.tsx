import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/theme/theme-provider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <MainLayout />
      </ThemeProvider>
    </>
  );
};

export default App;
