import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button appName="thaitype">Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeDefined();
  });
});
