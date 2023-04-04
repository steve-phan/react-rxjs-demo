import React from "react";
import { render } from "@testing-library/react";

import { TodoItem } from "./TodoItem";

describe("TodoItem", () => {
  const props = {
    id: 1,
    text: "Test Todo",
    isDone: false,
  };

  it("renders the TodoItem component", () => {
    const { getByText } = render(<TodoItem {...props} />);
    expect(getByText(props.text)).toBeInTheDocument();
  });

  it("has the correct background color", () => {
    const { container } = render(<TodoItem {...props} />);
    expect(container.firstChild).toHaveClass("bg-neutral-100");
  });

  it("has the correct line-through style when todoTask is completed", () => {
    const { container } = render(<TodoItem {...props} isDone={true} />);
    expect(container.firstChild).toHaveClass("line-through");
  });

  it("does not have the line-through style when todoTask is not completed", () => {
    const { container } = render(<TodoItem {...props} isDone={false} />);
    expect(container.firstChild).not.toHaveClass("line-through");
  });
});
