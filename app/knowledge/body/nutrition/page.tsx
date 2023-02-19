import React from 'react';
import InteractiveImg from './InteractiveImg';
import Nutrition from './Nutrition';

export default function NutritionPage() {
  return (
    <div className='flex justify-between gap-20'>
      <Nutrition />
      <InteractiveImg />
    </div>
  );
}
