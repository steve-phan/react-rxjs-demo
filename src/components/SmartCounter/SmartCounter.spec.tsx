import { SmartCounter } from "./SmartCounter";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SmartCounter", () => {
  it("should updates the active number the Enter key is pressed", async () => {
    render(<SmartCounter />);
    const input = screen.getByTestId("range-input");
    const display = screen.getByTestId("counter-display");

    // userEvent.type(input, "5");
    // userEvent.keyboard("{enter}");

    userEvent.type(input, "5{enter}");

    // wait for the counter to finish
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 7000));
    });

    // assert that the display shows the expected number
    expect(display).toHaveTextContent("5");
  }, 8000);
});
