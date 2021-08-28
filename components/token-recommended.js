import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';

const tokens = [
  {
    name: 'Kirby Token',
    role: 'KBY',
    change: '12%',
    changeType: 'increase',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=KBY&background=3167e3&color=fff',
  },
  {
    name: 'Nixon Token',
    role: 'NXN',
    change: '3%',
    changeType: 'decrease',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=NXN&background=6D28D9&color=fff',
  },
  {
    name: 'Delike Token',
    role: 'DDE',
    change: '18%',
    changeType: 'increase',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=DDE&background=000&color=fff',
  },
  {
    name: 'Silvia Art NFT',
    role: 'SLA',
    change: '29%',
    changeType: 'increase',
    imageUrl:
      'https://eu.ui-avatars.com/api/?name=SLA&background=DC2626&color=fff',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TokenRecommended() {
  return (
    <div className='mt-10'>
      <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
        Popular Tokens
      </h3>
      <ul role='list' className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {tokens.map((person, personIdx) => (
          <li key={personIdx}>
            <button
              type='button'
              className='group p-1 w-full flex items-center justify-between rounded-full border bg-white border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              <span className='min-w-0 flex-1 flex items-center space-x-3'>
                <span className='block flex-shrink-0'>
                  <img
                    className='h-12 w-12 rounded-full drop-shadow-md'
                    src={person.imageUrl}
                    alt=''
                  />
                </span>
                <span className='block min-w-0 flex-1'>
                  <span className='block text-md font-semibold text-gray-900 truncate'>
                    {person.name}
                  </span>
                  <span className='block text-sm font-medium text-gray-500 truncate'>
                    {person.role}
                  </span>
                </span>
              </span>
              <div className='pr-6 h-10 w-10 inline-flex items-center justify-center'>
                <div
                  className={classNames(
                    person.changeType === 'increase'
                      ? ' text-green-800'
                      : ' text-red-800',
                    'inline-flex p-1 rounded-full text-md font-medium'
                  )}>
                  {person.changeType === 'increase' ? (
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
                    {person.changeType === 'increase'
                      ? 'Increased'
                      : 'Decreased'}{' '}
                    by
                  </span>
                  {person.change}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
