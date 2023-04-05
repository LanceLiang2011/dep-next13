import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import Image from 'next/image';
import React from 'react';
import foods from '@/resources/imgs/foods.jpg';
import Badge from '@/components/Typograpjy/Badge';
import DESymptomsCheck from './DESymptomsCheck';
import NutrientsTable from './NutrientsTable';
import TopButton from '@/components/UI/TopButton';

export default function Nutrition() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Nutrients</Title>
          <br />
          <DESymptomsCheck />
          <br />
          <Title type='h2'>What is Nutrients and Why is it important?</Title>
          <Paragraph>
            Nutrients are the substances found in food that are necessary for
            growth, maintenance, and repair of our bodies. There are six
            essential classes of nutrients:{' '}
            <Badge type='pink'>carbohydrates</Badge>,{' '}
            <Badge type='purple'>proteins</Badge>,{' '}
            <Badge type='yellow'>fats</Badge>,{' '}
            <Badge type='green'>vitamins</Badge>,{' '}
            <Badge type='dark'>minerals</Badge>,{' '}
            <Badge type='default'>water</Badge>. All six play a specific and
            important role in the body.
          </Paragraph>
          <NutrientsTable />
          <br />
          <Paragraph>
            It is important to consume a{' '}
            <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r to-red-600 via-green-500 from-indigo-400'>
              variety
            </span>{' '}
            of nutrients from different food sources in order to maintain
            optimal health. A diet that is lacking in essential nutrients can
            lead to nutrient deficiencies and health problems. In contrast, a
            diet that is balanced and nutritious can help prevent chronic
            diseases and promote overall health and well-being.
          </Paragraph>
          <br />
          <Title type='h2'>Why do we eat?</Title>
          <Paragraph>
            We eat in order to provide our bodies with the energy and nutrients
            required to maintain its proper function. The food we consume is
            broken down in the digestive system into smaller components such as
            carbohydrates, proteins, and fats, which are then absorbed into the
            bloodstream and transported to cells throughout the body.
          </Paragraph>

          <Paragraph>
            Overall, we eat to provide our bodies with the necessary energy,
            nutrients and materials it needs to sustain life and carry out its
            various functions.
          </Paragraph>
          <br />
          <TopButton next='/knowledge/body/diet' />
        </article>
      </div>
    </main>
  );
}
