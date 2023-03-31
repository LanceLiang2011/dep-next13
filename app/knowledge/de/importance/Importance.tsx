import InfoQuote from '@/components/Typograpjy/InfoQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineTooltip from '@/components/UI/UnderlineTooltip';
import React from 'react';

export default function Importance() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            Significance of Understanding Disordered Eating
          </Title>
          <br />
          <Paragraph>
            Disordered eating can have significant long-term health
            repercussions that can affect an individual physically and mentally.
            Individuals who suffer from disordered eating can be at risk for:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              The development of an eating disorder
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
              Poor daily function
            </li>
          </ul>
          <br />
          <InfoQuote>
            It is important to recognize the potential complications of
            disordered eating before prospective problems could escalate. How we
            eat and feel about our body is critical for our health and
            well-being, therefore it is essential to use tools and resources to
            improve one&apos;s relationship with food, and one&apos;s body.
          </InfoQuote>
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
