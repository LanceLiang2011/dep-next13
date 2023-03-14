'use client';
import { Tooltip } from 'flowbite-react';
import { AiFillPhone } from 'react-icons/ai';

export const HelpButton = () => {
  return (
    <div className='fixed left-6 bottom-6 group'>
      <Tooltip
        className=' w-32 sm:w-36 md:w-48 lg:w-56 xl:w-64'
        content='Need help with your mental health? Click here to access mental health support through the Canadian government.'
      >
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html'
        >
          <button
            type='button'
            className='flex items-center justify-center text-white bg-red-700 rounded-full w-14 h-14 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none dark:focus:ring-red-800'
          >
            <AiFillPhone size={26} />
            <span className='sr-only'>Open actions menu</span>
          </button>
        </a>
      </Tooltip>
    </div>
  );
};
