'use client';
import { auth, deleteDiary, getDiaryEntriesForUser } from '@/library/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import DiaryForm from './DiaryForm';
import DiaryList from './DiaryList';

export default function Diary() {
  const [diaries, setDiaries] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const getUserDiaryData = async () => {
      const diariesFromFirebase = await getDiaryEntriesForUser(user?.uid ?? '');
      setDiaries(diariesFromFirebase);
    };
    getUserDiaryData();
  }, [user]);

  const removeDiary = async (diaryId: string) => {
    setDiaries((currentState: any) => {
      return currentState.filter((diary: any) => diary.id !== diaryId);
    });
    await deleteDiary(diaryId);
    toast.success('Successfully removed!');
  };
  return (
    <div className='flex justify-between gap-20 flex-wrap'>
      <DiaryForm setDiaries={setDiaries} />
      <DiaryList diaries={diaries} removeDiary={removeDiary} />
    </div>
  );
}
