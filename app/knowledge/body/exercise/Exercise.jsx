import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import React from 'react';
import strength from '@/resources/imgs/strength.jpg';
import cardio from '@/resources/imgs/cardio.jpg';
import flex from '@/resources/imgs/flex.jpg';
import Image from 'next/image';

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
          <Title type='h2'>What Are The Different Types of Exercise? </Title>
          <Paragraph>
            Exercise looks and comes in many different forms. From going for a
            walk, stretching on a yoga mat to lifting weights or doing a pilates
            class, exercise is multidimensional and dynamic.{' '}
          </Paragraph>
          <Paragraph>
            There are three main types of exercise known as strength,
            cardiovascular and flexibility training that are differentiated by
            the type of activity they involve and the outcomes they provide to
            the mind and body. Not all exercise is considered a single type of
            training and can be considered a combination of multipl types.{' '}
          </Paragraph>
          <br />
          <div className='flex gap-2'>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <span>
                <Image
                  className='rounded-t-lg'
                  src={strength}
                  alt='strength training'
                  width={400}
                  height={400}
                />
              </span>
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Strength Training
                </h5>

                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Strength training (also known as resistance training) is a
                  type of exercise that aims to build strength and endurance of
                  our muscles. It is based on the principle that when we put
                  resistance on our muscles, they will work to overcome the
                  force and thereby become stronger.
                </p>
              </div>
            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <span>
                <Image
                  className='rounded-t-lg'
                  src={cardio}
                  alt='cardio training'
                  width={400}
                  height={400}
                />
              </span>
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Cardiovascular Training
                </h5>

                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Cardiovascular training (also known as cardio) is a type of
                  exercise that conditions our our heart and lungs. Cardio
                  involves rhythmic and reptitive activities that increase your
                  heart rate and push your body to produce more oxygen for
                  working muscles allowing it to work longer.
                </p>
              </div>
            </div>

            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <span>
                <Image
                  className='rounded-t-lg'
                  src={flex}
                  alt='flexible training'
                  width={400}
                  height={400}
                />
              </span>
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Flexibility Training
                </h5>

                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Flexibility training (also known as stretching) is a type of
                  exercise that aims to move your joints and muscles through
                  their full range of motion. When our muscles are stretched,
                  tension and stiffness can be released which increases our
                  mobility and reduces the risk of injury.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div class='relative overflow-x-auto'>
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
                  <td className='px-6 py-4'>Weighlifting</td>
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
          <ol className='mb-3'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400 underline underline-offset-1 decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              What make me feel good?
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400 underline underline-offset-1 decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              Why am I doing this?
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400 underline underline-offset-1 decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              Where is this going to get me?
            </li>
          </ol>
          <Paragraph>
            How this looks for one person may be completely different for
            another. Someone who has a more active lifestyle may lean towards
            higher intensity activities such as running and circuit training
            while someone who is less active may incorporate more walking and
            stretching into their week.{' '}
          </Paragraph>
          <Paragraph>
            Regardless of how they are executed, focusing on the general
            recommendation is important for achieving and maintaining a healthy
            body and just as important, a healthy mind.{' '}
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
