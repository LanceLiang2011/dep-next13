import Feature from '@/components/UI/Feature';
import Link from 'next/link';
import React from 'react';
import { BsBookFill, BsFillPatchQuestionFill } from 'react-icons/bs';

import { IoIosBody } from 'react-icons/io';
import { MdFamilyRestroom, MdSupportAgent, MdFavorite } from 'react-icons/md';

export default function HomePage() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Support: For the loved ones.
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Welcome to our support section for those who are struggling with
            disordered eating as well as their families. We understand how
            difficult it can be to seek help and support for these issues, which
            is why we provide a safe and non-judgmental space to access
            information and resources. Our website offers a range of family
            support options, different types of support, and links to other
            helpful facilities. We believe that everyone deserves the care and
            support they need to overcome these challenges, and we&apos;re here
            to help.
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <Link href='/support/family'>
            <Feature
              title='Family Support'
              content='When a loved one is suffering from disordered eating, there are something we should be aware of.'
              icon={<MdFamilyRestroom size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/support/types'>
            <Feature
              title='Types of Support'
              content='When looking for support, it is important to know what types of support are available so you can find the support most beneficial to YOU!'
              icon={<MdFavorite size={20} color='#2563eb' />}
            />
          </Link>

          <Link href='/support/direct'>
            <Feature
              title='Direct Support'
              content="There are a lot of resources out there to provide further support. Let's check it out."
              icon={<MdSupportAgent size={20} color='#2563eb' />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
