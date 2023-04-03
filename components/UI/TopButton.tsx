import React from 'react';

export default function TopButton() {
  return (
    <a
      href='#'
      type='button'
      className='text-body bg-button-back hover:bg-bg-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      Top
      <span className='sr-only'>Icon description</span>
    </a>
  );
}
