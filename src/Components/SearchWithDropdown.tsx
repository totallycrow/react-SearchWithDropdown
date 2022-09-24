import React, { useTransition, useMemo, useState } from "react";
import SearchInput from "./SearchInput";
import DropdownList from "./DropdownList";

import {TSearchData, TMainProps} from "../Interfaces/Interfaces"

export default function SearchWithDropdown({ searchData } : TMainProps) {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const data = useMemo(() => searchData, [searchData]);

  const filteredResults : Array<TSearchData> = data.filter((item : TSearchData) => {
    if (item.name.toUpperCase().includes(inputValue.toUpperCase())) {
      return true;
    }
    return false;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  startTransition(() => setInputValue(e.target.value))  
  
  return (
    <div>
      <SearchInput inputValue={inputValue} inputHandler={handleInputChange} />
      {isPending && "List Loading"}
      {inputValue.length <= 3 ? (
        ""
      ) : (
        <DropdownList searchMatches={filteredResults} phrase={inputValue} />
      )}
    </div>
  );
}
