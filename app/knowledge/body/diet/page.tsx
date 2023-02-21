import React from 'react';
import InteractiveImg from './InteractiveImg';
import Diet from './Diet';

export default function NutritionPage() {
  return (
    <div className='flex flex-wrap justify-between gap-20'>
      <Diet />
      <InteractiveImg />
    </div>
  );
}
