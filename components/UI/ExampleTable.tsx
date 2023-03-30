import React from 'react';

export default function ExampleTable({
  examples,
}: {
  examples: { title: string; example: string }[];
}) {
  return (
    <div className='flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'>
      {examples.map(({ title, example }) => (
        <span key={title} className='px-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
          <p className='font-bold text-gray-700 dark:text-gray-400'>
            {example}
          </p>
        </span>
      ))}
    </div>
  );
}
