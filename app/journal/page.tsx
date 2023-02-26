'use client';

import Feature from '@/components/UI/Feature';
import Link from 'next/link';
import { TfiThought } from 'react-icons/tfi';
import { FiTarget } from 'react-icons/fi';

export default function Journal() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            My Journal
          </h2>
          <p className='mb-4 text-gray-600 sm:text-xl dark:text-gray-400'>
            Welcome!{' '}
            <span className='underline underline-offset-2 decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              My Journal
            </span>{' '}
            is your place to privately document and record your thoughts,
            actions and emotions to improve your mind and body. Through an
            interactive experience, My Journal will guide you through a series
            of daily and weekly practices that can be adapted into your everyday
            lifestyle.
          </p>
          <p className='mb-4 text-gray-600 sm:text-xl dark:text-gray-400'>
            You can also use diaries as a safe place to input anything on your
            mind, document your feelings, thoughts and emotions.
          </p>
          <p className='text-gray-600 sm:text-xl dark:text-gray-400'>
            Before we get to work, let&apos;s set up your journal to customize
            your experience in a way that works best for you. Now, you can click
            sections below to start{' '}
            <Link href='/journal/thinkingpattern'>
              <strong className='text-blue-600 dark:text-blue-400'>
                setting up your journal!
              </strong>
            </Link>
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <Link href='/journal/thinkingpattern'>
            <Feature
              title='My Thinking Patterns'
              content='Setting up thinking patterns to help you manage and track your thoughts!!'
              icon={<TfiThought size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/journal/goalssetup'>
            <Feature
              title='My Goals'
              content='Setting up your goals to monitor your progress and help you stay on track
              .'
              icon={<FiTarget size={20} color='#2563eb' />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
