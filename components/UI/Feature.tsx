import React from 'react';

export default function Feature({ title, content, icon }: any) {
  return (
    <div className='hover:bg-slate-200 p-3 rounded-lg'>
      <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
        {icon}
      </div>
      <h3 className='mb-2 text-xl font-bold dark:text-white'>{title}</h3>
      <p className='text-gray-500 dark:text-gray-400'>{content}</p>
    </div>
  );
}
