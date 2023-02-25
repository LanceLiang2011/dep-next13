import Badge from '@/components/Typograpjy/Badge';
import Link from 'next/link';

export default function DiaryCard({ diary, removeDiary }: any) {
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {diary.title}
        </h5>
      </a>
      <p>
        <Badge type='green'>Tag: {diary.tag}</Badge>
        <Badge type='default'>Date: {diary.date}</Badge>
      </p>
      <p className='my-3 font-normal text-gray-700 dark:text-gray-400'>
        {diary.description.slice(0, 120)}
        {diary.description.length > 120 && '...'}
      </p>
      <div className='flex gap-5'>
        <Link
          href={`/journal/diary/${diary.id}`}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Read more
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </Link>
        <button
          onClick={() => {
            removeDiary(diary.id);
          }}
          type='button'
          className='text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
        >
          <svg
            className='mr-1 -ml-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
