'use client';

import DiaryCard from './DiaryCard';

export default function DiaryList({ diaries, removeDiary }: any) {
  return (
    <div className='flex flex-col flex-wrap gap-5'>
      {diaries.map((diary: any) => (
        <DiaryCard key={diary.id} diary={diary} removeDiary={removeDiary} />
      ))}
    </div>
  );
}
