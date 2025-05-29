import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { calculatePoints } from "../../utils/calculateRewards";

const MonthlyRewards = ({ transactions, customerId }) => {
  const customerTxns = transactions.filter(
    (txn) => txn.customerId === customerId
  );

  const grouped = {};

  customerTxns.forEach(({ amount, date }) => {
    const month = new Date(date).toLocaleString("default", { month: "long" });
    grouped[month] = (grouped[month] || 0) + calculatePoints(amount);
  });

  const labels = Object.keys(grouped);
  const dataPoints = Object.values(grouped);
  const total = dataPoints.reduce((acc, val) => acc + val, 0);

  const options = {
    chart: {
      type: "column",
      height: 260,
    },
    title: {
      text: `Monthly Rewards for ${customerId}`,
    },
    xAxis: {
      categories: labels,
      title: {
        text: "Month",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Points",
      },
    },
    tooltip: {
      pointFormat: "<b>{point.y} points</b>",
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        borderRadius: 3,
      },
    },
    series: [
      {
        name: "Points",
        data: dataPoints,
        showInLegend: false,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "60%"}}>
      {transactions.length?<><HighchartsReact highcharts={Highcharts} options={options} />
      <strong>Total: {total} points</strong></>:<></>}
    </div>
  );
};

export default MonthlyRewards;
