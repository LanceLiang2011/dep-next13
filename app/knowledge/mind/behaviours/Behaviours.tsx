import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import mindInfluence from '@/resources/imgs/mind-influence.png';
import Image from 'next/image';

export default function Behaviours() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Understanding Behaviour </Title>
          <br />
          <Image
            src={mindInfluence}
            alt='influence of mind to eating'
            height={400}
            width={800}
          ></Image>
          <Title type='h3'>Understanding Behaviour</Title>
          <Paragraph>
            Behaviour is just the action piece of a thought and emotion. It is
            important to try and understand your thoughts and emotions before
            engaging in behaviours that might cause you or others harm. A useful
            way to understand situations before acting on thoughts and emotions
            is to understand facts versus feelings versus opinions.
          </Paragraph>
          <br />
          <Title type='h3'>Understanding Facts vs. Feelings vs. Opinion</Title>
          <Paragraph>
            Facts must have verifiability and validity to them. “I had a
            disagreement with my partner” is an example of a fact, as it can be
            verified to have occurred. Whereas saying “My partner hates me” is
            based on feelings and opinions one has about the situation that
            occurred. Being able to differentiate this is very important,
            especially when trying to understand thoughts and emotions
            surrounding disordered eating.
          </Paragraph>
          <Paragraph className='text-gray-900 dark:text-white font-bold'>
            EXAMPLE:{' '}
          </Paragraph>
          <BackQuote>
            &quot;I decided to go out for dinner with my partner and now I feel
            very guilty because we both overindulged. I do not want to eat much
            tomorrow because I ate too much&quot;
          </BackQuote>
          <div className='p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'>
            <span className='font-medium'>Fact:</span> You went to a nice dinner
            with your partner.
          </div>
          <div className='p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'>
            <span className='font-medium'>Feeling:</span> Feeling guilty and
            sad.
          </div>
          <div className='p-4 mb-4 text-violet-800 rounded-lg bg-violet-50 dark:bg-gray-800 dark:text-violet-400'>
            <span className='font-medium'>Opinion:</span> I should not have
            overindulged.
          </div>
          <Paragraph>
            While the guilt and sadness could be valid feelings, it does not
            mean that your partner also feels the same guilt. Therefore, your
            actions moving forward because of this situation and thoughts will
            be different from your partner&apos;s. Understanding your thoughts
            could also influence your actions moving forward.
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
