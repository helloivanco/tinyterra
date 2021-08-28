/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { CashIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <div className='bg-gradient-to-b from-black/70 to-transparent'>
      <div className='max-w-5xl mx-auto px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <img src='logo.png' className='h-10 w-auto' />
          </div>
          <div className='ml-6 flex mb-2 space-x-8'>
            <a
              href='/'
              className='hover:border-indigo-500 text-white inline-flex items-center px-1 pt-1 hover:border-b-2 text-sm font-medium'>
              📈 Trade
            </a>
            <a
              href='/'
              className='hover:border-indigo-500 text-white inline-flex items-center px-1 pt-1 hover:border-b-2 text-sm font-medium'>
              🧑‍🌾 Stake
            </a>
            <a
              href='/'
              className='hover:border-indigo-500 text-white inline-flex items-center px-1 pt-1 hover:border-b-2 text-sm font-medium'>
              🏦 Mint
            </a>
          </div>
          <div className='hidden sm:flex items-center '>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <CashIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
