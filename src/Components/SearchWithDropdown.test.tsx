import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { debug } from "console";
import SearchWithDropdown from "../Components/SearchWithDropdown";
import { sampleData } from "../sampleData";

test("On entering a search phrase matching results are displayed", async () => {
  render(<SearchWithDropdown searchData={sampleData} />);

  userEvent.type(screen.getByPlaceholderText(/Type/i), "jobi");

  const foundTextElement = screen.getByText(
    "fy - The Most Popular WordpPress Job Board Theme"
  );

  expect(foundTextElement).toBeInTheDocument();
});
