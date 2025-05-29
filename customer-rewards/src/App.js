import { useEffect, useState } from "react";
import { fetchTransactions } from "./api/FetchTransactions";
import CustomerList from "./components/CustomerList/CustomerList";
import MonthlyRewards from "./components/monthlyRewards/MonthlyRewards";
import TransactionTable from "./components/transactionTable/TransactionTable";
import FilterPanel from "./components/filters/FilterPanel";
import { getMonthName, getYear } from "./constants/dateUtils";
import { MainContainer, Title, FlexContainer } from "../src/styles/AppCSS";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Title>Loading transactions...</Title>;
  if (error) return <MainContainer>{error}</MainContainer>;

  const filteredTransactions =
    selectedCustomer && selectedMonth && selectedYear
      ? transactions.filter((txn) => {
          return (
            txn.customerId === selectedCustomer &&
            getMonthName(txn.date) === selectedMonth &&
            getYear(txn.date) === selectedYear
          );
        })
      : [];

  return (
    <MainContainer>
      <Title>Customer Rewards Dashboard</Title>
      <CustomerList
        transactions={transactions}
        onCustomerSelect={(id) => {
          setSelectedCustomer(id);
          setSelectedMonth("");
          setSelectedYear("");
        }}
      />
      {selectedCustomer && (
        <>
          <FilterPanel
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />

          <FlexContainer>
            <MonthlyRewards
              transactions={
                selectedMonth && selectedYear
                  ? filteredTransactions
                  : transactions
              }
              customerId={selectedCustomer}
            />
            <TransactionTable
              transactions={
                selectedMonth && selectedYear
                  ? filteredTransactions
                  : transactions
              }
              customerId={selectedCustomer}
            />
          </FlexContainer>
        </>
      )}
    </MainContainer>
  );
};

export default App;
