import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import Image from 'next/image';
import React from 'react';
import foods from '@/resources/imgs/foods.jpg';
import Badge from '@/components/Typograpjy/Badge';
import DESymptomsCheck from './DESymptomsCheck';
import NutrientsTable from './NutrientsTable';

export default function Nutrition() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h2'>
            What is{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              Nutrients
            </span>{' '}
            and why it is important?
          </Title>
          <DESymptomsCheck />
          <br />
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
            lead to nutrient deficiencies and health problems. On the other
            hand, a diet that is balanced and nutritious can help prevent
            chronic diseases and promote overall health and well-being.
          </Paragraph>
          <br />
          <Title type='h2'>Why do we eat?</Title>
          <Paragraph>
            We eat in order to provide our bodies with the energy and nutrients
            required to maintain its proper functioning. The food we consume is
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
          <Title type='h2'>
            How does my lifestyle effects my diet, and how does my diet
            compliment my lifestyle
          </Title>
          <Paragraph>
            Your lifestyle can greatly impact your dietary habits and choices,
            and vice versa. Here are some ways in which they are interconnected:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-pink-400 font-bold'>
                Physical activity level
              </span>
              : People who are physically active may require more calories and
              nutrients than sedentary individuals, and may benefit from a diet
              that is higher in carbohydrates, proteins, and healthy fats.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 font-bold'>
                Time availability
              </span>
              : A busy lifestyle may lead to a reliance on convenient or fast
              food, which is often high in calories, saturated and trans fats,
              and added sugars. On the other hand, a diet that emphasizes whole,
              unprocessed foods can complement a busy lifestyle by providing the
              nutrients and energy needed to maintain health and well-being.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-yellow-400 font-bold'>
                Food environment
              </span>
              : People who live in areas with limited access to healthy food
              options may find it more challenging to maintain a balanced diet.
              A diet that emphasizes whole, unprocessed foods, along with
              regular physical activity, can support good health even in
              food-insecure environments.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-purple-400 font-bold'>
                Personal preferences and cultural background
              </span>
              : Individual food preferences and cultural background can greatly
              impact dietary habits. Incorporating culturally-specific foods
              into a balanced diet can help individuals maintain their cultural
              heritage and enjoyment of food.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400 font-bold'>
                Stress levels
              </span>
              : Stressful lifestyles can lead to unhealthy eating habits, such
              as overeating, snacking on junk food, or skipping meals. A diet
              that is rich in whole, unprocessed foods, along with
              stress-management techniques, can support good health and
              well-being.
            </li>
          </ul>
          <Paragraph>
            In summary, a healthy lifestyle and diet are interdependent and can
            support each other in promoting good health and well-being. Making
            gradual, sustainable changes to your lifestyle and diet, based on
            your individual needs and preferences, can have a positive impact on
            your health over time.
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
