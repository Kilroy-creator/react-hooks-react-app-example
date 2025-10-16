import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";
import ExampleComponent from "../components/ExampleComponent";
import TestComponent from "../components/TestComponent";
beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {

    expect(screen.queryByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  expect(screen.queryByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  expect(screen.queryByTitle("time video")).toBeInTheDocument();
});

