'use client';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import { Tooltip } from 'flowbite-react';
import Image from 'next/image';
import debvsed from '@/resources/imgs/debed.png';
import React from 'react';

export default function WhyAndHow() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            Why and How People Engage in Disordered Eating
          </Title>
          <br />
          <Paragraph>
            From childhood, our society and Western culture engrave certain
            ideals about individual appearance and what concerns individuals
            should have with regard to their body and food intake. Therefore,
            the transition into adolescence and adulthood can be very difficult
            for people due to the fact that one&apos;s body will change because
            of puberty. Since people have these ideals about the way that they
            &quot;should&quot; appear and what they &quot;should&quot; consume,
            these ideals can cause people to want to alter their appearance and
            food intake.
          </Paragraph>
          <br />
          <Title type='h3'>
            Why do people experiment with food intake and appearance?
          </Title>
          <Paragraph>
            As mentioned previously, eating and individual concerns about
            one&apos;s body are very individualized. Therefore, there are
            countless reasons why people engage in disordered eating. Some
            common reasons for engaging include:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Unhappy or unsatisfied with their physical appearance
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Social disconnection from others
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Coping mechanism for other mental health issues (Anxiety,
              Depression, Obsessive Compulsive Disorder)
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Life stressors (death, divorces, relationship changes, changes in
              careers, school, job)
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Lack of life control, so controlling food intake and body
              appearance
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Mirroring others&apos; behaviours (family members, friends, peers,
              people on social media) (&quot;My mom does not eat over 500
              calories, therefore, I should not&quot;).
            </li>
          </ul>
          <br />
          <Paragraph>
            These food intake and body alteration &quot;experiments&quot; can
            influence the way we think (cognition), the way we perceive
            (perception), the way we feel (affect), and lastly, the way we act
            (behaviours).
          </Paragraph>
          <br />
          <div className='mb-20'>
            <Tooltip content='Refine this later'>
              <Image alt='Deb vs ED' src={debvsed} height={600} width={600} />
            </Tooltip>
          </div>
          <Title type='h3'>
            Behaviours: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-pink-400'>
              act
            </span>
          </Title>
          <Paragraph>
            Behaviour is how someone acts in response to their environment
            internally; their thoughts and feelings and externally; other people
            and situations. Distorted behaviours are present with both
            disordered eating and eating disorders and impact an
            individual&apos;s actions towards what they eat and how they look.
          </Paragraph>
          <div className='flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'>
            <span className='px-4'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Example A
              </h5>
              <p className='font-bold text-gray-700 dark:text-gray-400'>
                Avoids all carbs unless they have exercised enough.
              </p>
            </span>
            <span className='px-4'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Example B
              </h5>
              <p className='font-bold text-gray-700 dark:text-gray-400'>
                Looks at a menu and counts all the calories of each meal in
                advance
              </p>
            </span>
            <span className='px-4'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Example C
              </h5>
              <p className='font-bold text-gray-700 dark:text-gray-400'>
                Overeats when they are upset about something.
              </p>
            </span>
          </div>
          <br />
          <Title type='h3'>
            Cognition: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400'>
              think
            </span>
          </Title>
          <Paragraph>
            Cognition includes all the processes in which we accumulate
            knowledge. With an eating disorder, individuals experience a
            disturbance in their cognition causing inaccurate or exaggerated
            thought patterns such as black-and-white thinking, overgeneralizing,
            catastrophizing, blaming, and negative filtering.
          </Paragraph>
          <blockquote className='p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
            <p className='text-md italic font-medium leading-relaxed text-gray-900 dark:text-white'>
              Example: &quot;If I don&apos;t exercise today then I won&apos;t
              eat dinner tonight&quot;
            </p>
          </blockquote>
          <br />
          <Title type='h3'>
            Affect: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              feel
            </span>
          </Title>
          <Paragraph>
            Affect is the outward expression of our feelings about ourselves and
            those around us through our moods and emotions. With eating
            disorders, an individual&apos;s affective experiences are
            dysregulated which impacts their choices and perceptions of a given
            situation. As such, their ability to function efficiently throughout
            the day is distorted and can result in abnormal behaviours and
            actions.
          </Paragraph>
          <blockquote className='p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
            <p className='text-md italic font-medium leading-relaxed text-gray-900 dark:text-white'>
              Example: &quot;I Feels shame and guilt after eating and gets
              upset. &quot;
            </p>
          </blockquote>
          <br />
          <Title type='h3'>
            Perception: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-indigo-800 from-purple-600'>
              perceive
            </span>
          </Title>
          <Paragraph>
            Perception is the way we recognize, organize and interpret sensory
            information from external stimuli. The way in which we perceive
            information is dependent upon our unique characteristics and
            experiences and dictates our ability to receive meaningful knowledge
            and act accordingly. An individual with an eating disorder will have
            a distorted perception of themselves and those around them. As such,
            they are challenged to recognize and process the reality of given
            situations.
          </Paragraph>
          <div
            className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
            role='alert'
          >
            <span className='font-medium'>Example:</span> An underweight female
            looks in the mirror and sees an obese figure.
          </div>
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
