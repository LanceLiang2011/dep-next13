'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Button.Group className='mb-6 flex gap-6'>
      <Link href='/knowledge/de/whatis'>
        <Button
          color={
            !activeSegment || activeSegment === 'whatis' ? undefined : 'gray'
          }
        >
          WHAT IS DISORDERED EATING AND THE CONTINUUM OF EATING{' '}
        </Button>
      </Link>
      <Link href='/knowledge/de/whyandhow'>
        <Button color={activeSegment === 'whyandhow' ? undefined : 'gray'}>
          {' '}
          WHY AND HOW PEOPLE ENGAGE IN DISORDERED EATING
        </Button>
      </Link>
      <Link href='/knowledge/de/when'>
        <Button color={activeSegment === 'when' ? undefined : 'gray'}>
          WHEN DOES DISORDERED EATING BECOME PROBLEMATIC?
        </Button>
      </Link>
      <Link href='/knowledge/de/importance'>
        <Button color={activeSegment === 'importance' ? undefined : 'gray'}>
          THE IMPORTANCE OF UNDERSTANDING DISORDERED EATING
        </Button>
      </Link>
    </Button.Group>
  );
}
