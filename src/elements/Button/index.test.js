import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled />);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading />);

  expect(getByText(/Loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal />);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render link component", () => {
  const { container } = render(
    <Router>
      <Button href="/" type="link" />
    </Router>
  );

  expect(container.querySelector("link")).toBeInTheDocument();
});
