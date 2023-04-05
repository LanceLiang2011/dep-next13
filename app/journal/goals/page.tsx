'use client';
import { useState } from 'react';
import GoalFormSection from './GoalFormSection';
import GoalList from './GoalList';

export default function MyGoals() {
  const [goals, setGoals] = useState([]);

  return (
    <div className='flex gap-20 flex-wrap'>
      <GoalList goals={goals} setGoals={setGoals} />
      <GoalFormSection setGoals={setGoals} />
    </div>
  );
}
