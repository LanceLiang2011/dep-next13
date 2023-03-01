'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Button.Group className='mb-6 flex gap-6'>
      <Link href='/knowledge/mind/influence'></Link>
      <Link href='/knowledge/mind/situations'>
        <Button color={activeSegment === 'situations' ? undefined : 'gray'}>
          UNDERSTANDING SITUATIONS
        </Button>
      </Link>
      <Link href='/knowledge/mind/thoughts'>
        <Button color={activeSegment === 'thoughts' ? undefined : 'gray'}>
          UNDERSTANDING THOUGHTS
        </Button>
      </Link>
      <Link href='/knowledge/mind/emotions'>
        <Button color={activeSegment === 'emotions' ? undefined : 'gray'}>
          UNDERSTANDING EMOTIONS
        </Button>
      </Link>
      <Link href='/knowledge/mind/behaviours'>
        <Button color={activeSegment === 'behaviours' ? undefined : 'gray'}>
          UNDERSTANDING BEHAVIOURS
        </Button>
      </Link>
    </Button.Group>
  );
}
