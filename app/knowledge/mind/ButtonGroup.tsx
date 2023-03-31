'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <div className='mb-6 flex gap-6'>
      <Link href='/knowledge/mind/influence'></Link>
      <Link href='/knowledge/mind/situations'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'situations' ? 'bg-bg-hover' : undefined
          }`}
        >
          Understanding Situations
        </button>
      </Link>
      <Link href='/knowledge/mind/thoughts'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'thoughts' ? 'bg-bg-hover' : undefined
          }`}
        >
          Understanding Thoughts
        </button>
      </Link>
      <Link href='/knowledge/mind/emotions'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'emotions' ? 'bg-bg-hover' : undefined
          }`}
        >
          Understanding Emotions
        </button>
      </Link>
      <Link href='/knowledge/mind/behaviours'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'behaviours' ? 'bg-bg-hover' : undefined
          }`}
        >
          Understanding Behaviours
        </button>
      </Link>
    </div>
  );
}
