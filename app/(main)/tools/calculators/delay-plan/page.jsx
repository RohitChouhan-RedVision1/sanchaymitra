"use client";
import React, { useEffect, useState } from "react";
import "chart.js/auto";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { SippieChart } from "@/components/charts/sippiechart";
import { CalculatorReturnChart } from "@/components/charts/calculatorReturnChart";
import axios from "axios";
import { useRouter } from "next/navigation";
import { calculators } from "@/data/calculators";

export default function DelayCostCalculator() {
  const router = useRouter();
  const [monthlySIP, setMonthlySIP] = useState(5000); // Monthly SIP amount
  const [timePeriod, setTimePeriod] = useState(10); // Investment period in years
  const [expectedReturn, setExpectedReturn] = useState(7); // Expected annual return in %
  const [delayMonths, setDelayMonths] = useState(6); // Delay in months for starting SIP

  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const calculateDelayCost = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/delay-calculator?monthlyInvestment=${monthlySIP}&investmentDuration=${timePeriod}&expectedReturn=${expectedReturn}&delayInMonths=${delayMonths}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        if (res.status === 200) {
          const data = res.data;
          const totalAmountInvested = data.totalAmountInvested;
          const futureValueWithoutDelay = data.futureValueWithoutDelay;
          const futureValueAfterDelay = data.futureValueAfterDelay;
          const costOfDelay = data.costOfDelay;
          const yearlyData = data.yearlyData;
          setResult({
            totalInvestment: Math.round(totalAmountInvested),
            futureValue: Math.round(futureValueWithoutDelay),
            lumpsumInvestment: Math.round(futureValueAfterDelay),
            sipInvestment: Math.round(costOfDelay),
          });
          setChartData(yearlyData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    calculateDelayCost();
  }, [monthlySIP, timePeriod, expectedReturn, delayMonths]);
  const handleCalculatorChange = (e) => {
    const selectedRoute = e.target.value;
    if (selectedRoute) {
      router.push(selectedRoute); // Navigate to selected route
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-[150px]">
      <div className="">
        <div className="mb-5 flex flex-col md:flex-row gap-5 justify-between">
          <div className="">
            <h3 className="text-2xl md:text-3xl font-bold uppercase">
              Delay Cost Calculator
            </h3>
          </div>
          <div className="flex justify-between gap-4">
            <span>Explore other calculators</span>
            <select
              className="w-full border border-gray-500 rounded-lg p-2"
              onChange={handleCalculatorChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              {calculators.map((calc) => (
                <option key={calc.title} value={calc.route}>
                  {calc.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
              <div className="col-span-1 border border-gray-200 rounded-2xl bg-white p-5">
                <div className="sip-calculator container mx-auto p-3 sticky top-0 z-10">
                  <div className="input-fields mt-5 mb-10">
                    {/* Monthly SIP */}
                    <div className="flex justify-between">
                      <h3>Monthly SIP (₹)</h3>
                      <div>
                        <input
                          type="number"
                          value={monthlySIP}
                          onChange={(e) =>
                            setMonthlySIP(
                              parseFloat(e.target.value.replace(/,/g, ""))
                            )
                          }
                          className="font-semibold text-green-700 w-20 border-none"
                        />
                      </div>
                    </div>
                    <Input
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={monthlySIP||0}
                      onChange={(e) =>
                        setMonthlySIP(parseFloat(e.target.value))
                      }
                      className="customRange w-full"
                      style={{
                        "--progress": `${
                          ((monthlySIP - 500) / (100000 - 500)) * 100
                        }%`,
                      }}
                    />

                    {/* Time Period */}
                    <div className="items-center mt-5">
                      <div className="flex justify-between">
                        <h3>Time Period (Years)</h3>
                        <input
                          type="number"
                          value={timePeriod}
                          onChange={(e) =>
                            setTimePeriod(parseFloat(e.target.value))
                          }
                          className="font-semibold text-green-700 w-10 border-none"
                        />
                      </div>
                      <Input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={timePeriod||0}
                        onChange={(e) =>
                          setTimePeriod(parseFloat(e.target.value))
                        }
                        style={{
                          "--progress": `${
                            ((timePeriod - 1) / (30 - 1)) * 100
                          }%`,
                        }}
                      />
                    </div>

                    {/* Rate of Return */}
                    <div className="items-center mt-5">
                      <div className="flex justify-between">
                        <h3>Expected Return (%)</h3>
                        <input
                          type="number"
                          value={expectedReturn}
                          onChange={(e) =>
                            setExpectedReturn(parseFloat(e.target.value))
                          }
                          className="font-semibold text-green-700 w-10 border-none"
                        />
                      </div>
                      <Input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={expectedReturn||0}
                        onChange={(e) =>
                          setExpectedReturn(parseFloat(e.target.value))
                        }
                        className="customRange w-full"
                        style={{
                          "--progress": `${
                            ((expectedReturn - 1) / (30 - 1)) * 100
                          }%`,
                        }}
                      />
                    </div>

                    {/* Delay in SIP */}
                    <div className="items-center mt-5">
                      <div className="flex justify-between">
                        <h3>Delay in Starting SIP (Months)</h3>
                        <input
                          type="number"
                          value={delayMonths}
                          onChange={(e) =>
                            setDelayMonths(parseFloat(e.target.value))
                          }
                          className="font-semibold text-green-700 w-10 border-none"
                        />
                      </div>
                      <Input
                        type="range"
                        min="0"
                        max="24"
                        step="1"
                        value={delayMonths||0}
                        onChange={(e) =>
                          setDelayMonths(parseFloat(e.target.value))
                        }
                        className="customRange w-full"
                        style={{
                          "--progress": `${(delayMonths / 24) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {result && (
                    <div className="mt-5">
                      <div className="flex justify-between px-5 mb-3">
                        <p>Total Value</p>
                        <p className="font-bold text-lg">
                          ₹{result?.totalInvestment?.toLocaleString()}
                        </p>
                      </div>
                      <hr className="mb-3" />
                      <div className="flex justify-between px-5 mb-3">
                        <p>Future Value without Delay</p>
                        <p className="font-bold text-lg">
                          ₹{result?.futureValue?.toLocaleString()}
                        </p>
                      </div>
                      <hr className="mb-3" />
                      <div className="flex justify-between px-5 mb-3">
                        <p>Cost of Delay in Future Value</p>
                        <p className="font-bold text-lg">
                          ₹{result?.sipInvestment?.toLocaleString()}
                        </p>
                      </div>
                      <hr className="mb-3" />
                      <div className="flex justify-between px-5 mb-3">
                        <p>Future Value after Delay</p>
                        <p className="font-bold text-lg">
                          ₹{result?.lumpsumInvestment?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <SippieChart
                  piedata={result}
                  title={"Delay Planning Projection"}
                  customLabels={{
                    invested: "Total Value",
                    return: "Future Value without Delay",
                  }}
                />
                <div className="mt-5">
                  <CalculatorReturnChart
                    data={chartData}
                    chartType="line"
                    customLabels={{
                      xLabel: "Years",
                      yLabel: "Amount (₹)",
                    }}
                    chartTitle="Delay Planning Projection"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
