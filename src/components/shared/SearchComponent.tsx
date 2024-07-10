import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchComponent = () => {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search products..."
        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] dark:bg-secondary"
      />
    </div>
  );
};

export default SearchComponent;
