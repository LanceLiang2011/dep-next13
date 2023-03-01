import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import React from 'react';
import fat from '@/resources/imgs/fat-cell.png';
import bone from '@/resources/imgs/bone.png';
import muscle from '@/resources/imgs/muscle.png';
import scalegif from '@/resources/imgs/scalegif.gif';
import scaleHospital from '@/resources/imgs/scaleHospital.jpg';
import bmivsbody from '@/resources/imgs/bmivsbody.png';
import HoverImage from '@/components/UI/HoverImage';
import DESymptomsCheck from './DESymptomsCheck';
import FatTypeCompare from './FatTypeCompare';
import Image from 'next/image';

export default function Body() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <DESymptomsCheck />
          <br />
          <Title type='h2'>
            How is the{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-400'>
              Body
            </span>{' '}
            Composed?
          </Title>
          <br />
          <Paragraph>
            An individual&apos;s body is composed of 3 major factors:{' '}
            <HoverImage src={fat}>
              <span className='bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
                body fat
              </span>{' '}
            </HoverImage>
            <HoverImage src={bone}>
              {' '}
              <span className='bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'>
                bone
              </span>
            </HoverImage>
            , and{' '}
            <HoverImage src={muscle}>
              {' '}
              <span className='bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300'>
                muscle
              </span>
            </HoverImage>
            . Each person needs to have body fat, bone, and muscle to be able to
            have a functioning body. What can influence these 3 significant
            factors are genetics, age, height, exercise, sex/gender, and
            lifestyle factors.{' '}
          </Paragraph>
          <Paragraph>
            Body fat in society has become a very stigmatized component of an
            individual&apos;s body. Yet, having body fat is important for
            survival. There are 2 types of body fat; non-fat mass and fat mass.
          </Paragraph>
          <FatTypeCompare />
          <br />
          <Paragraph>
            Muscles allow the body to move and function. Being able to kick a
            soccer ball or being able to chew food is all done through our
            muscles. Within our body, muscles weigh more than both types of body
            fats.
          </Paragraph>
          <br />
          <Title type='h2'>Different Measurements of the Body</Title>
          <UnderlineSubtitle>What weight represents</UnderlineSubtitle>
          <Paragraph>
            <HoverImage src={scalegif}>
              <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                Weight
              </span>
            </HoverImage>{' '}
            is a quick measurement used to represent how much mass an individual
            is. It does not take into consideration different sections or
            components of the body.{' '}
          </Paragraph>
          <Image
            src={scaleHospital}
            height={300}
            width={300}
            alt='a scle in hospital'
          />
          <br />
          <UnderlineSubtitle>What is BMI?</UnderlineSubtitle>
          <Paragraph>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-blue-400'>
              B
            </span>
            ody{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-blue-400'>
              M
            </span>
            ass{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-blue-400'>
              I
            </span>
            ndex{' '}
            <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
              BMI
            </span>
            refers to “a person&apos;s weight in kilograms divided by the square
            of height in meters”. Having too high of a BMI can be seen as
            problematic, as well as, having too low of a BMI. Similar to weight,
            it is a quick measurement used by healthcare professionals to assess
            an individual&apos;s body composition and does not take into
            consideration different components of the body. This can sometimes
            be a problematic measurement because those who could be considered
            “healthy” might not be reflected within the BMI measurement.{' '}
          </Paragraph>
          <Image
            src={bmivsbody}
            height={350}
            width={350}
            alt='a scle in hospital'
          />
          <Paragraph>
            It is important to remember that BMI can be a useful quick image of
            an individual&apos;s body composition, however, it does not paint
            the whole picture. Using other measurements along with BMI is very
            important.
          </Paragraph>
          <br />
          <UnderlineSubtitle>What is body composition? </UnderlineSubtitle>
          <Paragraph>
            The term body composition is typically stated between doctors,
            healthcare professionals, and those within the fitness industry (1).
            Each person needs to have body fat, bone, and muscle to be able to
            have a functioning body. Body composition is a measurement that can
            allow professionals to understand what is going on within the body.
            For example, someone’s weight could remain the same for several
            weeks, yet, their body fat amount has decreased, and muscle mass
            amount has increased. One of the best ways to calculate body
            composition is using a DEXA (Dual X-ray Absorptiometry) scan, as it
            measures body fat, bone, and muscle.{' '}
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
