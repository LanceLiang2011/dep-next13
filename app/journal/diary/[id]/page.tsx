'use client';
import Badge from '@/components/Typograpjy/Badge';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import { convertTimestamp, getDiaryById } from '@/library/firebase';
import { Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface Diary {
  title: string;
  tag: string;
  date: Timestamp;
  description: string;
}

export default function Diary({ params }: any) {
  const [diary, setDiary] = useState<Diary>({
    title: '',
    tag: '',
    date: Timestamp.now(),
    description: '',
  });
  useEffect(() => {
    const getDiary = async () => {
      const diaryFromFire = await getDiaryById(params.id);
      setDiary(diaryFromFire);
    };
    getDiary();
  }, [params]);
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h2'>{diary.title}</Title>
          {!diary && (
            <Title>
              The dairy is on the way storing to the database. Please refresh
              the page later.
            </Title>
          )}
          <Badge type='green'>{diary.tag}</Badge>
          {'   '}
          <Badge type='default'>{convertTimestamp(diary.date)}</Badge>
          <br />
          <Paragraph>{diary.description}</Paragraph>
          <br />
          <Link href='/journal/diary'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Back
            </button>
          </Link>
        </article>
      </div>
    </main>
  );
}
