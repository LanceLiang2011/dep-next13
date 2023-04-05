'use client';
import { auth, getUserGoalsById } from '@/library/firebase';
import { Button, Spinner } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoalCard from './GoalCard';

export default function GoalList({ setGoals, goals }: any) {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const getUserGoals = async () => {
      setIsLoading(true);
      const goalsToSet = await getUserGoalsById(user?.uid ?? '');
      setGoals(goalsToSet);
      setIsLoading(false);
      if (goalsToSet.length === 0) router.push('/journal/goalssetup');
    };
    getUserGoals();
  }, [user, setGoals, router]);

  return (
    <div className='flex flex-col gap-6 max-w-xl break-words'>
      {!isLoading &&
        goals?.map((goal: any) => (
          <GoalCard key={goal.goalId} goal={goal} setGoals={setGoals} />
        ))}
      {isLoading && <Spinner aria-label='Waiting for data' size='xl' />}
    </div>
  );
}
