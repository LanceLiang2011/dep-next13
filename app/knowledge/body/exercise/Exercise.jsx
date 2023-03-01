import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import React from 'react';
import DESymptomsCheck from './DESymptomsCheck';
import ExerciseCompare from './ExerciseCompare';

export default function Exercise() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Physical Activity & Exercise</Title>
          <br />
          <DESymptomsCheck />
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
          <Title type='h2'>What Are The Different Types of Exercise? </Title>
          <Paragraph>
            Exercise looks and comes in many different forms. From going for a
            walk, stretching on a yoga mat to lifting weights or doing a pilates
            class, exercise is multidimensional and dynamic.{' '}
          </Paragraph>
          <Paragraph>
            The three main types of exercise are strength, cardiovascular, and
            flexibility training. They differ by the type of activity they
            involve and the outcomes they provide to the mind and body. Not all
            exercise is considered a single type of training and can be
            considered a combination of multiple types.
          </Paragraph>
          <br />
          <ExerciseCompare />
          <br />
          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Type of training
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Examples
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Strength Training
                  </th>
                  <td className='px-6 py-4'>Weighlifting, Circuit training </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Cardiovascular Training
                  </th>
                  <td className='px-6 py-4'>
                    Walking, Running, Biking, HIIT, Skiing
                  </td>
                </tr>
                <tr className='bg-white dark:bg-gray-800'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Flexibility Training
                  </th>
                  <td className='px-6 py-4'>Yoga, Pilates</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <Title type='h2'>What Type is Right For Me?</Title>
          <Paragraph>
            Finding the right type of exercise that align with your body, goals
            and values for you can be a difficult process, however, it is
            achievable.{' '}
          </Paragraph>
          <Paragraph>
            First of all, exercise is meant to be enjoyed and bring a sense of
            joy to our lives. In fact, research has shown that regular physical
            activity can increase your the release of the “happy” chemicals in
            your brain thus making us feel better inside and out.{' '}
          </Paragraph>
          <Paragraph>
            Finding the right type of exercise, really comes down to knowing
            your body and finding what works best with you and your lifestyle.
            Ask yourself these questions…
          </Paragraph>
          <form class='w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <ol className='mb-3'>
              <label
                htmlFor='what'
                className='text-xl mb-3 font-light text-gray-600 dark:text-gray-400'
              >
                What makes me feel good?
              </label>
              <input
                type='text'
                id='what'
                className='mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='What makes me feel good?'
              ></input>
              <label
                htmlFor='why'
                className='text-xl mb-3 font-light text-gray-600 dark:text-gray-400'
              >
                Why am I doing this?
              </label>
              <input
                type='text'
                id='why'
                className='mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Why am I doing this?'
              ></input>
              <label
                htmlFor='where'
                className='text-xl mb-3 font-light text-gray-600 dark:text-gray-400'
              >
                Where is this going to get me?
              </label>
              <input
                type='text'
                id='where'
                className='mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Where is this going to get me?'
              ></input>
            </ol>
          </form>
          <br />
          <Paragraph>
            Once you’ve answered these questions, sit back and look at the
            various types of exercise and see which ones align with your
            responses. Performing a variety of types and intensities is
            important in maintaining and achieving balance in your overall
            health and well-being. This may take some trial and error, but the
            more you experiment and try new things the more you will learn about
            your body and how you respond to it.
          </Paragraph>
          <br />
          <Title type='h2'>Healthy Relationship with Exercise</Title>
          <Paragraph>
            Finding a healthy realtionship with exercise can be challenging
            especially as we grow and develop into adults and our values,
            priorites and circumstances change. We may be develop anxious
            thoughts around exercise such that we worry about our often we are
            being activity and whether it is “good enough”. We can also develop
            negative associations with certain types where we fear weightlifitng
            will make us look a certain way and we avoid it.{' '}
          </Paragraph>
          <Paragraph>
            Everybody’s relationship with exercise is unique to who they are,
            their previous experiences and their self-perception. There is not a
            one solution fits all however there are some simple practices that
            can help facilciate a better relationship.{' '}
          </Paragraph>
          <ol className='mb-3 ml-8 list-decimal'>
            <li className='font-light text-gray-600 dark:text-gray-400'>
              Focus on how exercise makes you feel rather than makes you look.
            </li>
            <li className='font-light text-gray-600 dark:text-gray-400'>
              Understand that your bodies and needs change over time and what
              may worked for you in the past may not for the time being.
            </li>
            <li className='font-light text-gray-600 dark:text-gray-400'>
              Listen to your body and be intuitive. If it needs to rest let it.
              But if is is agitated and ready to move, get it moving!
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
