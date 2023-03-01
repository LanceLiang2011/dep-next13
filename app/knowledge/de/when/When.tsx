import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import React from 'react';

export default function When() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              When
            </span>{' '}
            Does Disordered Eating Become Problematic?
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
          <ol className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Is the symptom that you are engaging in causing significant
              disruption in your life in any capacity? <br />→ Typically people
              will not see disordered eating behaviours as a problem or as
              having a negative influence/impact on their life. <br />→ This
              question also may vary in importance based on symptoms. For
              example, someone might have bizarre food fears, yet, it is not
              causing significant disruption in their life.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Can you stop engaging in this manner? <br />→ If someone cannot
              stop engaging in a behaviour/symptom, it is a much larger issue at
              hand.
            </li>
          </ol>
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
