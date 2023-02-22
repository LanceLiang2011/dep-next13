import Image from 'next/image';
import React from 'react';
import fatTissue from '@/resources/imgs/AdiposeTissue.png';
import muscularTissue from '@/resources/imgs/muscular-tissue.jpg';

export default function FatTypeCompare() {
  return (
    <div className='flex gap-2'>
      <div className='max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <span>
          <Image
            className='rounded-t-lg'
            src={muscularTissue}
            alt='muscularTissue'
            width={350}
            height={350}
          />
        </span>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Non-Fat Mass
          </h5>

          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Non-fat is essential, and it is within our bones, organs, and
            muscles. Bones and muscles allow the body to move and function.
            Being able to kick a soccer ball or being able to chew food is all
            done through our muscles.
          </p>
        </div>
      </div>
      <div className='max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <span>
          <Image
            className='rounded-t-lg'
            src={fatTissue}
            alt='fatTissue'
            width={350}
            height={350}
          />
        </span>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Fat-Mass
          </h5>

          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Fat mass is the fat stored within our adipose tissue, used to
            provide energy and cushion our organs. Excessive fat mass can cause
            health complications, however, having too low of fat mass can also
            be problematic.
          </p>
        </div>
      </div>
    </div>
  );
}
