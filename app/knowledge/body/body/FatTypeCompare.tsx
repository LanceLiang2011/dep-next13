import Image from 'next/image';
import React from 'react';
import fatTissue from '@/resources/imgs/AdiposeTissue.png';

export default function FatTypeCompare() {
  return (
    <div className='flex gap-2'>
      <div className='max-w-2xl my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <span>
          <Image
            className='rounded-t-lg mx-auto'
            src={fatTissue}
            alt='muscularTissue'
            width={600}
            height={300}
          />
        </span>
        <div className='flex'>
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Non-Fat Mass
            </h5>

            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Non-fat is essential. They are generally considered to be any fat
              (including the fat between muscle groups and within a muscle)
              found beneath the fascia of a muscle and is the widest definition
              for fat beneath the fascia of a muscle.
            </p>
          </div>
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Fat-Mass
            </h5>

            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Fat mass is the fat stored within our adipose tissue, used to
              provide energy and cushion our organs. Excessive fat mass can
              cause health complications, however, having too low of fat mass
              can also be problematic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
