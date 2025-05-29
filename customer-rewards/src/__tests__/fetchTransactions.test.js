import { fetchTransactions } from "../api/FetchTransactions";

describe("fetchTransactions", () => {
  jest.useFakeTimers();

  it("resolves with transaction data", async () => {
    const promise = fetchTransactions();

    jest.advanceTimersByTime(2000);

    const data = await promise;

    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty("transactionId");
    expect(data[0]).toHaveProperty("amount");
    expect(data[0]).toHaveProperty("customerId");
  });

});
