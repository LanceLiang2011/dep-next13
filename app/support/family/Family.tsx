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
            disordered eating behaviours, as they are very individualized and
            can have significant impacts on the health and well-being of
            someone. Some common distorted behaviours with disordered eating
            include, but are not limited to:
          </Paragraph>
          <ul className='max-w-xl text-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li>Weird/unusual food fears</li>
            <li> Weird/unusual diet regimes</li>
            <li>Poor body image</li>
            <li>Overeating</li>
            <li>Undereating</li>
            <li>Labeling foods as “good” or “bad”</li>
            <li> Skipping meals or items on the plate</li>
            <li>Difficulty eating in front of others</li>
            <li>
              Canceling or not attending plans surrounding eating and drinkin
            </li>
            <li>Attempting to lose / control weight</li>
            <li>Negative thoughts about food and body</li>
            <li> Overexercising</li>
            <li>Nonnormative eating patterns</li>
            <li>Body Dissatisfaction</li>
            <li>Fixation on certain body parts</li>
            <li>Fixation on how foods are prepared</li>
            <li>Low self-esteem</li>
          </ul>
          <br />
          <Paragraph>
            It is important to note that if these disordered eating become of
            significant concern, then please seek the National Eating Disorder
            Information Centre (NEDIC) site found{' '}
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
