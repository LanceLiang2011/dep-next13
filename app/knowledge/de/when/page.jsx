import React from 'react';
import InteractiveImg from './InteractiveImg';
import When from './When';

export default function WhenPage() {
  return (
    <div className='flex flex-wrap justify-between gap-20'>
      <When />
      <InteractiveImg />
    </div>
  );
}
