import { deleteGoalById } from '@/library/firebase';
import React from 'react';
import { toast } from 'react-hot-toast';

export default function GoalCard({ goal, setGoals }: any) {
  const handleDeleteGoal = () => {
    deleteGoalById(goal.uid, goal.goalId);
    setGoals((currentGoals: any) =>
      currentGoals.filter(
        (currentGoal: any) => currentGoal.goalId != goal.goalId
      )
    );
    toast.success('The goal is deleted!');
  };
  const handlCompleteGoal = () => {
    deleteGoalById(goal.uid, goal.goalId);
    setGoals((currentGoals: any) =>
      currentGoals.filter(
        (currentGoal: any) => currentGoal.goalId != goal.goalId
      )
    );
    toast.success('Congradulations! You successfully complete your goal!');
  };

  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {goal.title}
      </h5>
      <ul>
        <li className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
          Specific: {goal.specific}
        </li>
        <li className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
          Measureable: {goal.measureable}
        </li>
        <li className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
          Attainable: {goal.attainable}
        </li>
        <li className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
          Realistic: {goal.realistic}
        </li>
        <li className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
          Timely: {goal.timely}
        </li>
      </ul>
      <button
        type='button'
        onClick={handleDeleteGoal}
        className='px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
      >
        Delete This Goal
      </button>
      <button
        type='button'
        onClick={handlCompleteGoal}
        className=' ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Complete Goal
      </button>
    </div>
  );
}
