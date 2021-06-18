import { fireEvent, render, screen } from "@testing-library/react";
import React, { Component } from "react";
import InputDate from "./index";

class TestInput extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.state("value", e.target.value);
  };

  render() {
    return (
      <div>
        <InputDate
          max={39}
          handleChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
      </div>
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return {
    container,
    wrapper,
    input,
  };
};

test("should have wrapper with className .input-date", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test("Should have tag <input> and has className .input.form-control", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("should have date picker when click input field", () => {
  const { container, input } = setup();

  screen.debug();
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  screen.debug();

  expect(datePickerWrapper).toBeInTheDocument();
});
