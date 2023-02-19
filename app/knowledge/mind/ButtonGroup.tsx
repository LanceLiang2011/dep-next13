'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Button.Group className='mb-6 flex gap-6'>
      <Link href='/knowledge/mind/whatis'>
        <Button>What is Disordered Eating</Button>
      </Link>
      <Link href='/knowledge/mind'>
        <Button color='gray'>Topic 2</Button>
      </Link>
      <Link href='/knowledge/mind'>
        <Button color='gray'>Topic 3</Button>
      </Link>
    </Button.Group>
  );
}
