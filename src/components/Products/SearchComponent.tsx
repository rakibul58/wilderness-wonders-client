import { Search } from "lucide-react";
import { Input } from "../ui/input";

type TSearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const SearchComponent = ({ searchTerm, setSearchTerm }: TSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        placeholder="Search products..."
        className="pl-8 w-full md:w-[200px] lg:w-[300px] dark:bg-secondary"
      />
    </div>
  );
};

export default SearchComponent;
