import GoalForm from '../GoalForm';

export default function GoalFormSection({ setGoals }: any) {
  return (
    <div className='sm:ml-4 lg:ml-8 ml-12'>
      <GoalForm setGoals={setGoals} />
    </div>
  );
}
