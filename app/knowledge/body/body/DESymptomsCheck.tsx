'use client';
import Title from '@/components/Typograpjy/Title';
import { Tooltip } from 'flowbite-react';
import React from 'react';

export default function DESymptomsCheck() {
  return (
    <Tooltip content='**Have hover over the Symptom part with a disclaimer**'>
      <div className='max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
          Common Disordered Eating Symptoms Relating to the Body
        </h2>
        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
          <li>Poor body image</li>
          <li>Body checking and scanning</li>
          <li>Preoccupation about weight</li>
          <li>Discontent surrounding one&apos;s body</li>
        </ul>
      </div>
    </Tooltip>
  );
}
