import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import Link from 'next/link';
import smart from '@/resources/imgs/smart.png';
import React from 'react';
import Image from 'next/image';
import BackQuote from '@/components/Typograpjy/BackQuote';

export default function Intro() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h2'>My Goals</Title>
          <UnderlineSubtitle>
            To monitor your progress and help you stay on track
          </UnderlineSubtitle>
          <br />
          <Paragraph>
            Think about what it is you want to accomplish and where you want to
            get in your journey? Do you want to be more confident in your body?
            Eat more intuitively or remove the stress to exercise constantly?
            Start asking yourself questions and be curious with yourself.
          </Paragraph>
          <Paragraph>
            Once you have some ideas in mind, you are going to transform them
            into SMART goals.
          </Paragraph>
          <br />
          <UnderlineSubtitle className='mb-3'>
            What is a SMART goal?
          </UnderlineSubtitle>
          <Paragraph>
            A SMART goal is framework that is used to help guide goal setting.
            SMART is an acronym that stands for <strong>Specific</strong>,{' '}
            <strong>Measurable</strong>,<strong>Achievable</strong>,{' '}
            <strong>Realistic</strong>, and <strong>Timely</strong>.
          </Paragraph>
          <Paragraph>
            Therefore, a SMART goal incorporates all of these criteria to help
            focus your efforts and increase the chances of achieving your goal.{' '}
          </Paragraph>
          <Image src={smart} alt='smart goals' height={800} width={600} />
          <UnderlineSubtitle>Example:</UnderlineSubtitle>
          <BackQuote>
            Specific: “I want to decrease the amount of time I weigh myself on
            the scale to once a week”
          </BackQuote>
          <BackQuote>
            Measurable: “I will mark in my calendar everytime I weigh myself”
          </BackQuote>
          <BackQuote>
            Attainable: “I will remove my scale from the bathroom to avoid
            temptations”
          </BackQuote>
          <BackQuote>
            Realistic: “I know this is more achievable than not weighing myself
            at all in the short-term and will initiate my healing journey”
          </BackQuote>
          <BackQuote>
            Timely: “I will accomplish this goal by the end of the month”
          </BackQuote>
          <Paragraph>
            It is important to note that goals are specific to each individual
            and their needs/preferences. A SMART goal for one person may look
            very different for another.{' '}
          </Paragraph>
          <Paragraph>Its now time to set some goals! </Paragraph>
          <br />
          <span className='flex justify-between'>
            <Link
              className='font-bold text-blue-400 dark:text-blue-600'
              href='/journal'
            >
              Back
            </Link>
            <Link
              className='font-bold text-blue-400 dark:text-blue-600'
              href='/journal/thinkingpattern'
            >
              Thinking Patterns
            </Link>
          </span>
        </article>
      </div>
    </main>
  );
}
