import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import TopButton from '@/components/UI/TopButton';
import mindInfluence from '@/resources/imgs/mind-influence-emotions.png';
import Image from 'next/image';

export default function Emotions() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Understanding Emotions</Title>
          <br />
          <Image
            src={mindInfluence}
            alt='influence of mind to eating'
            height={400}
            width={800}
          ></Image>
          <br />
          <Title type='h3'>Understanding Emotion</Title>
          <Paragraph>
            As we know, thoughts (and assumptions) can create an emotional
            response. Emotion is caused by the feeling of a thought or thoughts.
            These emotional responses can trigger more thoughts and assumptions,
            and then ultimately behaviour/action.
          </Paragraph>
          <br />
          <Title type='h3'>
            Negative Thoughts, Assumptions, and Emotions:{' '}
          </Title>
          <Paragraph>
            Negative thinking will always be present and different for each
            person. There are several different styles of negative thinking, but
            these are six common thinking styles.{' '}
          </Paragraph>
          <h2 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
            Different Types of Negative Thinking Styles:
          </h2>
          <ol className='space-y-4 text-lg text-gray-500 list-decimal list-inside dark:text-gray-400'>
            <li>
              All or nothing thinking” / Black and White Thinking
              <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
                <li>Thinking within absolutes only</li>
                <li>&quot;I never will never be skinny&quot;</li>
                <li>
                  Nesting tons of folders in your source code is also not
                  helpful.
                </li>
              </ul>
            </li>
            <li>
              Catastrophic thinking
              <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
                <li>
                  This type of thinking style is that you only see the worst
                  possible outcome in the situation
                </li>
                <li>
                  &quot;If I don&apos;t workout today, I will gain the 25 pounds
                  I have already lost&quot;
                </li>
              </ul>
            </li>
            <li>
              Jumping to conclusions
              <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
                <li>
                  Interpreting what the situation is with little to no evidence
                </li>
                <li>
                  &quot;My partner does not think I am beautiful because they
                  did not tell me I am beautiful &quot;
                </li>
              </ul>
            </li>
            <li>
              Overgeneralizing
              <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
                <li>Making broad assumptions based on one or minimal events</li>
                <li>
                  &quot;I did not look my prettiest at work today, so I must
                  always look ugly &quot;
                </li>
              </ul>
            </li>
            <li>
              Emotional Reasoning
              <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
                <li>Emotions reflecting as the way things actually are</li>
                <li>
                  &quot;I feel fat and uncomfortable with my body today,
                  therefore I must always look fat and uncomfortable &quot;
                </li>
              </ul>
            </li>
            <li>
              Negative Filtering
              <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
                <li>
                  As we know, we tend to look at the negatives. This is what we
                  call negative filtering. Negative filtering happens when you
                  only look at the negative aspects of a whole situation or
                  event. You could receive 20 reviews at work about how
                  wonderful you are but tend to only think about the 1 review in
                  which they did not feel the same. Identifying when you are
                  negative filtering can help you understand whether your
                  thoughts, emotions, and feelings surrounding a situation are
                  valid.
                </li>
              </ul>
            </li>
          </ol>
          <br />
          <TopButton />
        </article>
      </div>
    </main>
  );
}
