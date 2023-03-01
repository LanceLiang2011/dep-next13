import React from 'react';
import InteractiveImg from './InteractiveImg';
import Exercise from './Exercise';

export default function ExercisePage() {
  return (
    <div className='flex flex-wrap justify-between gap-20'>
      <Exercise />
    </div>
  );
}
