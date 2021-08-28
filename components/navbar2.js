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
    <Disclosure as='nav' className='bg-opacity-0'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-shrink-0 flex items-center'>
                  <svg
                    viewBox='0 0 556 250'
                    className='text-white fill-current block lg:hidden h-10 w-auto'>
                    <path d='M340.9 12.3c-11.4 6-14.4 20.7-6.2 29.8 4.9 5.4 8.1 6.9 14.9 6.9 10.8 0 18.4-7.1 19.2-17.9 1.1-15.4-14.5-25.9-27.9-18.8zM478 37.9v22.9l-25.7.5c-27.8.5-31.4 1-42.2 6.4-7.5 3.7-21.6 17.9-25.8 25.8-5.8 11.2-7.7 19.5-7.7 33.5.1 14.5 1.7 21.8 7.2 32.5 4.9 9.6 18.3 23 27.2 27.3 20.5 10 45.6 7.5 60.6-6.1 2.9-2.6 5.5-4.7 5.8-4.7.3 0 .6 2.9.6 6.5v6.5h31V15h-31v22.9zm-18 58.2c11.7 6.4 17.5 16.9 17.4 31.4-.2 18.5-10.8 31.2-28.6 34.5-6.8 1.3-16 0-22.1-3.2-22.4-11.4-25.2-45.4-5-60.3 7-5.1 12.2-6.5 22.8-6.2 8.2.2 9.7.6 15.5 3.8zM106.5 62.5c-9.1 1.6-17.4 5.7-23.8 11.7-2.8 2.7-5.3 4.8-5.4 4.8-.2 0-.3-3.2-.3-7v-7H46v174h31v-46h23.3c24.7 0 32-.9 41.7-5.1 11.2-4.8 24-17.4 29.9-29.3 9.4-19.1 9.4-43.5 0-62.6-3.4-6.8-5.9-10.2-12.8-17-10.1-10-18-14.4-29.9-16.6-9.3-1.6-13.5-1.6-22.7.1zm20.7 32.2c6.5 3 12.9 9.2 16.3 16 2.7 5.3 3 6.7 3 16.3 0 12.3-1.6 16.9-8.6 24.5-13 14.1-36.7 14.8-50.1 1.3-16.4-16.3-12.4-46.8 7.5-56.9 6.7-3.5 8.7-3.9 18.2-3.6 6.5.2 10.3.9 13.7 2.4zM234.2 62.1c-13.2 2.2-23.4 8-33.7 19.1-11.9 12.9-16.9 26.7-16.9 46.3.1 14 1.8 21.5 7.2 32 4.9 9.6 18.3 23 27.2 27.3 20.4 10 45.6 7.4 60.8-6.3 2.8-2.5 5.3-4.5 5.6-4.5.3 0 .6 2.9.6 6.5v6.5h31V65h-31v14.2l-5.2-4.8c-7.2-6.4-17.3-11-27.1-12.3-8.9-1.2-11-1.2-18.5 0zm31.5 33.2c7.2 3.7 12 8.8 15.6 16.6 2.8 5.8 3.1 7.6 3 15.1 0 9.5-1.6 14.6-6.3 21.5-6.2 9-16.1 13.7-28.6 13.8-6.7 0-9.1-.5-14-2.7-13.8-6.3-21.2-19.2-20.2-35.2.9-13.7 9.2-25.7 21.2-30.4 7.7-3 22.1-2.4 29.3 1.3zM334 127v62h31V65h-31v62z' />
                  </svg>

                  <div>
                    <svg
                      viewBox='0 0 556 250'
                      className='text-white fill-current hidden lg:block h-12 w-auto'>
                      <path d='M340.9 12.3c-11.4 6-14.4 20.7-6.2 29.8 4.9 5.4 8.1 6.9 14.9 6.9 10.8 0 18.4-7.1 19.2-17.9 1.1-15.4-14.5-25.9-27.9-18.8zM478 37.9v22.9l-25.7.5c-27.8.5-31.4 1-42.2 6.4-7.5 3.7-21.6 17.9-25.8 25.8-5.8 11.2-7.7 19.5-7.7 33.5.1 14.5 1.7 21.8 7.2 32.5 4.9 9.6 18.3 23 27.2 27.3 20.5 10 45.6 7.5 60.6-6.1 2.9-2.6 5.5-4.7 5.8-4.7.3 0 .6 2.9.6 6.5v6.5h31V15h-31v22.9zm-18 58.2c11.7 6.4 17.5 16.9 17.4 31.4-.2 18.5-10.8 31.2-28.6 34.5-6.8 1.3-16 0-22.1-3.2-22.4-11.4-25.2-45.4-5-60.3 7-5.1 12.2-6.5 22.8-6.2 8.2.2 9.7.6 15.5 3.8zM106.5 62.5c-9.1 1.6-17.4 5.7-23.8 11.7-2.8 2.7-5.3 4.8-5.4 4.8-.2 0-.3-3.2-.3-7v-7H46v174h31v-46h23.3c24.7 0 32-.9 41.7-5.1 11.2-4.8 24-17.4 29.9-29.3 9.4-19.1 9.4-43.5 0-62.6-3.4-6.8-5.9-10.2-12.8-17-10.1-10-18-14.4-29.9-16.6-9.3-1.6-13.5-1.6-22.7.1zm20.7 32.2c6.5 3 12.9 9.2 16.3 16 2.7 5.3 3 6.7 3 16.3 0 12.3-1.6 16.9-8.6 24.5-13 14.1-36.7 14.8-50.1 1.3-16.4-16.3-12.4-46.8 7.5-56.9 6.7-3.5 8.7-3.9 18.2-3.6 6.5.2 10.3.9 13.7 2.4zM234.2 62.1c-13.2 2.2-23.4 8-33.7 19.1-11.9 12.9-16.9 26.7-16.9 46.3.1 14 1.8 21.5 7.2 32 4.9 9.6 18.3 23 27.2 27.3 20.4 10 45.6 7.4 60.8-6.3 2.8-2.5 5.3-4.5 5.6-4.5.3 0 .6 2.9.6 6.5v6.5h31V65h-31v14.2l-5.2-4.8c-7.2-6.4-17.3-11-27.1-12.3-8.9-1.2-11-1.2-18.5 0zm31.5 33.2c7.2 3.7 12 8.8 15.6 16.6 2.8 5.8 3.1 7.6 3 15.1 0 9.5-1.6 14.6-6.3 21.5-6.2 9-16.1 13.7-28.6 13.8-6.7 0-9.1-.5-14-2.7-13.8-6.3-21.2-19.2-20.2-35.2.9-13.7 9.2-25.7 21.2-30.4 7.7-3 22.1-2.4 29.3 1.3zM334 127v62h31V65h-31v62z' />
                    </svg>
                  </div>
                </div>
                <div className='hidden md:ml-6 md:flex md:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href='#'
                    className='border-indigo-500 text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    Payments
                  </a>
                  <a
                    href='#'
                    className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    About
                  </a>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <button
                    type='button'
                    className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <CashIcon
                      className='-ml-1 mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                    <span>Connect</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href='#'
                className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'>
                Dashboard
              </a>
              <a
                href='#'
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'>
                Team
              </a>
              <a
                href='#'
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'>
                Projects
              </a>
              <a
                href='#'
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'>
                Calendar
              </a>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-200'>
              <div className='flex items-center px-4 sm:px-6'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    tom@example.com
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'>
                  Your Profile
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'>
                  Settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'>
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
