import FirstParagraph from '@/components/Typograpjy/FirstPara';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import React from 'react';

export default function Whatis() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>
            What is{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              Disordered Eating
            </span>
            ?
          </Title>
          <br />
          <FirstParagraph>
            <span className='underline underline-offset-2 decoration-4 decoration-blue-400 dark:decoration-blue-600'>
              Disordered eating
            </span>{' '}
            is a term used to describe a range of abnormal eating behaviours
            that do not warrant the diagnosis of an eating disorder. It includes
            a subset of behaviours that although similar, do not align with the
            diagnostic criteria of an eating disorder. As such, disordered
            eating is a descriptive phrase, not a clinical diagnosis.
          </FirstParagraph>
          <br />
          <Title type='h2'>
            How is Disordered Eating different from an Eating Disorder?{' '}
          </Title>
          <UnderlineSubtitle>
            How are Eating Disorders Diagnosed?
          </UnderlineSubtitle>
          <Paragraph>
            The primary and most significant difference between Eating Disorders
            and disordered eating is they are a clinical diagnosis.
          </Paragraph>
          <Paragraph>
            Eating Disorders can be defined as a group of mental health
            conditions that involve persistent disturbances in behaviour,
            perception, cognition, and affect. Those who suffer from eating
            disorders experience many disturbances in their day-to-day function
            and the severity and occurrence are much more frequent and severe
            than disordered eating.
          </Paragraph>
          <Paragraph>
            In Canada, Eating Disorders can be diagnosed by a psychiatrist,
            psychologist, or general practitioner based on a set of criteria
            derived from the Diagnostic and Statistical Manual of Mental
            Disorders, Fifth Edition (DSM-5) published by the American
            Psychiatric Association (APA). The criteria outlined in the DSM-5
            include behavioural, emotional and weight alterations that affect an
            individual&apos;s physical, psychological and social function.
          </Paragraph>
          <Paragraph>
            There are several types of eating disorders that differ in physical
            and psychological symptoms. The most common types include Anorexia
            Nervosa, Bulimia Nervosa, Binge Eating Disorders,
            Avoidant/Restrictive Food Intake Disorder, and Other Specified
            Feeding and Eating Disorders. For more information on the different
            types of Eating Disorders please click{' '}
            <a
              className='text-blue-400 dark:text-blue-600'
              target='_blank'
              rel='noreferrer'
              href='https://www.nimh.nih.gov/health/topics/eating-disorders'
            >
              HERE
            </a>
            .
          </Paragraph>
          <br />
          <UnderlineSubtitle>
            Behaviours: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-pink-400'>
              act
            </span>
          </UnderlineSubtitle>
          <Paragraph>
            Behaviour is how someone acts in response to their environment
            internally; their thoughts and feelings and externally; other people
            and situations. Distorted behaviours are present with both
            disordered eating and eating disorders and impact an
            individual&apos;s actions towards what they eat and how they look.
          </Paragraph>
          <div className='flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'>
            <span className='px-4'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Example A
              </h5>
              <p className='font-bold text-gray-700 dark:text-gray-400'>
                Avoids all carbs unless they have exercised enough.
              </p>
            </span>
            <span className='px-4'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Example B
              </h5>
              <p className='font-bold text-gray-700 dark:text-gray-400'>
                Looks at a menu and counts all the calories of each meal in
                advance
              </p>
            </span>
            <span className='px-4'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Example C
              </h5>
              <p className='font-bold text-gray-700 dark:text-gray-400'>
                Overeats when they are upset about something.
              </p>
            </span>
          </div>
          <br />
          <UnderlineSubtitle>
            Cognition: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400'>
              think
            </span>
          </UnderlineSubtitle>
          <Paragraph>
            Cognition includes all the processes in which we accumulate
            knowledge. With an eating disorder, individuals experience a
            disturbance in their cognition causing inaccurate or exaggerated
            thought patterns such as black-and-white thinking, overgeneralizing,
            catastrophizing, blaming, and negative filtering.
          </Paragraph>
          <blockquote className='p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
            <p className='text-md italic font-medium leading-relaxed text-gray-900 dark:text-white'>
              Example: &quot;If I don&apos;t exercise today then I won&apos;t
              eat dinner tonight&quot;
            </p>
          </blockquote>
          <br />
          <UnderlineSubtitle>
            Affect: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              feel
            </span>
          </UnderlineSubtitle>
          <Paragraph>
            Affect is the outward expression of our feelings about ourselves and
            those around us through our moods and emotions. With eating
            disorders, an individual&apos;s affective experiences are
            dysregulated which impacts their choices and perceptions of a given
            situation. As such, their ability to function efficiently throughout
            the day is distorted and can result in abnormal behaviours and
            actions.
          </Paragraph>
          <blockquote className='p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
            <p className='text-md italic font-medium leading-relaxed text-gray-900 dark:text-white'>
              Example: &quot;I Feels shame and guilt after eating and gets
              upset. &quot;
            </p>
          </blockquote>
          <br />
          <UnderlineSubtitle>
            Perception: The way we{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-indigo-800 from-purple-600'>
              perceive
            </span>
          </UnderlineSubtitle>
          <Paragraph>
            Perception is the way we recognize, organize and interpret sensory
            information from external stimuli. The way in which we perceive
            information is dependent upon our unique characteristics and
            experiences and dictates our ability to receive meaningful knowledge
            and act accordingly. An individual with an eating disorder will have
            a distorted perception of themselves and those around them. As such,
            they are challenged to recognize and process the reality of given
            situations.
          </Paragraph>
          <div
            className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
            role='alert'
          >
            <span className='font-medium'>Example:</span> An underweight female
            looks in the mirror and sees an obese figure.
          </div>
          <br />
          <Title type='h2'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l to-red-600 from-blue-400'>
              Continuum
            </span>{' '}
            of Eating
          </Title>
          <Paragraph>
            Eating can be viewed on a continuum that spans from healthy eating
            to disordered eating to eating disorders. Throughout our lives, we
            can experience fluctuations across the continuum based on our
            lifestyle, situations, and experiences. Regardless of where an
            individual falls on the continuum, their experience is as equally
            important as another and valid and deserving of counselling and
            support.
          </Paragraph>
          <br />
          <UnderlineSubtitle>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-400'>
              Healthy
            </span>{' '}
            Eating
          </UnderlineSubtitle>
          <Paragraph>
            Healthy eating is different for everybody and depends on an
            individual&apos;s personal preferences, needs, cultural influences,
            and body composition. In general, healthy eating involves a balanced
            diet, a variety of foods, an appropriate calorie intake, and a
            healthy body weight. Individuals who demonstrate healthy eating
            behaviours are not preoccupied with their body image and perform
            regular bouts of exercise. They are{' '}
            <span className='underline decoration-2 decoration-red-400 dark:decoration-red-600'>
              more likely{' '}
            </span>
            to be intuitive with their body&apos;s needs and eat for
            nourishment, pleasure, and joy.{' '}
          </Paragraph>
          <br />
          <UnderlineSubtitle>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-emerald-400'>
              Disordered
            </span>{' '}
            Eating
          </UnderlineSubtitle>
          <Paragraph>
            Individuals who experience disordered eating behaviours express
            recurring negative preoccupations and associations with food,
            dieting, exercise, and body image. This can include regular bouts of
            overeating and undereating, distress caused by body size and image,
            fixation and obsessiveness around exercise, and an unbalanced
            irregular diet. Individuals who experience disordered eating can
            experience a lack of self-worth and associate their food intake with
            their perception of themselves and others. This most often can
            result in feelings and shame and guilt.
          </Paragraph>
          <br />
          <UnderlineSubtitle>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400'>
              Eating Disorder
            </span>{' '}
          </UnderlineSubtitle>
          <Paragraph>
            Eating Disorders are a group of serious and complex mental health
            illnesses that are characterized by persistent disturbances in
            behaviours, thoughts and attitudes toward foods, eating, and body
            size. There are conditions that affect an individual&apos;s
            physical, psychological and social function and are clinically
            diagnosed. Individuals may experience restrictive eating, food
            avoidance, binge eating, purging or laxative misuse, and compulsive
            exercise depending upon their diagnosis. As such, this can result in
            severe alterations to their physical and mental function and impact
            their overall quality of life.{' '}
          </Paragraph>
          <br />
          <Title type='h2'>Importance of Understanding & Taking Action</Title>
          <Paragraph>
            Understanding the influence disordered eating can have on your
            health and well-being is important as it can lead to further health
            complications.
          </Paragraph>
          <Paragraph>
            Disordered eating can have significant long-term health
            repercussions that can affect individuals physically and mentally.
            Individuals who demonstrate disordered eating behaviours can be at
            risk for the development of eating disorders, mood disorders, and
            other conditions including hypertension, diabetes, heart problems,
            and digestive issues.
          </Paragraph>
          <Paragraph>
            It is important to recognize the potential complications of
            disordered eating before potential problems could escalate. The way
            we eat and fuel our bodies is critical to our health and well-being
            therefore it is essential to intervene and use tools and resources
            to improve our relationship with our body and our mind.
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
