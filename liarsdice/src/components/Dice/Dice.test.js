import React from "react";
import { render, screen } from "@testing-library/react";
import Dice from "./Dice";

describe("Dice", () => {
  it("renders dice for 6", () => {
    render(
      <Dice
        dice = "6"
        diceIndex = "0"
        classPrefix = "opponentDice"
        highlight = { false }
        show = { true }
      />
    );

    expect(screen.queryAllByTitle("dot val1").length).toBe(6);
  });
});

describe("Dice", () => {
  it("renders dice for 1", () => {
    render(
      <Dice
        dice = "1"
        diceIndex = "0"
        classPrefix = "opponentDice"
        highlight = { false }
        show = { true }
      />
    );

    expect(screen.queryAllByTitle("dot val1").length).toBe(1);
  });
});

describe("Dice", () => {
  it("renders dice for 1 but not revealed", () => {
    render(
      <Dice
        dice = "1"
        diceIndex = "0"
        classPrefix = "opponentDice"
        highlight = { false }
        show = { false }
      />
    );

    expect(screen.queryAllByTitle("dot val1").length).toBe(0);
  });
});

