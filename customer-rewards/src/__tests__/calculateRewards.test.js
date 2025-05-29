import { calculatePoints } from "../utils/calculateRewards";

describe("Reward Points Calculation", () => {
  test("Should return 0 for amount < 50", () => {
    expect(calculatePoints(30)).toBe(0);
  });

  test("Should return 20 for $70", () => {
    expect(calculatePoints(70)).toBe(20);
  });

  test("Should return 90 for $120", () => {
    expect(calculatePoints(120)).toBe(90);
  });

  test("Should return correct for decimal", () => {
    expect(calculatePoints(120.5)).toBe(91);
  });
});
