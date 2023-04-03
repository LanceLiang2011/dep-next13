import React from 'react';

export default function ExampleTable({
  examples,
}: {
  examples: { title: string; example: string }[];
}) {
  return (
    <div className='flex p-4 mb-4 text-sm text-heading rounded-lg bg-button-back dark:bg-gray-800 dark:text-blue-400'>
      {examples.map(({ title, example }) => (
        <span key={title} className='px-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-heading dark:text-white'>
            {title}
          </h5>
          <p className='font-bold text-body dark:text-gray-400'>{example}</p>
        </span>
      ))}
    </div>
  );
}
