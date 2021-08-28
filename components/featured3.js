import CountUp from 'react-countup';
import { CloudDownloadIcon } from '@heroicons/react/outline';

import Countdown from 'react-countdown';
import Addresses from './addresses';
import Creator from './creator';

export default function Example() {
  return (
    <div className='mt-8 min-w-screen min-h-screen bg-gray-900 flex items-start justify-center px-5 py-5'>
      <div className='bg-gray-800 text-gray-500 rounded-lg shadow-xl w-full sm:w-2/3 md:w-1/2 '>
        <div class='relative pb-48 overflow-hidden'>
          <img
            class='rounded-t-lg absolute inset-0 h-full w-full object-cover'
            src='/cwater.jpeg'
            alt=''
          />

          <div className='absolute w-full text-center mt-24'>
            <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-2xl font-medium bg-gray-900 bg-opacity-60 text-white'>
              Water-4-All Community
            </span>
          </div>
        </div>

        <div className='py-5 px-5 '>
          <div className='flex w-full'>
            <h3 className='inline-block text-lg font-medium leading-tight flex-1 text-center'>
              <>
                Next Airdrop{' '}
                <CloudDownloadIcon
                  className='inline-block w-6 mr-1'
                  aria-hidden='true'
                />
                <Countdown date={Date.now() + 20300000} />
              </>
            </h3>
          </div>

          <div className='relative overflow-hidden transition-all duration-500'>
            <div className='text-center mt-2'>
              <h4 className=' text-white font-semibold leading-tight inline-block'>
                <span className='inline-flex items-center px-5 py-3 rounded-lg text-6xl md:text-7xl font-extrabold text-white'>
                  $<CountUp duration={1} decimals={2} end={0.88} />
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
                Whitelisted addresses (1232)
              </div>
              <Addresses />
            </div>

            <div className='pb-4 lg:pb-6 text-center mt-4'>
              <Creator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
