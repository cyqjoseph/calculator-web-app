import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

// Mock fetch globally
global.fetch = require("jest-fetch-mock");

test("renders input fields and buttons", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Number 1")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Number 2")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeInTheDocument();
  expect(screen.getByText("Subtract")).toBeInTheDocument();
});

beforeEach(() => {
  fetch.resetMocks();
});

test("adds numbers correctly", async () => {
  render(<App />);

  fetch.mockResponseOnce(
    JSON.stringify({ body: JSON.stringify({ result: 5 }) })
  );

  fireEvent.change(screen.getByPlaceholderText("Number 1"), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByPlaceholderText("Number 2"), {
    target: { value: "3" },
  });

  fireEvent.click(screen.getByText("Add"));

  const resultElement = await screen.findByText("Result: 5");
  expect(resultElement).toBeInTheDocument();
});
