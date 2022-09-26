import React from "react";
import { THighlightProps } from "../Interfaces/Interfaces";

export default function HighligthtedText({ text, phrase }: THighlightProps) {
  const parts = text.split(new RegExp(`(${phrase})`, "gi"));

  return (
    <span data-testid="highlighted-items">
      {parts.map((part: string) =>
        part.toLowerCase() === phrase.toLowerCase() ? (
          <b className="text-highlight">{part}</b>
        ) : (
          part
        )
      )}
    </span>
  );
}
