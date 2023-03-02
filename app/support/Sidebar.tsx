'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function Sidebar() {
  const selectedColor = 'text-white bg-blue-700 dark:bg-gray-800';
  const unselectedColor =
    'hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white';
  const activeSegment = useSelectedLayoutSegment();
  return (
    <div className='w-48 h-fit text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mr-6 mt-2'>
      <Link
        href='/support'
        className={`block w-full px-4 py-2   border-b border-gray-200 rounded-t-lg cursor-pointer dark:border-gray-600 ${
          !activeSegment ? selectedColor : unselectedColor
        }`}
      >
        Home
      </Link>
      <Link
        href='/support/family'
        className={`block w-full px-4 py-2 border-b border-gray-200 cursor-pointer  dark:border-gray-600 ${
          activeSegment === 'family' ? selectedColor : unselectedColor
        }`}
      >
        Family Support
      </Link>
      <Link
        href='/support/types'
        className={`block w-full px-4 py-2 border-b border-gray-200 cursor-pointer  dark:border-gray-600 ${
          activeSegment === 'types' ? selectedColor : unselectedColor
        }`}
      >
        Types of Support
      </Link>
      <Link
        href='/support/direct'
        className={`block w-full px-4 py-2 border-b border-gray-200 cursor-pointer dark:border-gray-600 ${
          activeSegment === 'direct' ? selectedColor : unselectedColor
        }`}
      >
        Direct Support
      </Link>
    </div>
  );
}
