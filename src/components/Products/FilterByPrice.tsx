import { Dispatch, SetStateAction, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TFilterPriceProps = {
  maxPrice: number | null;
  minPrice: number | null;
  setMaxPrice: Dispatch<SetStateAction<number | null>>;
  setMinPrice: Dispatch<SetStateAction<number | null>>;
};

const FilterByPrice = ({
  maxPrice,
  minPrice,
  setMaxPrice,
  setMinPrice,
}: TFilterPriceProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value: string) => {
    if (value === "range1") {
      setSelectedValue(value);
      setMinPrice(0);
      setMaxPrice(30);
    } else if (value === "range2") {
      setSelectedValue(value);
      setMinPrice(31);
      setMaxPrice(60);
    }
    if (value === "range3") {
      setSelectedValue(value);
      setMinPrice(61);
      setMaxPrice(100);
    }
    if (value === "range4") {
      setSelectedValue(value);
      setMinPrice(101);
    }
  };

  return (
    <Select
      value={maxPrice === null && minPrice === null ? "" : selectedValue}
      onValueChange={handleValueChange}
    >
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Filer by price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Price Range</SelectLabel>
          <SelectItem value="range1">0 - 30$</SelectItem>
          <SelectItem value="range2">31$ - 60$</SelectItem>
          <SelectItem value="range3">61$ - 100$</SelectItem>
          <SelectItem value="range4">100$+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByPrice;
