import React from 'react';
import Card from './Card';
import { Line, Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { dataLine, dataBar } from '../assets/chartData';

// Register necessary Chart.js components and scales
import { LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
Chart.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement);

const DashBoard = () => {
  return (
    <div className='flex w-full justify-center'>
      <div className='w-full md:w-4/5 mt-8'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between mb-8'>
          <Card title="Total Expense" price="$3536" />
          <Card title="Total Orders" price="$3536" />
          <Card title="Cancelled Orders" price="$3536" />
          <Card title="Total Product Orders" price="$3536" />
        </div>
        <div className='charts'>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Performance</h2>
            <Line data={dataLine} />
          </div>
          {/* <div className='mt-10'>
            <Bar className='w-full' data={dataBar} />
          </div> */}
        </div>
        <div className='budget'>
            <h1 className='text-2xl mt-8 font-bold mb-8'>Save Your Budget</h1>
            {["Groceries", "House Items", "Health and Personal Care", "Snacks & Beverages", "Fruit & Vegetables", "Dairy Products"].map(item => (
              <div className='save border-gray-300 rounded-lg p-3 flex items-center justify-between mb-4 border' key={item}>
                <label className='font-bold'>{item}</label>
                <input type="number" placeholder='0' className='w-16 border-gray-300 border-2 rounded-lg p-1' />
              </div>
            ))}
        </div>
        <div className="btn flex mb-6">
            <button className='mt-2 p-3 w-1/2 mr-1 font-bold border-black border bg-blue-400 rounded-lg'>
                Save Budget
            </button>
            <button className='mt-2 p-3 w-1/2 font-bold border-black border rounded-lg'>
                Reset
            </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
