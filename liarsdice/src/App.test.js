import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders important elements", () => {
    render(<App />);
    expect(screen.getByTestId("start-button")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard-language")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard-dialogspeed")).toBeInTheDocument();
  });
});