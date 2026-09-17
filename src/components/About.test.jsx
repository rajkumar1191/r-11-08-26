import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import About from "./About";

describe("About component", () => {
  test("render About component", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("render title props", () => {
    render(
      <MemoryRouter>
        <About title="React Testing" />
      </MemoryRouter>,
    );

    expect(screen.getByText("React Testing")).toBeInTheDocument();
  });

  test("allows typing in search", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText("Search");

    await user.type(input, "Reactt");

    expect(input).toHaveValue("Reactt");
  });

  test("render isActive props", () => {
    render(
      <MemoryRouter>
        <About isActive={true} />
      </MemoryRouter>,
    );

    expect(screen.getByText("About")).toHaveStyle({
      backgroundColor: "rgb(144, 238, 144)"
    });
  });
});
