import React from 'react';
import Form from './Form';
import Intro from './Intro';

export default function GoalSetup() {
  return (
    <div className='flex flex-wrap justify-between gap-20'>
      <Intro />
      <Form />
    </div>
  );
}
