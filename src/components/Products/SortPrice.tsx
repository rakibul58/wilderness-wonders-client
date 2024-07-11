import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TSortProps = { sort: string; setSort: (sort: string) => void };

const SortPrice = ({ sort, setSort }: TSortProps) => {
  return (
    <Select value={sort} onValueChange={setSort}>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Sort by price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="price">Ascending</SelectItem>
          <SelectItem value="-price">Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortPrice;
