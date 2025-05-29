import "../../styles/FilterPanel.css"

const FilterPanel = ({ selectedMonth, setSelectedMonth, selectedYear, setSelectedYear }) => {
  const months = [
    "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const years = ["", currentYear - 1, currentYear, currentYear + 1];

  return (
    <div>
      <label>
        Month:
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {months.map((month) => (
            <option key={month} value={month}>
              {month === "" ? "Select Month" : month}
            </option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: "1rem" }}>
        Year:
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year === "" ? "Select Year" : year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterPanel;
