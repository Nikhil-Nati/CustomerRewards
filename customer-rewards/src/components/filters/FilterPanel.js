import { useEffect, useState } from "react";
import {
  FilterPanelWrapper,
  Label,
  Select,
  Button
} from "../../styles/FilterPanel";

const getLast3Months = () => {
  const now = new Date();
  return Array.from({ length: 3 }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    return date.toLocaleString('default', { month: 'long' });
  }).reverse();
};

const FilterPanel = ({ selectedMonth, setSelectedMonth, selectedYear, setSelectedYear }) => {
  const months = getLast3Months();
  const years = [2024, 2025, 2026];

  const [tempMonth, setTempMonth] = useState("");
  const [tempYear, setTempYear] = useState(2025);

  useEffect(() => {
    setSelectedMonth("");
    setSelectedYear(2025);
  }, []);

  const handleApplyFilters = () => {
    setSelectedMonth(tempMonth);
    setSelectedYear(tempYear);
  };

  const handleResetFilters = () => {
    setTempMonth("");
    setTempYear(2025);
    setSelectedMonth("");
    setSelectedYear(2025);
  };

  const isApplyDisabled = tempMonth === "" || tempYear === "";

  return (
    <FilterPanelWrapper>
      <Label>
        Month:
        <Select value={tempMonth} onChange={(e) => setTempMonth(e.target.value)}>
          <option value="">Select Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
      </Label>

      <Label style={{ marginLeft: "1rem" }}>
        Year:
        <Select value={tempYear} onChange={(e) => setTempYear(Number(e.target.value))}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Label>

      <Button onClick={handleApplyFilters} disabled={isApplyDisabled} style={{ marginLeft: "1rem" }}>
        Apply Filters
      </Button>

      <Button onClick={handleResetFilters} style={{ marginLeft: "0.5rem" }}>
        Reset Filters
      </Button>
    </FilterPanelWrapper>
  );
};

export default FilterPanel;
