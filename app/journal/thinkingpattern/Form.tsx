'use client';

import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import { Button } from 'flowbite-react';

export default function Form() {
  return (
    <div className='flex flex-col items-stretch justify-start mt-12 max-w-xl'>
      <h2 className='max-w-lg mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white'>
        Add new thinking patterns anytime you would like to.
      </h2>
      <br />
      <form>
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
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
      <br />
      <form>
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
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
      <br />
      <form>
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
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
      <br />
      <form>
        <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          Oversimplifying
        </h2>
        <Paragraph>Labeling things as good/bad or right/wrong</Paragraph>
        <div className='mb-6 flex gap-8'>
          <textarea
            id='jump-to-conclusions'
            rows={2}
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
      <br />
      <form>
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
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
      <br />
      <form>
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
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
      <br />
      <form>
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
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Add your pattern'
            required
          ></textarea>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
}
