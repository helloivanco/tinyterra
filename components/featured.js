import CountUp from 'react-countup';
import { CloudDownloadIcon } from '@heroicons/react/outline';

import Countdown from 'react-countdown';
import Addresses from './addresses';
import Creator from './creator';

export default function Example() {
  return (
    <div className='mt-8 min-w-screen min-h-screen bg-gray-900 flex items-start justify-center px-5 py-5'>
      <div className='bg-gray-800 text-gray-500 rounded-lg shadow-xl py-5 px-5 w-full sm:w-2/3 md:w-1/2 '>
        <div className='flex w-full'>
          <h3 className='inline-block text-3xl font-medium leading-tight flex-1 text-center'>
            Next Airdrop{' '}
            <CloudDownloadIcon
              className='inline-block w-10'
              aria-hidden='true'
            />
          </h3>
        </div>

        <div className='relative overflow-hidden transition-all duration-500'>
          <div className='pb-4 lg:pb-6 text-center'>
            <h4 className='text-2xl lg:text-4xl text-gray-500 font-light leading-tight inline-block'>
              <Countdown date={Date.now() + 20300000} />
            </h4>
          </div>

          <div className='text-center mt-2'>
            <h4 className=' text-white font-semibold leading-tight inline-block'>
              <span className='inline-flex items-center px-5 py-3 rounded-lg text-6xl md:text-7xl font-extrabold text-white'>
                $<CountUp duration={1} decimals={2} end={2.88} />
              </span>
            </h4>
          </div>

          <div className='w-full'>
            <button
              type='button'
              className='w-full items-center px-6 py-3 border border-transparent text-lg font-bold rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Claim
            </button>
          </div>

          <div className='pb-4 lg:pb-6 text-center mt-8'>
            <div className='hover:underline text-indigo-500 font-semibold leading-tight inline-block'>
              Per whitelisted address (5)
            </div>
            <Addresses />
          </div>

          <div className='pb-4 lg:pb-6 text-center mt-4'>
            <Creator />
          </div>
        </div>
      </div>
    </div>
  );
}
