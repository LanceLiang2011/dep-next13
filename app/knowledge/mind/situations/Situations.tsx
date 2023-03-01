import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import React from 'react';

export default function Situations() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Understanding Situations </Title>
          <br />
          <Paragraph>
            In essence, a situation is just when something happens. Situations
            occur every day, varying in weight of importance. Situations
            initiate the flow of thoughts, emotions, and then behaviour. Two
            people can experience the same situation and have completely
            different thoughts.
          </Paragraph>
          <br />
          <Title type='h3'>
            SITUATION: Molly and Abbey both went to the movies and ate a bunch
            of candy.
          </Title>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th></th>
                <th scope='col' className='px-6 py-3'>
                  Molly
                </th>
                <th scope='col' className='px-6 py-3'>
                  Abbey
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  Thought:
                </th>
                <td className='px-6 py-4'>
                  <BackQuote>
                    “I ate so much candy, and I hate how enormous my body looks”
                  </BackQuote>
                </td>
                <td className='px-6 py-4'>
                  <BackQuote>
                    “I had so much fun going to the movies with Molly and eating
                    all that candy”
                  </BackQuote>
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  Emotion:
                </th>
                <td className='px-6 py-4'>
                  😢 Sad, upset with herself because she ate so much candy,
                  discontent with her body
                </td>
                <td className='px-6 py-4'>
                  😄 Happy, content with her time with Molly
                </td>
              </tr>
              <tr className='bg-white dark:bg-gray-800'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  Behaviour:
                </th>
                <td className='px-6 py-4'>
                  Molly develops a negative opinion of herself because she
                  thinks that her body is ugly, and changes what she eats the
                  next day to compensate for the candy she ate.{' '}
                </td>
                <td className='px-6 py-4'>
                  Abbey was super happy and wants to plan another movie night
                  with Molly.
                </td>
              </tr>
            </tbody>
          </table>
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
