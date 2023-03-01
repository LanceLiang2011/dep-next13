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
          <Title type='h2'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              What is{' '}
            </span>
            Disordered Eating?
          </Title>
          <br />
          <Paragraph>
            <span className='underline underline-offset-2 decoration-4 decoration-blue-400 dark:decoration-blue-600'>
              Disordered eating
            </span>{' '}
            is a term used to describe a range of abnormal eating behaviours
            that do not warrant the diagnosis of an eating disorder. It includes
            a subset of behaviours that although similar, do not align with the
            diagnostic criteria of an eating disorder. As such, disordered
            eating is a descriptive phrase, not a clinical diagnosis.
          </Paragraph>
          <br />
          <Title type='h2'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l to-red-600 via-yellow-500 from-sky-400'>
              Continuum
            </span>{' '}
            of Eating
          </Title>
          <Paragraph>
            Eating can be viewed on a continuum that spans from healthy eating
            to disordered eating to eating disorders. Throughout our lives, we
            can experience fluctuations across the continuum based on our
            lifestyle, situations, and experiences. Regardless of where an
            individual falls on the continuum, their experience is as equally
            important as another and valid and deserving of counselling and
            support.
          </Paragraph>
          <br />
          <ActiveHoverImage src={train} height={200} width={200}>
            {' '}
            <UnderlineSubtitle>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-400'>
                Healthy
              </span>{' '}
              Eating
            </UnderlineSubtitle>
          </ActiveHoverImage>
          <Paragraph>
            Healthy eating is different for everybody and depends on an
            individual&apos;s personal preferences, needs, cultural influences,
            and body composition. In general, healthy eating involves a balanced
            diet, a variety of foods, an appropriate calorie intake, and a
            healthy body weight. Individuals who demonstrate healthy eating
            behaviours are not preoccupied with their body image and perform
            regular bouts of exercise. They are{' '}
            <span className='underline decoration-2 decoration-red-400 dark:decoration-red-600'>
              more likely{' '}
            </span>
            to be intuitive with their body&apos;s needs and eat for
            nourishment, pleasure, and joy.{' '}
          </Paragraph>
          <Image src={car} alt='A normal eating car' height={200} width={200} />
          <br />

          <ActiveHoverImage src={cargif2} height={200} width={200}>
            <UnderlineSubtitle>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-400'>
                Disordered
              </span>{' '}
              Eating
            </UnderlineSubtitle>
          </ActiveHoverImage>
          <Paragraph>
            Individuals who experience disordered eating behaviours express
            recurring negative preoccupations and associations with food,
            dieting, exercise, and body image. This can include regular bouts of
            overeating and undereating, distress caused by body size and image,
            fixation and obsessiveness around exercise, and an unbalanced
            irregular diet. Individuals who experience disordered eating can
            experience a lack of self-worth and associate their food intake with
            their perception of themselves and others. This most often can
            result in feelings and shame and guilt.
          </Paragraph>
          <Image
            src={car2}
            alt='A normal eating car'
            height={200}
            width={200}
          />
          <br />
          <ActiveHoverImage src={cargif3} height={200} width={200}>
            <UnderlineSubtitle>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400'>
                Eating Disorder
              </span>{' '}
            </UnderlineSubtitle>
          </ActiveHoverImage>
          <Paragraph>
            Eating Disorders are a group of serious and complex mental health
            illnesses that are characterized by persistent disturbances in
            behaviours, thoughts and attitudes toward foods, eating, and body
            size. There are conditions that affect an individual&apos;s
            physical, psychological and social function and are clinically
            diagnosed. Individuals may experience restrictive eating, food
            avoidance, binge eating, purging or laxative misuse, and compulsive
            exercise depending upon their diagnosis. As such, this can result in
            severe alterations to their physical and mental function and impact
            their overall quality of life.{' '}
          </Paragraph>
          <Image
            src={car3}
            alt='A normal eating car'
            height={200}
            width={200}
          />
          <br />
          <Title type='h2'>How are Eating Disorders Diagnosed?</Title>
          <Paragraph>
            In Canada, Eating Disorders can be diagnosed by a psychiatrist,
            psychologist, or general practitioner based on a set of criteria
            derived from the Diagnostic and Statistical Manual of Mental
            Disorders, Fifth Edition (DSM-5) published by the American
            Psychiatric Association (APA). The criteria outlined in the DSM-5
            include behavioural, emotional, and weight alterations that affect
            an individual&apos;s physical, psychological, and social functions.
          </Paragraph>
          <Paragraph>
            There are several types of eating disorders that differ in physical
            and psychological symptoms. The most common types include Anorexia
            Nervosa, Bulimia Nervosa, Binge Eating Disorders,
            Avoidant/Restrictive Food Intake Disorder, and Other Specified
            Feeding and Eating Disorders. For more information on the different
            types of Eating Disorders please click{' '}
            <a
              className='text-blue-400 dark:text-blue-600'
              target='_blank'
              rel='noreferrer'
              href='https://www.nimh.nih.gov/health/topics/eating-disorders'
            >
              HERE
            </a>
            .
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
