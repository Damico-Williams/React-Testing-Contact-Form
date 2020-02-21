import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';


test("renders App without crashing", () => {
  render(<App />);
});

test("firstname and lastname text is interactable", () => {
   const { getByText } = render(<App />);
   getByText(/first name/i);
   getByText(/last name/i);
})

test("placeholder text are in place", () => {
   const { getByPlaceholderText } = render(<App />);
   getByPlaceholderText('bill');
   getByPlaceholderText('bluebill1049@hotmail.com');
})

describe("", () => {
  it("", () => {
    expect().toBe();
  })
})


