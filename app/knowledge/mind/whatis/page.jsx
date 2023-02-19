import React from 'react';
import InteractiveImg from './InteractiveImg';
import Whatis from './Whatis';

export default function WhatisPage() {
  return (
    <div className='flex justify-between gap-20'>
      <Whatis />
      <InteractiveImg />
    </div>
  );
}
