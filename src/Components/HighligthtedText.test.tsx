import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { debug } from "console";
import SearchWithDropdown from "../Components/SearchWithDropdown";
import { sampleData } from "../sampleData";
import HighlightedText from "../Components/HighligthtedText";

test("Highlight area is correctly rendered", async () => {
  render(<HighlightedText text={"Lorem Ipsum"} phrase={"Ipsum"} />);

  const foundHighlightArea = screen.getByTestId("highlighted-items");
  expect(foundHighlightArea).toBeInTheDocument();
});

test("Displayed item is highlighting matching part of the phrase", async () => {
  render(<HighlightedText text={"Lorem Ipsum"} phrase={"Ipsum"} />);

  const foundTextElement = screen.getByText("Ipsum");

  expect(foundTextElement).toBeInTheDocument();
});
