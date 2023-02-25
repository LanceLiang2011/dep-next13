'use client';
import { addDiaryToFirestore, auth } from '@/library/firebase';
import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';

export default function DiaryForm({ setDiaries }: any) {
  // !form states
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [user, loading, error] = useAuthState(auth);

  // ? handlers

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDiary = {
      title,
      tag,
      description,
      uid: user?.uid,
      date: new Date().toDateString(),
      id: crypto.randomUUID(),
    };

    setDiaries((currentState: any) => [newDiary, ...currentState]);
    await addDiaryToFirestore(newDiary);
    toast.success('Diary Added!');
    setTitle('');
    setTag('');
    setDescription('');
  };

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-2 text-xl font-bold text-gray-900 dark:text-white'>
          Write a new diary
        </h2>
        <p className='mb-6 font-semibold text-gray-500 dark:text-gray-400'>
          {new Date().toDateString()}
        </p>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='sm:col-span-2'>
              <label
                htmlFor='title'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Title
              </label>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Title of the diary'
                minLength={1}
                maxLength={30}
                required
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='tag'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Tag
              </label>
              <input
                type='text'
                name='tag'
                id='tag'
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Add tag for diary filtering.'
                maxLength={15}
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Description
              </label>
              <textarea
                id='description'
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Your description here'
              ></textarea>
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900 hover:bg-primary-800'
          >
            Add Diary
          </button>
        </form>
      </div>
    </section>
  );
}
