import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function randomArray() {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 40));
}

export default function TokenChart() {
  return (
    <div className='backdrop-filter backdrop-blur-md bg-gray-800/50 shadow rounded-lg py-3 px-5'>
      <div className='text-center'>
        <div class='relative py-16 my-auto'>
          <div className='font-semibold text-lg text-white'>Last 7 Days</div>
          <Sparklines data={randomArray()} width={200} height={40} margin={5}>
            <SparklinesLine
              style={{
                strokeWidth: 4,
                stroke: '#6366F1',
                fill: 'none',
              }}
            />
            <SparklinesSpots
              size={2}
              style={{
                stroke: 'white',
                strokeWidth: 3,
                fill: 'white',
              }}
            />
          </Sparklines>

          <div className='mt-6 mb-2 font-semibold text-lg text-white'>
            Tokenomics
          </div>

          <ProgressBar progressPercentage={70} />
        </div>
      </div>
    </div>
  );
}

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className='h-10 w-full bg-gray-800/50 rounded-lg'>
      <div
        style={{ marginLeft: '90%' }}
        className='absolute mt-1 text-white font-semibold text-xs'>
        10,000 FIR
      </div>
      <div
        style={{ marginLeft: `${progressPercentage}%` }}
        className='text-white
        absolute mt-12'>
        🔥 3,700 left
      </div>
      <div
        style={{ marginLeft: `${progressPercentage / 3}%` }}
        className='text-white absolute mt-12'>
        💰 33% backed
      </div>

      <div
        style={{ width: `${progressPercentage}%` }}
        className={`relative h-full rounded-lg ${
          progressPercentage < 70 ? 'bg-orange-800' : 'bg-indigo-600'
        }`}>
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`absolute h-full rounded-lg ${
            progressPercentage / 3 < 70 ? 'bg-indigo-400' : 'bg-indigo-600'
          }`}></div>
      </div>
    </div>
  );
};
