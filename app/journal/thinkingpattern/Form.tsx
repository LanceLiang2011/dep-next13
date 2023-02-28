'use client';

import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import {
  addPatternToUsers,
  auth,
  changeUserPattern,
  deleteUserPattern,
  getPatternOfUser,
} from '@/library/firebase';
import { async } from '@firebase/util';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';

export default function Form() {
  const [user, loading, error] = useAuthState(auth);
  const [userPattern, setUserPattern] = useState({});

  useEffect(() => {
    const getMyPattern = async () => {
      const getPattern = await getPatternOfUser(user?.uid ?? '');
      if (getPattern?.id) setUserPattern(getPattern);
    };
    getMyPattern();
  }, [user]);
  // @ts-ignore
  if (userPattern?.id) return <OldPattern pattern={userPattern} />;
  return <NewForm uid={user?.uid} />;
}

// ? NewForm
function NewForm({ uid }: any) {
  // ? form states
  const [jumping, setJumping] = useState('');
  const [exaggerating, setExaggerating] = useState('');
  const [disregarding, setDisregarding] = useState('');
  const [oversimplifying, setOversimplifying] = useState('');
  const [overgeneralizing, setOvergeneralizing] = useState('');
  const [mindReading, setMindReading] = useState('');
  const [emotional, setEmotional] = useState('');

  const router = useRouter();

  // ? handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPattern = {
      id: crypto.randomUUID(),
      uid,
      jumping,
      exaggerating,
      disregarding,
      oversimplifying,
      overgeneralizing,
      mindReading,
      emotional,
    };

    await addPatternToUsers(uid, newPattern);
    setJumping('');
    setExaggerating('');
    setDisregarding('');
    setOversimplifying('');
    setOvergeneralizing('');
    setMindReading('');
    setEmotional('');
    toast.success('Pattern Added Successfully!');
    router.push('/journal/goalssetup');
  };

  return (
    <div className='flex flex-col items-stretch justify-start mt-12 max-w-xl'>
      <h2 className='max-w-lg mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white'>
        Add new thinking patterns anytime you would like to.
      </h2>
      <br />
      <form onSubmit={handleSubmit}>
        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Jumping to Conclusions{' '}
        </h2>
        <Paragraph>
          Making judgements or decisions without considering all the facts.
        </Paragraph>
        <BackQuote>
          Example: &quot;My partner does not think I am beautiful because they
          did not tell me I am beautiful&quot;
        </BackQuote>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={jumping}
            onChange={(e) => setJumping(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Exaggerating or Minimizing a Situation
        </h2>
        <Paragraph>
          Blowing things out of proportion or disregarding its importance
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={exaggerating}
            onChange={(e) => setExaggerating(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Disregarding Important Aspects of a Situation
        </h2>
        <Paragraph>
          Ignoring other factors and considerations of a single event.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={disregarding}
            onChange={(e) => setDisregarding(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Oversimplifying
        </h2>
        <Paragraph>Labeling things as good/bad or right/wrong</Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={oversimplifying}
            onChange={(e) => setOversimplifying(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Overgeneralizing
        </h2>
        <Paragraph>
          A single incident is seen as a negative event and is a never-ending
          pattern.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={overgeneralizing}
            onChange={(e) => setOvergeneralizing(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Mind reading
        </h2>
        <Paragraph>
          You assume people are thinking negatively of you when there is no
          definite answer.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={mindReading}
            onChange={(e) => setMindReading(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Emotional Reasoning
        </h2>
        <Paragraph>
          You have a feeling and assume there must be a reason.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={emotional}
            onChange={(e) => setEmotional(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>
        <Button type='submit'>Add</Button>
      </form>
    </div>
  );
}

// ! Old Form
function OldPattern({ pattern }: any) {
  const [jumping, setJumping] = useState(pattern.jumping);
  const [exaggerating, setExaggerating] = useState(pattern.exaggerating);
  const [disregarding, setDisregarding] = useState(pattern.disregarding);
  const [oversimplifying, setOversimplifying] = useState(
    pattern.oversimplifying
  );
  const [overgeneralizing, setOvergeneralizing] = useState(
    pattern.overgeneralizing
  );
  const [mindReading, setMindReading] = useState(pattern.mindReading);
  const [emotional, setEmotional] = useState(pattern.emotional);
  const [id, _setId] = useState(pattern.id);
  const [uid, _setUid] = useState(pattern.uid);

  const router = useRouter();

  // ? handler

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPattern = {
      id,
      uid,
      jumping,
      exaggerating,
      disregarding,
      oversimplifying,
      overgeneralizing,
      mindReading,
      emotional,
    };

    await changeUserPattern(uid, id, newPattern);
    setJumping('');
    setExaggerating('');
    setDisregarding('');
    setOversimplifying('');
    setOvergeneralizing('');
    setMindReading('');
    setEmotional('');
    toast.success('Pattern edited Successfully!');
    router.push('/journal/thoughts');
  };

  const handleDelete = async () => {
    await deleteUserPattern(uid, id);
    toast.success('Sucessfully deleted');
    router.push('/journal');
  };
  return (
    <div className='flex flex-col items-stretch justify-start mt-12 max-w-xl'>
      <h2 className='max-w-lg mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white'>
        Here is your thinking pattern. You can edit and change them at any time.
      </h2>
      <br />
      <form onSubmit={handleSubmit}>
        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Jumping to Conclusions{' '}
        </h2>
        <Paragraph>
          Making judgements or decisions without considering all the facts.
        </Paragraph>
        <BackQuote>
          Example: &quot;My partner does not think I am beautiful because they
          did not tell me I am beautiful&quot;
        </BackQuote>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={jumping}
            onChange={(e) => setJumping(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Exaggerating or Minimizing a Situation
        </h2>
        <Paragraph>
          Blowing things out of proportion or disregarding its importance
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={exaggerating}
            onChange={(e) => setExaggerating(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Disregarding Important Aspects of a Situation
        </h2>
        <Paragraph>
          Ignoring other factors and considerations of a single event.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={disregarding}
            onChange={(e) => setDisregarding(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Oversimplifying
        </h2>
        <Paragraph>Labeling things as good/bad or right/wrong</Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={oversimplifying}
            onChange={(e) => setOversimplifying(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Overgeneralizing
        </h2>
        <Paragraph>
          A single incident is seen as a negative event and is a never-ending
          pattern.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={overgeneralizing}
            onChange={(e) => setOvergeneralizing(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Mind reading
        </h2>
        <Paragraph>
          You assume people are thinking negatively of you when there is no
          definite answer.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={mindReading}
            onChange={(e) => setMindReading(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>

        <br />

        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Emotional Reasoning
        </h2>
        <Paragraph>
          You have a feeling and assume there must be a reason.
        </Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            value={emotional}
            onChange={(e) => setEmotional(e.target.value)}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
        </div>
        <div className='flex gap-6'>
          <Button type='submit'>Change Your Pattern</Button>
          <Button onClick={handleDelete} color='failure' type='button'>
            Delette Your Pattern
          </Button>
        </div>
      </form>
    </div>
  );
}
