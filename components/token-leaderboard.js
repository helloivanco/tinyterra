/* This example requires Tailwind CSS v2.0+ */
import {
  CheckCircleIcon,
  SwitchHorizontalIcon,
  MailIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
const tokens = [
  {
    name: 'Fire Token',
    symbol: 'FRE',
    change: '8%',
    changeType: 'increase',
    price: '$12.87',
    href: '/token',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=FIR&background=FFFF00&color=ffa500',
  },
  {
    name: 'Kirby Token',
    symbol: 'KBY',
    change: '12%',
    changeType: 'increase',
    price: '$43.33',
    href: '/token',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=KBY&background=3167e3&color=fff',
  },
  {
    name: 'Nixon Token',
    symbol: 'NXN',
    change: '3%',
    changeType: 'decrease',
    price: '$1.28',
    href: '/token',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=NXN&background=6D28D9&color=fff',
  },
  {
    name: 'Delike Token',
    symbol: 'DDE',
    change: '18%',
    changeType: 'increase',
    price: '$0.88',
    href: '/token',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=DDE&background=000&color=fff',
  },
  {
    name: 'Silvia Art NFT',
    symbol: 'SLA',
    change: '29%',
    changeType: 'increase',
    price: '$89.22',
    href: '/token',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=SLA&background=DC2626&color=fff',
  },
];
export default function Example() {
  function getMedal(param) {
    switch (param) {
      case 0:
        return '🥇';
      case 1:
        return '🥈';
      case 2:
        return '🥉';
      default:
        return '';
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  function randomArray() {
    return Array.from({ length: 20 }, () => Math.floor(Math.random() * 40));
  }

  return (
    <div className='flex flex-col max-w-4xl px-4 mx-auto'>
      <h3 className='text-2xl leading-6 mt-10 mb-4 drop-shadow-lg font-medium text-white'>
        Token Leaderboard 🚀
      </h3>
      <div className='backdrop-filter backdrop-blur-md bg-gray-800/50 shadow overflow-hidden rounded-md'>
        <ul symbol='list' className='divide-y divide-gray-800/50'>
          {tokens.map((token, index) => (
            <li key={token.symbol}>
              <a href={token.href} className='block hover:bg-gray-800/20'>
                <div className='flex items-center px-4 py-4 sm:px-6'>
                  <div className='min-w-0 flex-1 flex items-center'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-12 w-12 rounded-full'
                        src={token.imageUrl}
                        alt=''
                      />

                      {[0, 1, 2].includes(index) && (
                        <span className='absolute -mt-5 -ml-1 text-2xl'>
                          {getMedal(index)}
                        </span>
                      )}
                    </div>
                    <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                      <div>
                        <p className='text-md font-bold text-white truncate'>
                          {token.name}
                        </p>
                        <p className='flex items-center text-md text-gray-400'>
                          <span className='truncate'>{token.symbol}</span>
                        </p>
                      </div>
                      <div className='hidden md:block'>
                        <Sparklines
                          data={randomArray()}
                          width={200}
                          height={40}
                          margin={5}>
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
                      </div>
                    </div>
                    <div className='flex'>
                      <div>
                        <p className='text-lg font-medium text-white'>
                          {token.price}
                        </p>
                        <div className='flex items-center text-sm text-gray-50'>
                          <div
                            className={classNames(
                              token.changeType === 'increase'
                                ? 'text-green-500'
                                : 'text-red-500',
                              'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                            )}>
                            {token.changeType === 'increase' ? (
                              <ArrowSmUpIcon
                                className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500'
                                aria-hidden='true'
                              />
                            ) : (
                              <ArrowSmDownIcon
                                className='-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500'
                                aria-hidden='true'
                              />
                            )}

                            <span className='sr-only'>
                              {token.changeType === 'increase'
                                ? 'Increased'
                                : 'Decreased'}{' '}
                              by
                            </span>
                            {token.change}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
