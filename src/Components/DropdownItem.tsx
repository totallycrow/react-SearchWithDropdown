import React from "react";
import HighligthtedText from "./HighligthtedText";
import { TDropdownItemProps } from "../Interfaces/Interfaces";

export default function DropdownItem({ itemData, phrase }: TDropdownItemProps) {
  return (
    <div>
      <HighligthtedText text={itemData} phrase={phrase} />
    </div>
  );
}
