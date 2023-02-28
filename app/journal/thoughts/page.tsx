'use client';

import Paragraph from '@/components/Typograpjy/Paragraph';
import {
  addThoughtToUser,
  auth,
  getPatternOfUser,
  getThoughtsOfUser,
} from '@/library/firebase';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import ThoughtCard from './ThoughtCard';

export default function MyThoughts() {
  const [addNew, setAddNew] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [userPattern, setUserPattern] = useState({
    id: '',
    disregarding: '',
    emotional: '',
    exaggerating: '',
    jumping: '',
    mindReading: '',
    overgeneralizing: '',
    oversimplifying: '',
    uid: '',
  });
  const [userThoughts, setUserThoughts] = useState([
    {
      id: '',
      uid: '',
      situation: '',
      thought: '',
      belief: '',
      happiness: 50,
      sadness: 50,
      fear: 50,
      disgust: 50,
      anger: 50,
      suprise: 50,
      support: '',
      against: '',
      source: '',
      base: '',
      extreme: '',
      distorting: '',
      context: '',
      jumping: false,
      exaggerating: false,
      disregarding: false,
      oversimplifying: false,
      overgeneralizing: false,
      mindReading: false,
      emotional: false,
      alternative: '',
      beliefAlt: 50,
      rerate: 50,
      feelNow: 50,
      remind: '',
    },
  ]);

  // ! Form control
  const [situation, setSituation] = useState('');
  const [thought, setThought] = useState('');
  const [belief, setBelief] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [sadness, setSadness] = useState(50);
  const [fear, setFear] = useState(50);
  const [disgust, setDisgust] = useState(50);
  const [anger, setAnger] = useState(50);
  const [suprise, setSuprise] = useState(50);
  const [support, setSupport] = useState('');
  const [against, setAgainst] = useState('');
  const [source, setSource] = useState('');
  const [base, setBase] = useState('');
  const [extreme, setExtreme] = useState('');
  const [distorting, setDistorting] = useState('');
  const [context, setContext] = useState('');
  const [jumping, setJumbping] = useState(false);
  const [exaggerating, setExaggerating] = useState(false);
  const [disregarding, setDisregarding] = useState(false);
  const [oversimplifying, setOversimplifying] = useState(false);
  const [overgeneralizing, setOvergeneralizing] = useState(false);
  const [mindReading, setMindReading] = useState(false);
  const [emotional, setEmotional] = useState(false);
  const [alternative, setAlternative] = useState('');
  const [beliefAlt, setBeliefAlt] = useState(50);
  const [rerate, setRerate] = useState(50);
  const [feelNow, setFeelNow] = useState(50);
  const [remind, setRemind] = useState('');

  // ? get data
  useEffect(() => {
    const getMyPattern = async () => {
      const getPattern = await getPatternOfUser(user?.uid ?? '');
      // @ts-ignore
      if (getPattern?.id) setUserPattern(getPattern);
    };
    getMyPattern();
  }, [user]);

  useEffect(() => {
    const getMyThoughts = async () => {
      const thoughts = await getThoughtsOfUser(user?.uid ?? '');
      // @ts-ignore
      setUserThoughts(thoughts);
    };
    getMyThoughts();
  }, [user]);

  // ?handler
  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newThought = {
      uid: user?.uid,
      id: crypto.randomUUID(),
      situation,
      thought,
      belief,
      happiness,
      sadness,
      fear,
      disgust,
      anger,
      suprise,
      support,
      against,
      source,
      base,
      extreme,
      distorting,
      context,
      jumping,
      exaggerating,
      disregarding,
      oversimplifying,
      overgeneralizing,
      mindReading,
      emotional,
      alternative,
      beliefAlt,
      rerate,
      feelNow,
      remind,
    };
    await addThoughtToUser(user?.uid ?? '', newThought);
    // @ts-ignore
    setUserThoughts((current) => [newThought, ...current]);
    toast.success('New Thought Successfully Added');
    setAddNew(false);
    setSituation('');
    setThought('');
    setBelief(50);
    setHappiness(50);
    setSadness(50);
    setFear(50);
    setDisgust(50);
    setAnger(50);
    setSuprise(50);
    setSupport('');
    setAgainst('');
    setSource('');
    setBase('');
    setExtreme('');
    setDistorting('');
    setContext('');
    setJumbping(false);
    setExaggerating(false);
    setDisregarding(false);
    setOversimplifying(false);
    setOvergeneralizing(false);
    setMindReading(false);
    setEmotional(false);
    setAlternative('');
    setBeliefAlt(50);
    setRerate(50);
    setFeelNow(50);
    setRemind('');
  };

  if (!userPattern.id) {
    return (
      <div>
        <p className='text-2xl mb-6 text-gray-700 dark:text-gray-300 font-bold'>
          You need to set your thinking patterns to add your new thoughs. Please
          click the button below to set your thinking pattern.
        </p>
        <Link href='/journal/thinkingpattern'>
          <Button>Set my pattern</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='w-full px-8 sm:px-12 lg:px-16 xl:px-40'>
      <Button
        className='my-12'
        onClick={(e) => setAddNew((current) => !current)}
      >
        {addNew ? 'Check Your Thoughts' : 'Add New Thought'}
      </Button>
      {/* Form */}
      {addNew && (
        <form onSubmit={formSubmitHandler}>
          <div className='mb-6'>
            <label
              htmlFor='situation'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              <p className='text-lg font-bold'>Situation</p>
              <p className='text-gray-700 dark:text-gray-200'>
                Describe the event, thought, or belief that led to the
                unpleasant emotion(s).
              </p>
            </label>
            <input
              type='text'
              id='situation'
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Enter text here'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='thought'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              <p className='text-lg font-bold'>Thought</p>
              <p className='text-gray-700 dark:text-gray-200'>
                What thought are you having related to the situation?
              </p>
            </label>
            <input
              type='text'
              id='thought'
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Enter text here'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='belief'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              How much do you believe this thought? ({belief})
            </label>
            <input
              id='belief'
              type='range'
              value={Number(belief)}
              onChange={(e) => setBelief(Number(e.target.value))}
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
            />
          </div>
          <div className='mb-6'>
            <p className='text-lg font-bold text-gray-900 dark:text-white'>
              Emotion
            </p>
            <p className='text-gray-700 dark:text-gray-200 mb-5'>
              How is this thought making you feel? Rate each emotion from 0-100%
            </p>
            <div className='mb-3'>
              <label
                htmlFor='happiness'
                className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
              >
                Happiness ({happiness})
              </label>
              <input
                id='happiness'
                type='range'
                value={Number(happiness)}
                onChange={(e) => setHappiness(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='sadness'
                className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
              >
                Sadness ({sadness})
              </label>
              <input
                id='sadness'
                type='range'
                value={Number(sadness)}
                onChange={(e) => setSadness(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='fear'
                className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
              >
                Fear ({fear})
              </label>
              <input
                id='fear'
                type='range'
                value={Number(fear)}
                onChange={(e) => setFear(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='disgust'
                className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
              >
                Disgust ({disgust})
              </label>
              <input
                id='disgust'
                type='range'
                value={Number(disgust)}
                onChange={(e) => setDisgust(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='anger'
                className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
              >
                Anger ({anger})
              </label>
              <input
                id='anger'
                type='range'
                value={Number(anger)}
                onChange={(e) => setAnger(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='suprise'
                className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
              >
                Surprise ({suprise})
              </label>
              <input
                id='suprise'
                type='range'
                value={Number(suprise)}
                onChange={(e) => setSuprise(Number(e.target.value))}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
            </div>
          </div>
          <div className='mb-6'>
            <p className='text-lg mb-4 font-bold text-gray-900 dark:text-white'>
              Challenging the Thought
            </p>
            <div className='mb-3'>
              <label
                htmlFor='support'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                What evidence do you have to{' '}
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  support
                </span>{' '}
                it?
              </label>
              <textarea
                id='support'
                rows={2}
                value={support}
                onChange={(e) => setSupport(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Write your evidence here...'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='against'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                What evidence do you have to{' '}
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  against
                </span>{' '}
                it?
              </label>
              <textarea
                id='against'
                rows={2}
                value={against}
                onChange={(e) => setAgainst(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Write your evidence here...'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='source'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Where did this thought come from? Is the source of information
                dependable?
              </label>
              <textarea
                id='source'
                rows={2}
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Write your source here...'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='base'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Is this thought based on feelings or facts?
              </label>
              <textarea
                id='base'
                rows={2}
                value={base}
                onChange={(e) => setBase(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='A fact is an observable (to others also) provable action or thing.'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='extreme'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Does the thought include words or phrases that are extreme or
                exaggerated?
              </label>
              <textarea
                id='extreme'
                rows={2}
                value={extreme}
                onChange={(e) => setExtreme(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='(i.e., always, forever, never, need, should, must, can not, and every time)'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='distorting'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Are your interpretations of the situation too far removed from
                reality to be accurate?
              </label>
              <textarea
                id='distorting'
                rows={2}
                value={distorting}
                onChange={(e) => setDistorting(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Here you are being asked whether you are distorting what happened.'
              ></textarea>
            </div>
            <div className='mb-3'>
              <label
                htmlFor='context'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Are you taking it out of context?
              </label>
              <textarea
                id='context'
                rows={2}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Are you making a judgment without considering all the information and factors involved?'
              ></textarea>
            </div>
            <div className='mb-6'>
              <p className='text-lg mb-4 font-bold text-gray-900 dark:text-white'>
                Problematic Patterns
              </p>
              <div className='mb-3'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Patterns
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        My Patterns
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Does this thought align?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Jumping to Conclusions
                        </span>{' '}
                        (when evidence is lacking or contradictory)
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.jumping}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={jumping}
                            onChange={(e) => setJumbping((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {jumping ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Exaggerating or Minimizing a situation
                        </span>{' '}
                        (blowing things out of proportion or disregarding its
                        importance)
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.exaggerating}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={exaggerating}
                            onChange={(e) => setExaggerating((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {exaggerating ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Disregarding important aspects of a situation
                        </span>
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.disregarding}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={disregarding}
                            onChange={(e) => setDisregarding((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {disregarding ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Oversimplifying
                        </span>{' '}
                        (labeling things as good/bad or right/wrong)
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.oversimplifying}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={oversimplifying}
                            onChange={(e) => setOversimplifying((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {oversimplifying ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Overgeneralizing
                        </span>{' '}
                        (a single incident is seen as a negative event and is a
                        never-ending pattern)
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.overgeneralizing}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={overgeneralizing}
                            onChange={(e) => setOvergeneralizing((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {overgeneralizing ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Mind reading
                        </span>{' '}
                        (you assume people are thinking negatively of you when
                        there is no definite answer)
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.mindReading}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={mindReading}
                            onChange={(e) => setMindReading((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {mindReading ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <td className='px-6 py-4'>
                        <span className='text-gray-700 dark:text-gray-300 font-bold'>
                          Emotional Reasoning
                        </span>{' '}
                        (you have a feeling and assume there must be a reason)
                      </td>
                      <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
                        {userPattern.emotional}
                      </td>
                      <td>
                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={emotional}
                            onChange={(e) => setEmotional((cur) => !cur)}
                            className='peer sr-only'
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            {emotional ? 'Yes' : 'No'}
                          </span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mb-6'>
              <p className='text-lg mb-4 font-bold text-gray-900 dark:text-white'>
                Create an Alternative Thought
              </p>
              <div className='mb-3'>
                <label
                  htmlFor='context'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  What else can I say instead of the thought? How else can I
                  interpret the event instead of this thought?
                </label>
                <textarea
                  id='context'
                  rows={2}
                  value={alternative}
                  onChange={(e) => setAlternative(e.target.value)}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter text here'
                ></textarea>
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='alternative'
                  className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
                >
                  How much do you believe the alternative thought? ({beliefAlt})
                </label>
                <input
                  id='alternative'
                  type='range'
                  value={Number(beliefAlt)}
                  onChange={(e) => setBeliefAlt(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                />
              </div>
            </div>
            <div className='mb-6'>
              <p className='text-lg mb-4 font-bold text-gray-900 dark:text-white'>
                Re-Rate the Original Thought
              </p>
              <div className='mb-3'>
                <label
                  htmlFor='original'
                  className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Re-rate how much do you believe the original thought? (
                  {rerate})
                </label>
                <input
                  id='original'
                  type='range'
                  value={Number(rerate)}
                  onChange={(e) => setRerate(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                />
              </div>
            </div>
            <div className='mb-6'>
              <p className='text-lg mb-4 font-bold text-gray-900 dark:text-white'>
                Now how do you feel?
              </p>
              <div className='mb-3'>
                <label
                  htmlFor='feel-alter'
                  className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Rate how you feel after this exercise. ({feelNow})
                </label>
                <input
                  id='feel-alter'
                  type='range'
                  value={Number(feelNow)}
                  onChange={(e) => setFeelNow(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='reminder'
                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
              >
                Would you like to be reminded of this alternative thought?
              </label>
              <select
                id='reminder'
                value={remind}
                onChange={(e) => setRemind(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a Reminding Frequency</option>
                <option selected={remind === 'never'} value='never'>
                  Never
                </option>
                <option selected={remind === 'weekly'} value='weekly'>
                  Weekly
                </option>
                <option selected={remind === 'monthly'} value='monthly'>
                  Monthly
                </option>
              </select>
            </div>
          </div>
          <Button type='submit' className='my-8'>
            Submit
          </Button>
        </form>
      )}
      {/* list */}
      {!addNew && (
        <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
          {userThoughts.length === 0 && (
            <Paragraph>
              You havn&apos;t added any thought yet. Please click the button
              above to add your first thougt.{' '}
            </Paragraph>
          )}
          <>
            {userThoughts?.map((thought) => (
              <ThoughtCard
                key={thought.id}
                thought={thought}
                setUserThoughts={setUserThoughts}
              />
            ))}
          </>
        </div>
      )}
    </div>
  );
}
