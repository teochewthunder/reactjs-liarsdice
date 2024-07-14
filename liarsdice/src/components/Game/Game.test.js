import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "./Game";

import GetLabels from "../../utils/GetLabels";

let lang = "en";
let dialogSpeed = 500;

let stage;
let setStage = (val)=> {
  stage = val;
};

let stageStarted;
let setStageStarted = (val)=> {
  stageStarted = val;
};

describe("Game", () => {
  setStage(0);
  setStageStarted(false);

  it("renders nothing for stage 0", () => {
    render(
      <Game 
        lang = { lang }
        dialogSpeed = { dialogSpeed }
        stage={ stage }
        setStage = { setStage }
        stageStarted={ stageStarted }
        setStageStarted = { setStageStarted }
      />
    );

    expect(screen.queryByText("YOU ARE THE CHAMPION!")).toBeNull();
  });
});

describe("Game", () => {
  setStage(1);
  setStageStarted(true);

  it("renders champion div for stage 1 - 5", () => {
    render(
      <Game 
        lang = { lang }
        dialogSpeed = { dialogSpeed }
        stage={ stage }
        setStage = { setStage }
        stageStarted={ stageStarted }
        setStageStarted = { setStageStarted }
      />
    );

    expect(screen.queryByTestId("opponent-image")).toBeInTheDocument();
  });
});


