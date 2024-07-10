import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import SearchComponent from "./SearchComponent";

const Navbar = () => {
  const activeClasses =
    "transition-colors hover:text-foreground font-bold text-primary";
  const inActiveClasses =
    "text-muted-foreground transition-colors hover:text-foreground";
  return (
    <div className="sticky top-0 flex flex-col justify-center bg-background z-50">
      <div className="hidden flex-row justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center mt-3">
        <NavLink to="/" className="">
          <img
            className="max-w-[220px] w-full"
            src={logo}
            alt="Website Logo"
            loading="lazy"
          />
        </NavLink>
        <div>
          <ModeToggle />
        </div>
      </div>
      <header className="flex items-center gap-4 border-b bg-background pt-2 pb-4">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClasses : inActiveClasses
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? activeClasses : inActiveClasses
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/product-management"
            className={({ isActive }) =>
              isActive ? activeClasses : inActiveClasses
            }
          >
            Management
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? activeClasses : inActiveClasses
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClasses : inActiveClasses
            }
          >
            About
          </NavLink>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <NavLink
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <img src={logo} alt="Website Logo" loading="lazy" />
              </NavLink>
              <div className="flex justify-center">
                <ModeToggle />
              </div>
              <NavLink
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </NavLink>
              <NavLink
                to="/product-management"
                className="text-muted-foreground hover:text-foreground"
              >
                Management
              </NavLink>
              <NavLink
                to="/cart"
                className="text-muted-foreground hover:text-foreground"
              >
                Cart
              </NavLink>
              <NavLink
                to="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex items-center gap-3 flex-1 justify-end">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full dark:bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-6 font-bold"
              >
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full dark:bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-6"
              >
                <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
            </Button>
            <SearchComponent />
          </form>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
