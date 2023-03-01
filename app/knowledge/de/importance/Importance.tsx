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
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              Then Importance
            </span>{' '}
            of Understanding Disordered Eating
          </Title>
          <br />
          <UnderlineSubtitle>
            Importance of Understanding & Taking Action{' '}
          </UnderlineSubtitle>
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
              Life stressors (death, divorces, relationship changes, changes in
              careers, school, job)
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Impact on daily function
            </li>
          </ul>
          <br />
          <Paragraph>
            It is important to recognize the potential complications of
            disordered eating before prospective problems could escalate. How we
            eat and feel about our body is critical for our health and
            well-being, therefore it is essential to use tools and resources to
            improve our relationship with food, our body, and our mind.
          </Paragraph>
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
