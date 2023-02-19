import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import React from 'react';

export default function Exercise() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            Physical Activity &{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-yellow-400'>
              Exercise
            </span>
          </Title>
          <br />
          <Title type='h2'>What is Exercise?</Title>
          <Paragraph>
            Exercise is a form of physical activity that is performed to enhance
            or maintain an individuals overall health and well-being. It is a
            planned, structured and repetitive activity that can strengthen the
            body both physically and mentally.{' '}
          </Paragraph>
          <Paragraph>
            Exercise requirements and capabilties are not a “one-size-fits-all”
            type of ordeal and is different for everybody depending on their
            body, mind and sprit. Think of it this way, when you go to the
            doctor and you are given a prescription, does everyone else in this
            world also have the same prescription? No. We all have our own
            individualistic needs that are unique to who we are and what were
            made of.{' '}
          </Paragraph>
          <Paragraph>
            Understanding exercise and its important our everyday lives is
            critical to adapting a healthy lifestyle that reflects our
            individualist needs, preferences and desires. It is something that
            should be used to empower and strengthen our bodies, not deplet or
            weaken it.{' '}
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
