'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <div className='mb-6 flex gap-6'>
      <Link href='/knowledge/body/body'>
        <button
          className={`button-blue-sm ${
            !activeSegment || activeSegment === 'body'
              ? 'bg-bg-hover'
              : undefined
          }`}
        >
          Body Composition
        </button>
      </Link>
      <Link href='/knowledge/body/exercise'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'exercise' ? 'bg-bg-hover' : undefined
          }`}
        >
          Physical Activity & Exercise
        </button>
      </Link>
      <Link href='/knowledge/body/nutrition'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'nutrition' ? 'bg-bg-hover' : undefined
          }`}
          color={activeSegment === 'nutrition' ? undefined : 'gray'}
        >
          Nutrition
        </button>
      </Link>
      <Link href='/knowledge/body/diet'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'diet' ? 'bg-bg-hover' : undefined
          }`}
        >
          Diets
        </button>
      </Link>
    </div>
  );
}
