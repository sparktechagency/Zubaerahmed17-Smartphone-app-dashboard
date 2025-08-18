import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample Data for Income and Expenses over the months
const demoData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 5000, expenses: 3000 },
  { month: 'Mar', income: 6000, expenses: 3500 },
  { month: 'Apr', income: 7000, expenses: 4500 },
  { month: 'May', income: 7500, expenses: 5000 },
  { month: 'Jun', income: 8000, expenses: 5500 },
];

const IncomeGraphChart = () => {
  // Use the demo data instead of API data for now
  const alldata = demoData;

  return (
    <section className="w-full col-span-full md:col-span-4 bg-white rounded-lg border-2 border-[#59d8ff] shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <h1 className="text-2xl font-semibold pl-5 pt-5">Last 6 Months Income</h1>
      <ResponsiveContainer width="100%" height={500} className="pr-5 pt-5">
        <LineChart data={alldata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#344f47c5', color: 'white', borderRadius: '10px' }} />
          <Legend />

          {/* Single Line for Income */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#59d8ff" // Blue color for income
            activeDot={{ r: 8 }}
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default IncomeGraphChart;
