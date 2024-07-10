import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface TSearchProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchComponent = ({ setSearchTerm }: TSearchProps) => {

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={(e)=>setSearchTerm(e.target.value)}
        type="search"
        placeholder="Search products..."
        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] dark:bg-secondary"
      />
    </div>
  );
};

export default SearchComponent;
