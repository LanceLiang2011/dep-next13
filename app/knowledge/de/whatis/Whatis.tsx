import FirstParagraph from '@/components/Typograpjy/FirstPara';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import Image from 'next/image';
import ActiveHoverImage from '@/components/UI/ActiveHoverImage';
import car from '@/resources/imgs/car.png';
import car2 from '@/resources/imgs/car2.png';
import car3 from '@/resources/imgs/car3.png';
import train from '@/resources/imgs/cable-train.gif';
import cargif2 from '@/resources/imgs/cargif2.gif';
import cargif3 from '@/resources/imgs/cargif3.gif';
import React from 'react';

export default function Whatis() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>What is Disordered Eating?</Title>
          <br />
          <Paragraph>
            Disordered eating is a term used to describe a range of abnormal
            eating behaviours that do not warrant the diagnosis of an eating
            disorder. It includes a subset of behaviours that although similar,
            do not align with the diagnostic criteria of an eating disorder. As
            such, disordered eating is a descriptive phrase, not a clinical
            diagnosis.
          </Paragraph>
          <br />
          <Title type='h2'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l to-red-600 via-yellow-500 from-green-400'>
              Continuum
            </span>{' '}
            of Eating
          </Title>
          <Paragraph>
            Eating can be viewed on a continuum that spans from healthy eating
            to disordered eating to eating disorders. Throughout our lives, we
            can experience fluctuations across the continuum based on our
            lifestyle, situations, and experiences.
          </Paragraph>
          <br />

          <Title type='h3' className='text-green-500'>
            Healthy Eating
          </Title>
          <div className='flex flex-wrap gap-4 items-center justify-between'>
            <Paragraph className='max-w-xl'>
              Healthy eating is different for everybody and depends on an
              individual&apos;s personal preferences, needs, cultural
              influences, and body composition. In general, healthy eating
              involves a balanced diet, a variety of foods, an appropriate
              calorie intake, and a healthy body weight. Individuals who
              demonstrate healthy eating behaviours are not preoccupied with
              their body image and perform regular bouts of exercise. They are{' '}
              more likely to be intuitive with their body&apos;s needs and eat
              for nourishment, pleasure, and joy.{' '}
            </Paragraph>
            <Image
              src={car}
              alt='A normal eating car'
              height={200}
              width={300}
            />
          </div>

          <br />

          <Title type='h3' className='text-yellow-500'>
            Disordered Eating
          </Title>
          <div className='flex flex-wrap gap-4 items-center justify-between'>
            <Paragraph className='max-w-xl'>
              Individuals who experience disordered eating express recurring
              negative preoccupations and associations with food, dieting,
              exercise, and body image. This can include regular bouts of
              overeating and undereating, distress caused by body image and
              size, fixation and obsessiveness around exercise, and an
              unbalanced irregular diet. Individuals who experience disordered
              eating can also experience a lack of self-worth. Disordered Eating
              does not warrant a clinical diagnosis. It can be considered as the
              space between normal eating and an eating disorder. This most
              often can result in negative feelings, shame and guilt.
            </Paragraph>
            <Image
              src={car2}
              alt='A normal eating car'
              height={200}
              width={300}
            />
          </div>

          <br />

          <Title type='h3' className='text-red-500'>
            Eating Disorder
          </Title>
          <div className='flex flex-wrap gap-4 items-center justify-between'>
            <Paragraph className='max-w-xl'>
              Eating Disorders are a group of serious and complex mental
              illnesses, that are characterized by persistent disturbances in
              behaviours, thoughts and attitudes toward foods, eating, and body
              size. Eating disorders effect an individual&apos;s physical,
              psychological and social function. They will have a clinical
              diagnosis. Individuals may experience restrictive eating, food
              avoidance, binge eating, purging or laxative misuse, and
              compulsive exercise depending upon their diagnosis. As such, this
              can result in severe alterations to their physical and mental
              function and impact their overall quality of life.{' '}
            </Paragraph>
            <Image
              src={car3}
              alt='A normal eating car'
              height={200}
              width={300}
            />
          </div>

          <br />
          <br />
          <div className='max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              How are Eating Disorders Diagnosed?
            </h5>

            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              In Canada, Eating Disorders can be diagnosed by a psychiatrist,
              psychologist, or general practitioner based on a set of criteria
              derived from the Diagnostic and Statistical Manual of Mental
              Disorders, Fifth Edition (DSM-5) published by the American
              Psychiatric Association (APA). The criteria outlined in the DSM-5
              include behavioural, emotional, and weight alterations that affect
              an individual&apos;s physical, psychological, and social
              functions.
            </p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              There are several types of eating disorders that differ in
              physical and psychological symptoms. The most common types include
              Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorders,
              Avoidant/Restrictive Food Intake Disorder, and Other Specified
              Feeding and Eating Disorders. For more information on the
              different types of Eating Disorders please click{' '}
              <a
                className='text-blue-400 dark:text-blue-600'
                target='_blank'
                rel='noreferrer'
                href='https://www.nimh.nih.gov/health/topics/eating-disorders'
              >
                HERE
              </a>
              .
            </p>
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
