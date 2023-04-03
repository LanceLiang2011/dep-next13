import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import TopButton from '@/components/UI/TopButton';
import mindInfluence from '@/resources/imgs/mind-influence.png';
import Image from 'next/image';

export default function Influence() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>How Does Our Mind Influence Our Eating ?</Title>
          <br />
          <Paragraph>
            Engaging in disordered eating behaviour/symptoms can be the
            product/action of a situation that occurred or the product/action of
            thoughts we have. Understanding how we each individually interpret
            situations, how we individually think, how we show emotions, and how
            these components can all influence behaviour/action, allows us to
            better understand ourselves, and possibly change/stop engaging in
            negative behaviours, like disordered eating.{' '}
          </Paragraph>
          <br />
          <Image
            src={mindInfluence}
            alt='influence of mind to eating'
            height={400}
            width={800}
          ></Image>
          <br />
          <TopButton />
        </article>
      </div>
    </main>
  );
}
