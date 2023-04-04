import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import React from 'react';
import fat from '@/resources/imgs/fat-cell.png';
import bone from '@/resources/imgs/bone.png';
import muscle from '@/resources/imgs/muscle.png';
import scaleHospital from '@/resources/imgs/scale.png';
import bmivsbody from '@/resources/imgs/bmivsbody.png';
import HoverImage from '@/components/UI/HoverImage';
import DESymptomsCheck from './DESymptomsCheck';
import FatTypeCompare from './FatTypeCompare';
import Image from 'next/image';
import TopButton from '@/components/UI/TopButton';

export default function Body() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Body Composition</Title>
          <br />
          <DESymptomsCheck />
          <br />
          <Title type='h2'>How is the Body Composed?</Title>
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
            factors:
          </Paragraph>
          <ul className=' list-disc'>
            <li className=' pl-5 ml-5 text-lg xl:text-xl font-light text-body dark:text-gray-200'>
              genetics
            </li>
            <li className=' pl-5 ml-5 text-lg xl:text-xl font-light text-body dark:text-gray-200'>
              age
            </li>
            <li className=' pl-5 ml-5 text-lg xl:text-xl font-light text-body dark:text-gray-200'>
              height
            </li>
            <li className=' pl-5 ml-5 text-lg xl:text-xl font-light text-body dark:text-gray-200'>
              exercise
            </li>
            <li className=' pl-5 ml-5 text-lg xl:text-xl font-light text-body dark:text-gray-200'>
              sex/gender
            </li>
            <li className=' pl-5 ml-5 text-lg xl:text-xl font-light text-body dark:text-gray-200'>
              other lifestyle factors
            </li>
          </ul>
          <br />
          <Paragraph>
            Body fat in society has become a very stigmatized component of an
            individual&apos;s body. Yet, having body fat is essential for
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
          <Title type='h2'>Different Ways to Measure Our Body</Title>
          <Title type='h3'>What weight represents?</Title>
          <div className='flex flex-wrap gap-4 items-center justify-between'>
            <Paragraph className='max-w-xl'>
              Weight does a quick measurement used to represent how much mass an
              individual is. It does not take into consideration different
              sections or components of the body.{' '}
            </Paragraph>
            <Image
              src={scaleHospital}
              height={290}
              width={290}
              alt='a scle in hospital'
              className='mr-9 rounded-3xl'
            />
          </div>
          <br />
          <Title type='h3'>What is BMI?</Title>
          <div className='flex flex-wrap gap-4 items-center justify-between'>
            <Paragraph className='max-w-xl'>
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
              refers to “a person&apos;s weight in kilograms divided by the
              square of height in meters”. Having too high of a BMI can be seen
              as problematic, as well as, having too low of a BMI. Similar to
              weight, it is a quick measurement used by healthcare professionals
              to assess an individual&apos;s body composition and does not take
              into consideration different components of the body. This can
              sometimes be a problematic measurement because those who could be
              considered medically healthy might not be reflected within the BMI
              measurement. For example, body builders tend to have a high BMI,
              yet there body is considered medically healthy.
            </Paragraph>
            <Image
              src={bmivsbody}
              height={350}
              width={350}
              alt='a scle in hospital'
            />
          </div>

          <Paragraph>
            It is important to remember that BMI can be a useful quick image of
            an individual&apos;s body composition, however, it does not paint
            the whole picture. Using other measurements along with BMI is very
            important.
          </Paragraph>
          <br />
          <Title type='h3'>What is body composition? </Title>
          <Paragraph>
            The term body composition is typically stated between doctors,
            healthcare professionals, and those within the fitness industry.
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
          <TopButton />
        </article>
      </div>
    </main>
  );
}
