'use client';
import { auth, getUserGoalsById } from '@/library/firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoalCard from './GoalCard';

export default function GoalList({ setGoals, goals }: any) {
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    const getUserGoals = async () => {
      const goalsToSet = await getUserGoalsById(user?.uid ?? '');
      setGoals(goalsToSet);
    };
    getUserGoals();
  }, [user, setGoals]);
  return (
    <div className='flex flex-col gap-6 max-w-xl break-words'>
      {goals?.map((goal: any) => (
        <GoalCard key={goal.goalId} goal={goal} setGoals={setGoals} />
      ))}
    </div>
  );
}
