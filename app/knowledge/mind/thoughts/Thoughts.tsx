import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import TopButton from '@/components/UI/TopButton';
import mindInfluence from '@/resources/imgs/mind-influence-thoughts.png';
import Image from 'next/image';

export default function Thoughts() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Understanding Thoughts </Title>
          <br />
          <Image
            src={mindInfluence}
            alt='influence of mind to eating'
            height={400}
            width={800}
          ></Image>
          <br />
          <Paragraph>
            Individuals have 70 000 thoughts per day. Our brain uses these
            thoughts to make interpretations about what certain things mean,
            what situations are, and the world around us. Without thoughts,
            people would be hopelessly lost.
          </Paragraph>
          <Paragraph>
            **Place Holder: AUTONOMIC THOUGHTS → ASSUMPTIONS → CORE BELIEFS**
          </Paragraph>
          <br />
          <Title type='h3'>Autonomic Thoughts</Title>
          <Paragraph>
            Autonomic thoughts are just thoughts that we automatically think
            throughout the day. Since we have so many thoughts a day, our brains
            cannot sit and process every single thought we have. Our brain is so
            smart that it filters out what&apos;s important and what&apos;s not.{' '}
          </Paragraph>
          <Paragraph>
            Maybe your morning coffee this morning tasted great, but you did not
            even realize that you thought it tasted great. This is an example of
            an autonomic thought that our brain filtered out because it did not
            seem important.{' '}
          </Paragraph>
          <Paragraph>
            As humans, we inevitably focus on the negatives compared to the
            positives. This is why we tend to fixate more on negative thoughts
            or look at the negatives within situations.{' '}
          </Paragraph>
          <br />
          <Title type='h3'>Assumptions</Title>
          <Paragraph>
            Based on previous life experiences, our thoughts can be or become
            assumptions about ourselves, others, the world, and life in general.
            These assumptions can be positive, for example, if you see something
            in your fridge, you can assume that it is safe to eat. These
            assumptions can also be negative, which are the assumptions we as
            human beings tend to fixate on.{' '}
          </Paragraph>
          <Title type='h3'>Core Beliefs</Title>
          <Paragraph>
            At the center of one&apos;s thoughts and assumptions are one&apos;s
            core beliefs. Core beliefs have been rooted in us from our life
            experiences. People are normally unaware of their core beliefs.
            Similar to thoughts and assumptions, core beliefs can also be
            positive or negative. When situations cause certain emotions,
            certain core beliefs will be triggers.
          </Paragraph>
          <BackQuote>
            EXAMPLE: One of Sally&apos;s core beliefs is that she is ugly, and
            on days when Sally has a poor body image, this core belief will be
            heightened instead of the core belief that she is beautiful.{' '}
          </BackQuote>
          <TopButton />
        </article>
      </div>
    </main>
  );
}
