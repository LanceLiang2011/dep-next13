import Image from 'next/image';
import React from 'react';
import strength from '@/resources/imgs/strength.jpg';
import cardio from '@/resources/imgs/cardio.jpg';
import flex from '@/resources/imgs/flex.jpg';

export default function ExerciseCompare() {
  return (
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
            Strength training (also known as resistance training), is a type of
            exercise that aims to build strength and endurance of our muscles.
            It is based on the principle that when we put resistance on our
            muscles, they will work to overcome the force and thereby become
            stronger.
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
            Cardiovascular training (also known as cardio), is a type of
            exercise that conditions our heart and lungs. This training involves
            rhythmic and reptitive activities that increase your heart rate and
            push your body to produce more oxygen for working muscles, allowing
            it to work longer.
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
            Flexibility training (also known as stretching), is a type of
            exercise that aims to move your joints and muscles through their
            full range of motion. When our muscles are stretched, tension and
            stiffness can be released which increases our mobility and reduces
            the risk of injury.
          </p>
        </div>
      </div>
    </div>
  );
}
