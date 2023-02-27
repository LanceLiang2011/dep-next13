'use client';

import { Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import DiaryCard from './DiaryCard';

export default function DiaryList({ diaries, removeDiary, isLoading }: any) {
  const [searchScope, setSearchScope] = useState('tag');
  const [search, setSearch] = useState('');
  const [filteredDiaries, setFilteredDiaries] = useState(diaries);

  useEffect(() => {
    setFilteredDiaries(
      diaries.filter((diary: any) =>
        diary[searchScope].toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [searchScope, search, diaries]);

  return (
    <div>
      {/* search bar */}
      <form className='flex items-center'>
        <label htmlFor='simple-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            type='text'
            id='simple-search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search'
            required
          />
        </div>
      </form>
      <br />
      {/* radio */}

      <div className='flex'>
        <div className='flex items-center mr-4'>
          <input
            id='inline-radio'
            type='radio'
            value=''
            checked={searchScope === 'tag'}
            onChange={() => {
              setSearchScope('tag');
            }}
            name='inline-radio-group'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='inline-radio'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Search Tag
          </label>
        </div>
        <div className='flex items-center mr-4'>
          <input
            id='inline-2-radio'
            type='radio'
            value=''
            checked={searchScope === 'title'}
            onChange={() => {
              setSearchScope('title');
            }}
            name='inline-radio-group'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='inline-2-radio'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Search Title
          </label>
        </div>
      </div>

      <br />
      {/* list */}
      <div className='flex flex-col flex-wrap gap-5'>
        {!isLoading &&
          filteredDiaries.map((diary: any) => (
            <DiaryCard key={diary.id} diary={diary} removeDiary={removeDiary} />
          ))}
        {isLoading && <Spinner aria-label='Waiting for data' size='xl' />}
      </div>
    </div>
  );
}
