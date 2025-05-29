import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterPanel from "../components/filters/FilterPanel";

describe("FilterPanel", () => {
  const setSelectedMonth = jest.fn();
  const setSelectedYear = jest.fn();

  beforeEach(() => {
    setSelectedMonth.mockClear();
    setSelectedYear.mockClear();
  });

  test("renders month and year dropdowns", () => {
    render(
      <FilterPanel
        selectedMonth=""
        setSelectedMonth={setSelectedMonth}
        selectedYear={2025}
        setSelectedYear={setSelectedYear}
      />
    );

    expect(screen.getByText("Month:")).toBeInTheDocument();
    expect(screen.getByText("Year:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /apply filters/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /reset filters/i })).toBeInTheDocument();
  });

  test("enables apply button when both filters are selected", () => {
    render(
      <FilterPanel
        selectedMonth=""
        setSelectedMonth={setSelectedMonth}
        selectedYear={2025}
        setSelectedYear={setSelectedYear}
      />
    );

    const monthSelect = screen.getByLabelText(/month/i);
    const yearSelect = screen.getByLabelText(/year/i);

    fireEvent.change(monthSelect, { target: { value: "March" } });
    fireEvent.change(yearSelect, { target: { value: "2025" } });

    const applyButton = screen.getByRole("button", { name: /apply filters/i });
    expect(applyButton).not.toBeDisabled();
  });

  test("calls setSelectedMonth and setSelectedYear on apply", () => {
    render(
      <FilterPanel
        selectedMonth=""
        setSelectedMonth={setSelectedMonth}
        selectedYear={2025}
        setSelectedYear={setSelectedYear}
      />
    );

    fireEvent.change(screen.getByLabelText(/month/i), { target: { value: "March" } });
    fireEvent.change(screen.getByLabelText(/year/i), { target: { value: "2025" } });

    fireEvent.click(screen.getByRole("button", { name: /apply filters/i }));

    expect(setSelectedMonth).toHaveBeenCalledWith("March");
    expect(setSelectedYear).toHaveBeenCalledWith(2025);
  });

  test("resets filters correctly", () => {
    render(
      <FilterPanel
        selectedMonth="March"
        setSelectedMonth={setSelectedMonth}
        selectedYear={2024}
        setSelectedYear={setSelectedYear}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /reset filters/i }));

    expect(setSelectedMonth).toHaveBeenCalledWith("");
    expect(setSelectedYear).toHaveBeenCalledWith(2025);
  });
});
