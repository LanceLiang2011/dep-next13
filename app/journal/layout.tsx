'use client';
import Sidebar from './JournalSidebar';
import { auth } from '@/library/firebase';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return;
  if (!user)
    return (
      <div className='flex flex-col items-center max-w-2xl mx-auto my-36 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          You need to Log in to use Journal
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          Please click the button to Log In
        </p>
        <Link href='/login'>
          <button
            type='button'
            className='mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            Login Page
          </button>
        </Link>
      </div>
    );

  return (
    <div className=' flex gap-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <Sidebar />
      <div className='flex justify-center'>{children}</div>
    </div>
  );
}
