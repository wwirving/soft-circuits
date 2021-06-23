import React from "react";
import { render } from "@testing-library/react";
import Overfront from "./Overfront";

describe("Overfront tests", () => {
  it("should render", () => {
    expect(render(<Overfront />)).toBeTruthy();
  });
});
