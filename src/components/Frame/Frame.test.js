import React from "react";
import { render } from "@testing-library/react";
import Frame from "./Frame";

describe("Frame tests", () => {
  it("should render", () => {
    expect(render(<Frame />)).toBeTruthy();
  });
});
