"use client";

import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts"; // Import Recharts components
// import { Bar } from "react-chartjs-2";  // Import Bar chart component from react-chartjs-2
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Link from "next/link";
import styles from "./calculator.module.css";
import axios from "axios";
import { Slider } from "../ui/slider";


const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {(percent * 100).toFixed(0)}%
    </text>
  );
};


// import { Chart } from "react-google-charts";  // Import Google Chart

// Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Calculator({service}) {
  
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturn, setExpectedReturn] = useState(15);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [chartData, setChartData] = useState([]);
  const [result, setResult] = useState(null);

  const calculateSip = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/sip-calculator?monthlyInvestment=${monthlyInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (res.status === 200) {
        const data = res.data;
        const futureValue = data.futureValue;
        const totalInvestment = data.totalInvestment;
        const yearlyData = data.yearlyData;
        setResult({
          futureValue: Number(futureValue.toFixed(2)),
          totalInvestment: Number(totalInvestment.toFixed(2)),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update the calculation when any of the investment values change
  useEffect(() => {
    calculateSip();
  }, [monthlyInvestment, investmentDuration, expectedReturn]);

  // console.log(result,chartData,"mjkokjk")
  const chartDataset = chartData.map((item) => ({
    year: item.year,
    profit: item.growth - item.investedAmount,
    investment: item.investedAmount,
  }));

  const data = result
    ? [
        { name: "Invested Amount", value: result.totalInvestment },
        {
          name: "Estimated Return",
          value: result.futureValue - result.totalInvestment,
        },
        { name: "Final Amount", value: result.futureValue },
      ]
    : [];

  const COLORS = ["var(--rv-primary)", "black", "var(--rv-secondary)"]; // Blue & Orange
  return (
    <div className=" ">
      <div className="max-w-screen-xl main_section mx-auto">
     

{!service && (
  <div className="row items-center">
    <div className="col-lg-6 m-auto">
      <div className="heading1 text-center space-margin60">
        <h5>OUR CALCULATOR</h5>
        <div className="space20"></div>
        <h2 className="text-anime-style-1">Plan Your Wealth with Our SIP Calculator</h2>
      </div>
    </div>
  </div>
)}


        <div className="lg:relative  flex flex-col gap-10">

          <div className="flex flex-col gap-4 md:gap-20 md:flex-row pt-5 md:relative ">
            <div className="w-full md:w-1/2 ">
              {/* < */}
              <div className="sm:space-y-8 ">
                {/* Invested Amount Section */}
                <div>
                  <div className="flex sm:flex-row justify-between">
                    <label className="block pt-2  text-black text-md md:text-xl font-semibold ">
                      Invested Amount (₹)
                    </label>
                    <div className="relative w-32 md:w-64 h-12">
                      <input
                        type="number"
                        value={monthlyInvestment}
                        onChange={(e) =>
                          setMonthlyInvestment(Number(e.target.value))
                        }
                        className="w-full h-full pl-10 bg-transparent border  border-[--rv-primary] border-solid   text-black font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[--rv-primary]">
                        ₹
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    max={100000}
                    step={1000}
                    className="mt-2 text-gray"
                  />
                </div>
              </div>

              <div className="space-y-8  my-8 ">
                <div>
                  <div className="flex sm:flex-row  justify-between">
                    <label className="block pt-2  text-black text-md md:text-xl font-semibold">
                      Expected Return (%)
                    </label>
                    <div className="relative w-32 md:w-64 h-12">
                      <input
                        type="number"
                        value={expectedReturn}
                        onChange={(e) =>
                          setExpectedReturn(Number(e.target.value))
                        }
                        className="w-full h-full pl-10 bg-transparent border  border-[--rv-primary] border-solid   text-black font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[--rv-primary]">
                        %
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    max={30}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="space-y-8  my-8">
                <div>
                  <div className=" flex sm:flex-row  justify-between">
                    <label className="block pt-2  text-black text-md md:text-xl font-semibold">
                      Time Period (Y)
                    </label>
                    <div className="relative w-32 md:w-64 h-12">
                      <input
                        type="number"
                        value={investmentDuration}
                        onChange={(e) =>
                          setInvestmentDuration(Number(e.target.value))
                        }
                        className="w-full h-full pl-10 bg-transparent border  border-[--rv-primary] border-solid   text-black font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[--rv-primary]">
                        Y
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[investmentDuration]}
                    onValueChange={(value) => setInvestmentDuration(value[0])}
                    max={40}
                    step={1}
                    className="mt-2 "
                  />
                </div>
              </div>
            </div>
            <Card className="w-full md:w-1/2">
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        paddingAngle={5}
        dataKey="value"
        labelLine={false}
        label={renderCustomizedLabel} // 👈 Use custom label
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip
        formatter={(value, name) => [`₹${value.toLocaleString("en-IN")}`, name]}
      />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</Card>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10 pt-5  md:relative ">
            <div className="w-full md:w-1/3">
              {/* Invested Amount Section */}
              <div className="border-2 border-solid bg-[#0666e538] border-[--rv-primary] rounded-[10px] p-4 py-6">
                <div className="sip-calculator-output w-full">
                  <label className="text-black text-xl font-bold">
                    Invested Amount (₹)
                  </label>
                  <label className="text-black text-xl font-bold pl-2">
                    {result?.totalInvestment?.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              {/* Invested Amount Section */}
              <div className="border-2 border-solid bg-[#0666e538] border-[--rv-primary] rounded-[10px] p-4 py-6">
                <div className="sip-calculator-output  w-full">
                  <label className="text-black text-xl font-bold">
                    Estimated Return (₹)
                  </label>
                  <label className="text-black text-xl font-bold pl-2">
                    {(
                      result?.futureValue - result?.totalInvestment
                    )?.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              {/* Invested Amount Section */}
              <div className="border-2 border-solid bg-[#0666e538] border-[--rv-primary] rounded-[10px] p-4 py-6">
                <div className="sip-calculator-output  w-full">
                  <label className="text-black text-xl font-bold">
                    Final Amount (₹)
                  </label>
                  <label className="text-black text-xl font-bold pl-2">
                    {result?.futureValue?.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
