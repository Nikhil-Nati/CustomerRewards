export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false;
      if (shouldFail) reject("Failed to fetch transactions");
      else {
        resolve([
          {
            customerId: "C1",
            transactionId: "T1",
            amount: 120.5,
            date: "2025-03-15",
          },
          {
            customerId: "C1",
            transactionId: "T2",
            amount: 75,
            date: "2025-02-20",
          },
          {
            customerId: "C2",
            transactionId: "T83",
            amount: 200,
            date: "2025-03-18",
          },
          {
            customerId: "C1",
            transactionId: "T4",
            amount: 45,
            date: "2025-01-10",
          },
          {
            customerId: "C4",
            transactionId: "T75",
            amount: 90,
            date: "2025-02-22",
          },
          {
            customerId: "C3",
            transactionId: "T6",
            amount: 130,
            date: "2024-12-15",
          },
          {
            customerId: "C1",
            transactionId: "T8",
            amount: 120.5,
            date: "2025-03-15",
          },
          {
            customerId: "C1",
            transactionId: "T12",
            amount: 75,
            date: "2025-02-20",
          },
          {
            customerId: "C2",
            transactionId: "T3",
            amount: 200,
            date: "2025-03-18",
          },
          {
            customerId: "C1",
            transactionId: "T14",
            amount: 45,
            date: "2025-01-10",
          },
          {
            customerId: "C2",
            transactionId: "T45",
            amount: 90,
            date: "2025-02-22",
          },
          {
            customerId: "C4",
            transactionId: "T65",
            amount: 90,
            date: "2025-01-22",
          },{
            customerId: "C2",
            transactionId: "T35",
            amount: 90,
            date: "2025-02-22",
          },{
            customerId: "C2",
            transactionId: "T5",
            amount: 90,
            date: "2025-02-22",
          },{
            customerId: "C2",
            transactionId: "T15",
            amount: 90,
            date: "2025-02-22",
          },
          {
            customerId: "C3",
            transactionId: "T6",
            amount: 130,
            date: "2024-12-15",
          },
        ]);
      }
    }, 2000);
  });
};
