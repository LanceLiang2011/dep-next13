'use client';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Link from 'next/link';
import React, { useState } from 'react';
import GoalForm from '../GoalForm';

export default function Form() {
  const [goals, setGoals] = useState(0);
  const addAGoal = () => {
    setGoals((current) => current + 1);
  };
  return (
    <div className='flex flex-col items-stretch justify-start mt-16'>
      <h2 className='max-w-lg mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white'>
        It&apos;s time to set some goals!
      </h2>
      <br />
      <Paragraph>
        You have set <span className='text-blue-700 font-bold'>{goals}</span>{' '}
        goals
      </Paragraph>
      <GoalForm fnToCall={addAGoal} />
      <br />
      {goals < 3 && (
        <Paragraph className='max-w-lg'>
          You need to set{' '}
          <span className='text-blue-700 font-bold'>{3 - goals}</span> more
          goals{' '}
        </Paragraph>
      )}
      {goals >= 3 && (
        <Paragraph className='max-w-lg'>
          After completing your goal, you can visit the{' '}
          <Link className='font-bold text-blue-600' href='/journal/goals'>
            Goal section
          </Link>{' '}
          to check your goals or add more goals!
        </Paragraph>
      )}
    </div>
  );
}
