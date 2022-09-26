import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { debug } from "console";
import SearchWithDropdown from "../Components/SearchWithDropdown";
import { sampleData } from "../sampleData";
import HighlightedText from "../Components/HighligthtedText";
import SearchInput from "./SearchInput";

test("Highlight area is correctly rendered", async () => {
  render(<SearchInput inputValue="" inputHandler={() => {}} />);

  //   how to pass setState?
});
