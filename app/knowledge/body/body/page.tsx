import React from 'react';
import Body from './Body';
import InteractiveImg from './InteractiveImg';

export default function BodyPage() {
  return (
    <div className='flex flex-wrap justify-between gap-20'>
      <Body />
      <InteractiveImg />
    </div>
  );
}
