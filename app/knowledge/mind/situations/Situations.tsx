import BackQuote from '@/components/Typograpjy/BackQuote';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import TopButton from '@/components/UI/TopButton';
import mindInfluence from '@/resources/imgs/mind-influence-situation.png';
import Image from 'next/image';

export default function Situations() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Understanding Situations </Title>
          <br />
          <Image
            src={mindInfluence}
            alt='influence of mind to eating'
            height={400}
            width={800}
          ></Image>
          <br />
          <Paragraph>
            In essence, a situation is just when something happens. Situations
            occur every day, varying in weight of importance. Situations
            initiate the flow of thoughts, emotions, and then behaviour. Two
            people can experience the same situation and have completely
            different thoughts, emotions, and behaviours based on that same
            event.
          </Paragraph>
          <br />
          <Title type='h3'>
            SITUATION: Molly and Abbey both went to the movies and ate a bunch
            of candy.
          </Title>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th></th>
                <th scope='col' className='px-6 py-3'>
                  Molly
                </th>
                <th scope='col' className='px-6 py-3'>
                  Abbey
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  Thought:
                </th>
                <td className='px-6 py-4'>
                  <BackQuote>
                    “I ate so much candy, and I hate how enormous my body looks”
                  </BackQuote>
                </td>
                <td className='px-6 py-4'>
                  <BackQuote>
                    “I had so much fun going to the movies with Molly and eating
                    all that candy”
                  </BackQuote>
                </td>
              </tr>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  Emotion:
                </th>
                <td className='px-6 py-4'>
                  Sad, upset with herself because she ate so much candy,
                  discontent with her body
                </td>
                <td className='px-6 py-4'>
                  Happy, content with her time with Molly
                </td>
              </tr>
              <tr className='bg-white dark:bg-gray-800'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  Behaviour:
                </th>
                <td className='px-6 py-4'>
                  Molly develops a negative opinion of herself because she
                  thinks that her body is ugly, and changes what she eats the
                  next day to compensate for the candy she ate.{' '}
                </td>
                <td className='px-6 py-4'>
                  Abbey was super happy and wants to plan another movie night
                  with Molly.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <TopButton next='knowledge/mind/thoughts' />
        </article>
      </div>
    </main>
  );
}
