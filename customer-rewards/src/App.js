import { fetchTransactions } from "./api/FetchTransactions";
import CustomerList from "./components/CustomerList/CustomerList";
import MonthlyRewards from "./components/MonthlyRewards/MonthlyRewards";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import FilterPanel from "./components/Filters/FilterPanel";
import { getMonthName, getYear } from "./constants/dateUtils";


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

  if (loading) return <div>Loading transactions...</div>;
  if (error) return <div>{error}</div>;

  const filteredTransactions = selectedCustomer && (selectedMonth || selectedYear)?
  transactions.filter((txn) => {
    console.log(txn.customerId,selectedCustomer,getMonthName(txn.date),selectedMonth,String(getYear(txn.date)),String(getYear(txn.date)))
    return (
      txn.customerId === selectedCustomer &&(
      getMonthName(txn.date) === selectedMonth||
      String(getYear(txn.date)) === selectedYear)
    );
  }):[];

  //console.log(filteredTransactions)

  return (
    <div>
      <h1>Customer Rewards Dashboard</h1>
      <CustomerList
        transactions={transactions}
        onCustomerSelect={(id) => {
          setSelectedCustomer(id);
          console.log(id)
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
          
          <MonthlyRewards
            transactions={(selectedMonth || selectedYear) ?filteredTransactions:transactions}
            customerId={selectedCustomer}
          />
          <TransactionTable
            transactions={(selectedMonth || selectedYear)?filteredTransactions:transactions}
            customerId={selectedCustomer}
          />
          
        </>
      )}
    </div>
  );
};

export default App;
