'use client';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import { Tooltip } from 'flowbite-react';
import React from 'react';

export default function DESymptomsCheck() {
  return (
    <Tooltip content='**Have hover over the Symptom part with a disclaimer**'>
      <div className='max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
          Common Disordered Eating Symptoms Relating to Food Intake and
          Nutrition
        </h2>
        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
          <li>Unusual food fears</li>
          <li>Unusual ways of actually consuming food</li>
          <li>Unusual diet regimes</li>
          <li>Overeating</li>
          <li>Undereating</li>
          <li>Bingeing</li>
          <li>Arbitrary food labeling</li>
          <li>Constantly dieting</li>
          <li>Fasting</li>
        </ul>
      </div>
    </Tooltip>
  );
}
