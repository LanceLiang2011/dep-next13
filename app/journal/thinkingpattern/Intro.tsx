import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import Link from 'next/link';
import React from 'react';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';

export default function Intro() {
  return (
    <main className='pt-8 pb-16 pr-8 lg:pr-2 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h2'>My Thinking Patterns</Title>
          <UnderlineSubtitle>
            To help you manage and track your thoughts!
          </UnderlineSubtitle>
          <Paragraph>
            Problematic thinking patterns are defined as inaccurate or incorrect
            thinking patterns that people often have in reaction to everyday
            events that make them feel upset or distressed.
          </Paragraph>
          <Paragraph>
            Below there are several types of patterns of problematic thinking
            that people use in different life situations. These patterns often
            become automatic, habitual thoughts that cause us to engage in
            destructive behaviors.
          </Paragraph>
          <Paragraph>
            Considering your thoughts, find examples for each of these patterns.
            Write in the thought under the appropriate pattern and describe how
            it fits that pattern.
          </Paragraph>
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
              href='/journal/goalssetup'
            >
              My Goals
            </Link>
          </span>
        </article>
      </div>
    </main>
  );
}
