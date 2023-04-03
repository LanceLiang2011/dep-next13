'use client';

import { addGoalToFirestore, auth } from '@/library/firebase';
import { async } from '@firebase/util';
import { Button } from 'flowbite-react';
import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';

export default function GoalForm({ setGoals, fnToCall }: any) {
  // !form states
  const [title, setTitle] = useState('');
  const [specific, setSpecific] = useState('');
  const [measureable, setMeasureable] = useState('');
  const [attainable, setAttainable] = useState('');
  const [realistic, setRealistic] = useState('');
  const [timely, setTimely] = useState('');
  const [user, loading, error] = useAuthState(auth);

  // ? submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const goalToAdd = {
      title,
      specific,
      measureable,
      attainable,
      realistic,
      timely,
      goalId: crypto.randomUUID(),
      uid: user?.uid,
    };
    if (setGoals) {
      setGoals((currentGoals: any) => [goalToAdd, ...currentGoals]);
    }
    if (fnToCall) {
      fnToCall();
    }

    await addGoalToFirestore(user?.uid ?? '', goalToAdd);
    toast.success('Your new goal is successfully added!');
    setTitle('');
    setSpecific('');
    setMeasureable('');
    setAttainable('');
    setRealistic('');
    setTimely('');
  };

  // !retrun
  return (
    <div className='flex'>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Title:
        </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Add your goal title'
          required
        ></input>
        <br />
        <label
          htmlFor='specific'
          className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
        >
          Specific:{' '}
          <span className='text-gray-700 dark:text-gray-200 italic font-thin'>
            &quot;What will be accomplished?&quot;
          </span>
        </label>
        <textarea
          id='specific'
          rows={3}
          value={specific}
          onChange={(e) => setSpecific(e.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Add your Specific goal here'
          required
        ></textarea>
        <br />

        <label
          htmlFor='measureable'
          className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
        >
          Measureable:{' '}
          <span className='text-gray-700 dark:text-gray-200 italic font-thin'>
            &quot;How will you keep track?&quot;
          </span>
        </label>
        <textarea
          id='measureable'
          rows={3}
          value={measureable}
          onChange={(e) => setMeasureable(e.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Add your Measureable goal here'
          required
        ></textarea>
        <br />

        <label
          htmlFor='attainable'
          className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
        >
          Attainable:{' '}
          <span className='text-gray-700 dark:text-gray-200 italic font-thin'>
            &quot;How will you achieve it?&quot;
          </span>
        </label>
        <textarea
          id='attainable'
          rows={3}
          value={attainable}
          onChange={(e) => setAttainable(e.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Add your Attainable goal here'
          required
        ></textarea>
        <br />

        <label
          htmlFor='realistic'
          className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
        >
          Realistic:{' '}
          <span className='text-gray-700 dark:text-gray-200 italic font-thin'>
            &quot;How will this goal help you?&quot;
          </span>
        </label>
        <textarea
          id='realistic'
          rows={3}
          value={realistic}
          onChange={(e) => setRealistic(e.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Add your Realistic goal here'
          required
        ></textarea>
        <br />

        <label
          htmlFor='timely'
          className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
        >
          Timely:{' '}
          <span className='text-gray-700 dark:text-gray-200 italic font-thin'>
            &quot;When will you achieve this goal?&quot;
          </span>
        </label>
        <textarea
          id='timely'
          rows={3}
          value={timely}
          onChange={(e) => setTimely(e.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Add your Timely goal here'
          required
        ></textarea>
        <br />
        <Button className=' bg-subheading hover:bg-button-back' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}
