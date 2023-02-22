'use client';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import { Tooltip } from 'flowbite-react';
import React from 'react';

export default function DESymptomsCheck() {
  return (
    <Tooltip content='**Have hover over the Symptom part with a disclaimer**'>
      {' '}
      <fieldset className='max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <legend className='sr-only'>Checkbox variants</legend>
        <UnderlineSubtitle className='text-lg'>
          Common Disordered Eating Symptoms Relating to Food Intake and
          Nutrition
        </UnderlineSubtitle>

        <div className='flex items-center mb-4'>
          <input
            id='checkbox-1'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-1'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Unusual food fears
          </label>
        </div>

        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Unusual ways of actually consuming food
          </label>
        </div>

        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Usual diet regimes
          </label>
        </div>

        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Overeating
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Undereating
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Bingeing
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Arbitrary food labeling
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Constantly dieting
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <input
            id='checkbox-2'
            type='checkbox'
            value=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='checkbox-2'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Fasting
          </label>
        </div>
      </fieldset>
    </Tooltip>
  );
}
