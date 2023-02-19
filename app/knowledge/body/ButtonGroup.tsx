'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  console.log(activeSegment);
  return (
    <Button.Group className='mb-6 flex gap-6'>
      <Link href='/knowledge/body/body'>
        <Button color={activeSegment === 'body' ? undefined : 'gray'}>
          Body
        </Button>
      </Link>
      <Link href='/knowledge/body/exercise'>
        <Button color={activeSegment === 'exercise' ? undefined : 'gray'}>
          Exercise
        </Button>
      </Link>
      <Link href='/knowledge/body/nutrition'>
        <Button color={activeSegment === 'nutrition' ? undefined : 'gray'}>
          Nutrition
        </Button>
      </Link>
    </Button.Group>
  );
}
