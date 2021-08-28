import {
  StopIcon,
  CalendarIcon,
  CubeTransparentIcon,
} from '@heroicons/react/solid';

export default function TokenHeader() {
  return (
    <div className='mb-2 w-full'>
      <img
        src='https://eu.ui-avatars.com/api/?name=FIR&background=FFFF00&color=ffa500'
        className='inline-block shadow-md align-middle w-12 h-12 rounded-full'
      />
      <h2 className='ml-2 inline-block align-middle text-3xl font-bold leading-7 text-white sm:text-3xl sm:truncate'>
        Fire Token
      </h2>

      <div className='inline-block align-middle items-center text-md text-gray-100'>
        <StopIcon
          className='inline-block ml-2 h-5 w-5 text-gray-100'
          aria-hidden='true'
        />
        <span className='inline-block align-middle'>FIR</span>
      </div>
    </div>
  );
}
