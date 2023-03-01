'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Button.Group className='mb-6 flex gap-6'>
      <Link href='/knowledge/body/body'>
        <Button
          color={
            !activeSegment || activeSegment === 'body' ? undefined : 'gray'
          }
        >
          BODY COMPOSITION
        </Button>
      </Link>
      <Link href='/knowledge/body/exercise'>
        <Button color={activeSegment === 'exercise' ? undefined : 'gray'}>
          PHYSICAL ACTIVITY AND EXERCISE
        </Button>
      </Link>
      <Link href='/knowledge/body/nutrition'>
        <Button color={activeSegment === 'nutrition' ? undefined : 'gray'}>
          NUTRITION
        </Button>
      </Link>
      <Link href='/knowledge/body/diet'>
        <Button color={activeSegment === 'diet' ? undefined : 'gray'}>
          NUTRITION AND MEDICINE
        </Button>
      </Link>
    </Button.Group>
  );
}
