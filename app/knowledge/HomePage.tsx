import Feature from '@/components/UI/Feature';
import Link from 'next/link';
import React from 'react';
import { BsBookFill, BsFillPatchQuestionFill } from 'react-icons/bs';

import { IoIosBody } from 'react-icons/io';
import { MdSportsHandball, MdFastfood } from 'react-icons/md';
import { FaBrain } from 'react-icons/fa';

export default function HomePage() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            What you need to know about Disordered Eating
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Disordered eating is a term used to describe a range of abnormal
            eating behaviours that do not warrant the diagnosis of an eating
            disorder. To learn more about disordered eating, click on the
            sections below or use the navigation bar on the left.
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <Link href='/knowledge/de/whatis'>
            <Feature
              title='What is Disordered Eating?'
              content="Let's explore the definition of disordered eating and the
              continuum of eating together!"
              icon={<BsBookFill size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/knowledge/de/whyandhow'>
            <Feature
              title='Why and How Do People Engage in Disordered Eating?'
              content="Why and how do people engage in disordered eating? Let's deep dive into this further!"
              icon={<BsFillPatchQuestionFill size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/knowledge/body/body'>
            <Feature
              title='Body Composition'
              content="How is our Body Composed? Let's explore!"
              icon={<IoIosBody size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/knowledge/body/exercise'>
            <Feature
              title='Physical Activity & Exercise'
              content='There are so many different types of exercise out there! What are they and which is
            best for me?'
              icon={<MdSportsHandball size={20} color='#2563eb' />}
            />
          </Link>
          <Link href='/knowledge/body/nutrition'>
            <Feature
              title='Nutrition and Nutrients'
              content="Why do we eat? How should I choose my diet? Let's figure it
            out together!"
              icon={<MdFastfood size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/knowledge/mind/influence'>
            <Feature
              title='How Does Our Mind Influence Our Eating?'
              content='Understand how our emotions, thinking patterns, and life situations all influence the way we eat.'
              icon={<FaBrain size={20} color='#2563eb' />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
