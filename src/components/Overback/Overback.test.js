import React from "react";
import { render } from "@testing-library/react";
import Overback from "./Overback";

describe("Overback tests", () => {
  it("should render", () => {
    expect(render(<Overback />)).toBeTruthy();
  });
});
