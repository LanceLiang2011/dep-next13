import React from 'react';
import InteractiveImg from './InteractiveImg';
import Whatis from './Whatis';

export default function WhatisPage() {
  return (
    <div className='flex flex-wrap justify-between gap-20'>
      <Whatis />
      <InteractiveImg />
    </div>
  );
}
