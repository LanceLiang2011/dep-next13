import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import Image from 'next/image';
import support from '@/resources/imgs/support.png';
import HoverImage from '@/components/UI/HoverImage';
import foodfear from '@/resources/imgs/support/foodfear.gif';
import diet from '@/resources/imgs/support/diet.gif';
import bodyimage from '@/resources/imgs/support/bodyimage.gif';
import overeating from '@/resources/imgs/support/overeating.gif';
import undereating from '@/resources/imgs/support/undereating.gif';
import label from '@/resources/imgs/support/label.gif';
import fasting from '@/resources/imgs/support/fasting.gif';
import loseweight from '@/resources/imgs/support/loseweight.gif';
import exercise from '@/resources/imgs/support/exercise.gif';
import dissatisfaction from '@/resources/imgs/support/dissatisfaction.gif';
import selfConfidence from '@/resources/imgs/support/self-confidence.png';
import TopButton from '@/components/UI/TopButton';

export default function Family() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Family Support</Title>
          <Paragraph>
            When a loved one is suffering from disordered eating, it can be very
            challenging for the loved one. It is important to watch and identify
            distorted behaviours, as they are very individualized and can have
            significant impacts on the health and well-being of someone. Some
            common distorted behaviours with disordered eating include, but are
            not limited to:
          </Paragraph>
          <ul className='max-w-xl text-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li>
              Weird/unusual{' '}
              <HoverImage src={foodfear}>
                {' '}
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  food fears
                </span>
              </HoverImage>
            </li>
            <li>
              {' '}
              Weird/unusual{' '}
              <HoverImage src={diet} size={100}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  diet regimes
                </span>
              </HoverImage>
            </li>
            <li>
              Poor{' '}
              <HoverImage src={bodyimage} size={140}>
                {' '}
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  body image
                </span>
              </HoverImage>
            </li>
            <li>
              <HoverImage src={overeating} size={200}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  Overeating
                </span>
              </HoverImage>
            </li>
            <li>
              <HoverImage src={undereating} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  Undereating
                </span>
              </HoverImage>
            </li>
            <li>
              <HoverImage src={label} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  Labeling
                </span>
              </HoverImage>{' '}
              foods as “good” or “bad”
            </li>
            <li>
              {' '}
              <HoverImage src={fasting} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  Skipping meals
                </span>
              </HoverImage>{' '}
              or items on the plate
            </li>
            <li>Difficulty eating in front of others</li>
            <li>
              Canceling or not attending plans surrounding eating and drinkin
            </li>
            <li>
              Attempting to{' '}
              <HoverImage src={loseweight} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  lose / control weight
                </span>
              </HoverImage>{' '}
            </li>
            <li>Negative thoughts about food and body</li>
            <li>
              {' '}
              <HoverImage src={exercise} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  Overexercising
                </span>
              </HoverImage>{' '}
            </li>
            <li>Nonnormative eating patterns</li>
            <li>
              Body{' '}
              <HoverImage src={dissatisfaction} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  Dissatisfaction
                </span>
              </HoverImage>{' '}
            </li>
            <li>Fixation on certain body parts</li>
            <li>Fixation on how foods are prepared</li>
            <li>
              Low{' '}
              <HoverImage src={selfConfidence} size={140}>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  self-esteem
                </span>
              </HoverImage>
            </li>
          </ul>
          <br />
          <Paragraph>
            It is important to note that if these distorted behaviours are very
            severe, frequent, and meet the full requirement of an Eating
            Disorder, then please seek the NEDIC site found{' '}
            <a
              className='text-blue-700 hover:bg-blue-50'
              href='https://nedic.ca/'
              target='_blank'
              rel='noreferrer'
            >
              HERE
            </a>
            .
          </Paragraph>
          <br />
          <Image
            alt='family support'
            src={support}
            height={600}
            width={600}
          ></Image>
          <br />
          <TopButton />
        </article>
      </div>
    </main>
  );
}
