import React from 'react';
import InteractiveImg from './InteractiveImg';
import Exercise from './Exercise';

export default function ExercisePage() {
  return (
    <div className='flex justify-between gap-20'>
      <Exercise />
      <InteractiveImg />
    </div>
  );
}
