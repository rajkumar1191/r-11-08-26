import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";
import { describe, expect, test } from "vitest";

describe("Nav component", () => {
  test("render home link", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
