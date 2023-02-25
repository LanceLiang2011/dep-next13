'use client';
import Badge from '@/components/Typograpjy/Badge';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import { getDiaryById } from '@/library/firebase';
import { useEffect, useState } from 'react';

export interface Diary {
  title: string;
  tag: string;
  date: string;
  description: string;
}

export default function Diary({ params }: any) {
  const [diary, setDiary] = useState<Diary>({
    title: '',
    tag: '',
    date: '',
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
          <Badge type='green'>{diary.tag}</Badge>
          {'   '}
          <Badge type='default'>{diary.date}</Badge>
          <br />
          <Paragraph>{diary.description}</Paragraph>
        </article>
      </div>
    </main>
  );
}
