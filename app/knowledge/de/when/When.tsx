import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import React from 'react';

export default function When() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            When Does Disordered Eating Become Problematic?
          </Title>
          <br />
          <Paragraph>
            Since disordered eating is considered the space between normal
            eating and an eating disorder, it can be difficult to quantify the
            impact disordered eating can have on an individual&apos;s life, and
            when it can become problematic.
          </Paragraph>
          <Paragraph>
            There have been several scales and measurements to try to
            scientifically quantify disordered eating, yet, there is not one
            that is the main measurement tool (like how the DSM-5 is for eating
            disorders). Additionally, disordered eating is very individualized,
            making it even more difficult to quantify. Therefore, a way to
            quantify the effects of a symptom is by understanding:{' '}
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Symptom frequency
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Symptom intensity
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Length of symptom engagement
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Life stressors (death, divorces, relationship changes, changes in
              careers, school, job)
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Impact on daily function
            </li>
          </ul>
          <br />
          <Paragraph>
            To understand how a symptom is impacting an individual&apos;s life,
            there are two questions one can ask themself:{' '}
          </Paragraph>
          <BackQuote>
            Is the symptom that you are engaging in causing significant
            disruption in your life in any capacity?
          </BackQuote>
          <div
            className='flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
            role='alert'
          >
            <svg
              aria-hidden='true'
              className='flex-shrink-0 inline w-5 h-5 mr-3'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Info</span>
            <div>
              Typically people will not see disordered eating behaviours as a
              problem or as having a negative influence/impact on their life.
            </div>
          </div>
          <div
            className='flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
            role='alert'
          >
            <svg
              aria-hidden='true'
              className='flex-shrink-0 inline w-5 h-5 mr-3'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Info</span>
            <div>
              This question also may vary in importance based on symptoms. For
              example, someone might have bizarre food fears, yet, it is not
              causing significant disruption in their life.
            </div>
          </div>
          <BackQuote>Can you stop engaging in this manner?</BackQuote>
          <div
            className='flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
            role='alert'
          >
            <svg
              aria-hidden='true'
              className='flex-shrink-0 inline w-5 h-5 mr-3'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Info</span>
            <div>
              If someone cannot stop engaging in a behaviour/symptom, it is a
              much larger issue at hand.
            </div>
          </div>
          <br />
          <a
            href='#'
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Top
            <span className='sr-only'>Icon description</span>
          </a>
        </article>
      </div>
    </main>
  );
}
