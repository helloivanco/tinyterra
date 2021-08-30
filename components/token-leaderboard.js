import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import ChangeArrow from './change-arrow';
import { randomNumber, randomChangeType } from '../utils/misc';
const tokens = [
  {
    name: 'Fire',
    symbol: 'FRE',
    change: randomNumber(),
    changeType: randomChangeType(),
    price: randomNumber(),
    href: '/token',
    imageUrl: '/tokens/fre.jpg',
  },
  {
    name: 'Kirby',
    symbol: 'KBY',
    change: '12%',
    change: randomNumber(),
    changeType: randomChangeType(),
    price: randomNumber(),
    href: '/token',
    imageUrl: '/tokens/kby.jpg',
  },
  {
    name: 'Nixon',
    symbol: 'NXN',
    change: '3%',
    change: randomNumber(),
    changeType: randomChangeType(),
    price: randomNumber(),
    href: '/token',
    imageUrl: '/tokens/nxn.jpg',
  },
  {
    name: 'Delike',
    symbol: 'DDE',
    change: '18%',
    change: randomNumber(),
    changeType: randomChangeType(),
    price: randomNumber(),
    href: '/token',
    imageUrl: '/tokens/dde.jpg',
  },
  {
    name: 'Silvia',
    symbol: 'SLA',
    change: '29%',
    change: randomNumber(),
    changeType: randomChangeType(),
    price: randomNumber(),
    href: '/token',
    imageUrl: '/tokens/sla.jpg',
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

                      <span className='absolute -mt-5 -ml-2 text-3xl'>
                        {getMedal(index)}
                      </span>
                    </div>
                    <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4'>
                      <div className='my-auto'>
                        <p className='text-md font-bold text-white truncate'>
                          <span className='font-extralight'>#{index + 1}</span>{' '}
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
                    <div className='flex text-center'>
                      <div>
                        <p className='text-lg font-medium text-white'>
                          ${token.price}
                        </p>
                        <div className='flex items-center text-gray-50 px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'>
                          <ChangeArrow
                            changeType={token.changeType}
                            change={token.change}
                          />
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
