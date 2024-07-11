import { categories } from "../../constants/categories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TFilterCategoryProps = {
  category: string;
  setCategory: (category: string) => void;
};

const FilterByCategories = ({
  category,
  setCategory,
}: TFilterCategoryProps) => {
  return (
    <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Category</SelectLabel>
          {categories.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByCategories;
