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
          BODY
        </Button>
      </Link>
      <Link href='/knowledge/body/exercise'>
        <Button color={activeSegment === 'exercise' ? undefined : 'gray'}>
          EXERCISE
        </Button>
      </Link>
      <Link href='/knowledge/body/nutrition'>
        <Button color={activeSegment === 'nutrition' ? undefined : 'gray'}>
          NUTRITION
        </Button>
      </Link>
      <Link href='/knowledge/body/diet'>
        <Button color={activeSegment === 'diet' ? undefined : 'gray'}>
          DIET AND MEDICINE
        </Button>
      </Link>
    </Button.Group>
  );
}
