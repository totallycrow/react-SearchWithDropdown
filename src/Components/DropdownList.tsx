import React from "react";
import DropdownItem from "./DropdownItem";
import { TDropdownProps } from "../Interfaces/Interfaces";

export default function DropdownList({
  searchMatches,
  phrase,
}: TDropdownProps) {
  return (
    <ul className="dropdown-list">
      {searchMatches.length === 0 ? (
        ""
      ) : (
        <li className="list-item">
          {searchMatches.map((item: any) => (
            <DropdownItem itemData={item.name} phrase={phrase} />
          ))}
        </li>
      )}
    </ul>
  );
}
