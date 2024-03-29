'use client';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import { Tooltip } from 'flowbite-react';
import Image from 'next/image';
import debvsed from '@/resources/imgs/debed.png';
import BackQuote from '@/components/Typograpjy/BackQuote';
import ExampleTable from '@/components/UI/ExampleTable';
import TopButton from '@/components/UI/TopButton';

const actExamples = [
  {
    title: 'Example #1',
    example: 'Avoids all carbonhydrates unless they have exercised enough.',
  },
  {
    title: 'Example #2',
    example:
      'Looks at a menu and counts all the calories of each meal in advance',
  },
  { title: 'Example #3', example: 'Overeats when they are upset.' },
];

const cognitionExamples = [
  {
    title: 'Black-and-white thinking',
    example:
      '"If I eat a single piece of cake, I have failed my diet completely."',
  },
  {
    title: 'Overgeneralizing',
    example: '"I always mess up my meals. I\'ll never be able to eat healthy."',
  },
  {
    title: 'Catastrophizing',
    example:
      '"If I eat this slice of pizza, I\'ll gain 10 pounds overnight and never be able to lose it again."',
  },
  {
    title: 'Negative filtering',
    example:
      '"I ate a healthy salad for lunch, but it doesn\'t matter because I still ate a cookie after dinner."',
  },
];

const affectExamples = [
  {
    title: 'Example #1',
    example: '"I feel shame and guilt after eating and gets upset. "',
  },
  {
    title: 'Example #2',
    example:
      '"I feel intense anxiety and fear around food and eating, which makes it difficult to enjoy social events and meals with others."',
  },
  {
    title: 'Example #3',
    example:
      '"I feel frustrated and disappointed in myself when I don\'t stick to my strict eating plan, and it impacts my mood and productivity."',
  },
];

const perceiveExamples = [
  {
    title: 'Example #1',
    example:
      'An underweight female looks in the mirror and sees an obese figure.',
  },
  {
    title: 'Example #2',
    example:
      'A person with bulimia nervosa may perceive their binge eating behaviors as being out of control, even if they occur infrequently or are not actually excessive.',
  },
  {
    title: 'Example #3',
    example:
      'A person with binge eating disorder may perceive themselves as being unable to control their food intake, despite being able to stop or regulate their eating in other situations.',
  },
];

export default function WhyAndHow() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Causes & Mechanisms of Disordered Eating</Title>
          <br />
          <Paragraph>
            From childhood, our society and Western culture engrave certain
            ideals about individual appearance and what concerns individuals
            &quot;should have&quot; with regards to their body and food intake.
            Therefore, the transition into adolescence and adulthood can be very
            difficult for people due to the fact that one&apos;s body will
            change because of puberty. Since people have these ideals about the
            way that they &quot;should&quot; appear and what they
            &quot;should&quot; consume, these ideals can cause people to want to
            alter their appearance and food intake.
          </Paragraph>
          <br />
          <Title type='h3'>
            Why do people experiment with food intake and appearance?
          </Title>
          <Paragraph>
            Eating and individual concerns about one&apos;s body are very
            individualized. Therefore, there are countless reasons why people
            engage in disordered eating. Some common reasons for engaging in
            these behaviours:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Unhappy or unsatisfied with their physical appearance
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Social disconnection from others
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Coping mechanism for other mental health issues (Anxiety,
              Depression, Obsessive Compulsive Disorder)
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Life stressors (Death, divorces, ending of relationships, changes
              in careers, schools and jobs)
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Feels a lack of control within one&apos;s life, therefore
              controlling food intake and body appearance aids this lack of
              control
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Mirroring others&apos; behaviours (Family members, friends, peers,
              people on social media).
            </li>
            <p className='ml-4 text-lg font-light text-gray-600 dark:text-gray-400'>
              - Example: &quot;My mom does not eat over 500 calories, therefore,
              I should not&quot;.
            </p>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Our society is glorifies diet culture due to the fact that our
              society is fat-phobic.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Wanting to follow dietary advice from family members, peers,
              people who one looks up to, people on social media, and societal
              norms.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Biological differences in the wiring of one’s brain which may lead
              to larger fixations on food and body.
            </li>
          </ul>
          <br />
          <br />
          <Paragraph className=' font-bold'>
            These food intake and body alteration &quot;experiments&quot; can
            influence the way we think (cognition), the way we perceive
            (perception), the way we feel (affect), and lastly, the way we act
            (behaviours).
          </Paragraph>
          <br />
          <div className='mb-20'>
            <Image alt='Deb vs ED' src={debvsed} height={600} width={600} />
          </div>
          <Title type='h3'>Behaviours: The way we act</Title>
          <Paragraph>
            Behaviour is how someone acts in response to their environment
            internally; their thoughts and feelings and externally; other people
            and situations. Distorted behaviours are present with both
            disordered eating and eating disorders and impact an
            individual&apos;s actions towards what they eat and how they look.
          </Paragraph>
          <ExampleTable examples={actExamples} />
          <br />
          <br />
          <Title type='h3'>Cognition: The way we think</Title>
          <Paragraph>
            Cognition includes all the processes in which we accumulate
            knowledge. With eating disorders and disordered eating, individuals
            experience a disturbance in their cognition causing negative
            thinking patterns. For example:
          </Paragraph>
          <ExampleTable examples={cognitionExamples} />
          <br />
          <br />
          <Title type='h3'>Affect: The way we feel</Title>
          <Paragraph>
            Affect is the outward expression of our feelings about ourselves and
            others through our moods and emotions. With eating disorders, an
            individual&apos;s affective experiences are dysregulated which
            impacts their choices and perceptions of a given situation. As such,
            their ability to function efficiently throughout the day is
            distorted and can result in abnormal behaviours and actions.
            Disordered Eating can experience these moods and emotions, however,
            to a far less degree and impact on daily function.
          </Paragraph>
          <ExampleTable examples={affectExamples} />
          <br />
          <br />
          <Title type='h3'>Perception: The way we perceive</Title>
          <Paragraph>
            Perception is the way we recognize, organize and interpret
            information from external stimuli. The way in which we perceive
            information is dependent upon our unique characteristics and
            experiences and dictates our ability to receive meaningful knowledge
            and act accordingly. An individual with an eating disorder will have
            a distorted perception of themselves and those around them.
          </Paragraph>
          <ExampleTable examples={perceiveExamples} />
          <br />
          <TopButton next='knowledge/de/when' />
        </article>
      </div>
    </main>
  );
}
