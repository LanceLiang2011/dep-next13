import React from 'react';

export default function BackQuote({ children }: any) {
  return (
    <blockquote className='p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
      <p className='text-md italic font-medium leading-relaxed text-gray-900 dark:text-white'>
        {children}
      </p>
    </blockquote>
  );
}
