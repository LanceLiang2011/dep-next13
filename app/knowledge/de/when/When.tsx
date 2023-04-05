import BackQuote from '@/components/Typograpjy/BackQuote';
import InfoQuote from '@/components/Typograpjy/InfoQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import TopButton from '@/components/UI/TopButton';
import React from 'react';

export default function When() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Identifying Problematic Disordered Eating</Title>
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
              Symptom impact on daily function
            </li>
          </ul>
          <br />
          <Paragraph>
            To understand how a symptom is impacting an individual&apos;s life,
            there are two questions one can ask themself:{' '}
          </Paragraph>
          <BackQuote>
            1. Is the symptom that you are engaging in causing significant
            disruption in your life in any capacity?
          </BackQuote>
          <InfoQuote>
            Typically people will not see disordered eating behaviours as a
            problem or as having a negative influence/impact on their life.
          </InfoQuote>
          <InfoQuote>
            This question also may vary in importance based on symptoms. For
            example, someone might have bizarre food fears, yet, does not cause
            significant disruption in their life.
          </InfoQuote>
          <br />
          <BackQuote>2. Can you stop engaging in this manner?</BackQuote>
          <InfoQuote>
            If someone cannot stop engaging in a behaviour/symptom, it is a much
            larger issue at hand.
          </InfoQuote>
          <br />
          <TopButton next='knowledge/de/importance' />
        </article>
      </div>
    </main>
  );
}
