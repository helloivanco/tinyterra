import {
  ArrowSmUpIcon,
  CalendarIcon,
  CubeTransparentIcon,
  ChartPieIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/solid';

export default function TokenDetails() {
  return (
    <div className='backdrop-filter backdrop-blur-md bg-gray-800/50 shadow rounded-lg p-3 min-h-full'>
      <div className='flex justify-between'>
        <h3 className='ml-1 flex align-middle text-2xl font-semibold leading-7 text-white sm:text-3xl sm:truncate'>
          $12.87
        </h3>

        <div className='text-green-500 inline-flex py-2 px-1 rounded-full text-md font-medium'>
          <ArrowSmUpIcon
            className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500'
            aria-hidden='true'
          />
          8.22%
        </div>
      </div>
      <div className='mx-1 mt-2 text-sm text-gray-50'>
        Fire Token is a participation and governnce token for the Fire
        community.<span className='ml-2 underline'>Learn more</span>
      </div>

      <div className='pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
        <div className='mt-2 flex items-center text-sm text-gray-50'>
          <CalendarIcon
            className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
          Minted 5 days ago
        </div>
      </div>
      <div className='mt-16'>
        <div className='flex justify-between'>
          <label
            htmlFor='email'
            className='block text-sm font-bold text-gray-200'>
            Buy FRE{' '}
            <span className='ml-2 underline text-gray-100 font-medium cursor-pointer hover:text-gray-600 hover:font-bold'>
              Sell FRE
            </span>
          </label>
          <span className='text-sm text-gray-400' id='email-optional'>
            6.84 TYT per FRE
          </span>
        </div>
        <div className='mt-1'>
          <input
            type='text'
            name='value'
            id='value'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-lg border-gray-300 rounded-md'
            placeholder='0'
          />
        </div>
      </div>
      <button
        type='button'
        className='mt-2 w-full items-center text-center p-4 border border-transparent shadow-sm text-md font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        <SwitchHorizontalIcon
          className='inline h-5 w-5 mr-2'
          aria-hidden='true'
        />
        Trade
      </button>
    </div>
  );
}
