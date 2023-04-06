import React from 'react';

export default function TestAlert() {
  return (
    <div
      className=' mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
      role='alert'
    >
      <span className='font-medium'>Data Security alert:</span> This wep-app is
      in testing stage. Please do not store sensitive data in your journal.
    </div>
  );
}
