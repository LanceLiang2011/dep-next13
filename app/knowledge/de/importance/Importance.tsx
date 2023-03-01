import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import UnderlineTooltip from '@/components/UI/UnderlineTooltip';
import React from 'react';

export default function Importance() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            The Importance of Understanding Disordered Eating
          </Title>
          <br />
          <Title type='h3'>Importance of Understanding & Taking Action </Title>
          <Paragraph>
            Disordered eating can have significant long-term health
            repercussions that can affect individuals physically and mentally.
            Individuals who suffer from disordered eating can be at risk for:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              The development of eating disorders
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <UnderlineTooltip content='A mood disorder is a mental health class that health professionals use to broadly describe all types of depression and bipolar disorders.'>
                Mood disorders
              </UnderlineTooltip>
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Other conditions including hypertension, diabetes, heart problems,
              and digestive issues.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Impact on daily function
            </li>
          </ul>
          <br />
          <div
            className='flex p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
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
              It is important to recognize the potential complications of
              disordered eating before prospective problems could escalate. How
              we eat and feel about our body is critical for our health and
              well-being, therefore it is essential to use tools and resources
              to improve our relationship with food, our body, and our mind.
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
