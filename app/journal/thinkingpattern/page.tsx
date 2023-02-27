import React from 'react';
import Form from './Form';
import Intro from './Intro';

export default function ThinkingPattern() {
  return (
    <div className='flex flex-wrap justify-between gap-12'>
      <Intro />
      <Form />
    </div>
  );
}
