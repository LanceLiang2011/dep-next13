'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function ButtonGroup() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <div className='mb-6 flex gap-6'>
      <Link href='/knowledge/de/whatis'>
        <button
          className={`button-blue-sm ${
            !activeSegment || activeSegment === 'whatis'
              ? 'bg-bg-hover'
              : undefined
          }`}
        >
          Understanding Disordered Eating{' '}
        </button>
      </Link>
      <Link href='/knowledge/de/whyandhow'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'whyandhow' ? 'bg-bg-hover' : undefined
          }`}
        >
          Causes & Mechanisms of Disordered Eating
        </button>
      </Link>
      <Link href='/knowledge/de/when'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'when' ? 'bg-bg-hover' : undefined
          }`}
        >
          Identifying Problematic Disordered Eating
        </button>
      </Link>
      <Link href='/knowledge/de/importance'>
        <button
          className={`button-blue-sm ${
            activeSegment === 'importance' ? 'bg-bg-hover' : undefined
          }`}
        >
          Significance of Understanding Disordered Eating
        </button>
      </Link>
    </div>
  );
}
