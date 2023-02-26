import Paragraph from '@/components/Typograpjy/Paragraph';
import Link from 'next/link';
import React from 'react';
import GoalForm from '../GoalForm';

export default function Form() {
  return (
    <div className='flex flex-col items-stretch justify-start mt-16'>
      <h2 className='max-w-lg mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white'>
        It&apos;s time to set some goals!
      </h2>
      <GoalForm />
      <br />
      <Paragraph className='max-w-lg'>
        After completing your goal, you can visit the{' '}
        <Link className='font-bold text-blue-600' href='/journal/goals'>
          Goal section
        </Link>{' '}
        to check your goals or add more goals!
      </Paragraph>
    </div>
  );
}
