import { useEffect, useState } from "react";
import { fetchTransactions } from "../api/FetchTransactions";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData= async()=>{
        try{
           let data= await fetchTransactions();
      setTransactions(data);
      setLoading(false);
        }
        catch{
      setError("Failed to fetch transactions");
      setLoading(false);
        }
      
    }
    fetchData();
  }, []);

  return { transactions, loading, error };
};

export default useTransactions;
