import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import Image from 'next/image';
import React from 'react';
import foods from '@/resources/imgs/foods.jpg';
import Badge from '@/components/Typograpjy/Badge';

export default function Nutrition() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h2'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              Diet
            </span>{' '}
            and{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-emerald-400'>
              Medicine
            </span>
          </Title>
          <br />
          <Title type='h2'>Are there &quot;best diet&quot; for me?</Title>
          <Paragraph>
            There is no single{' '}
            <span className='line-through decoration-pink-600/30 decoration-4'>
              &quot;best diet&quot;
            </span>{' '}
            that is universally applicable to all people. This is because
            individual nutritional needs and preferences vary based on factors
            such as age, gender, weight, activity level, and health status.
          </Paragraph>
          <Paragraph>
            However, there are certain{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-lime-400 font-bold'>
              principles
            </span>{' '}
            of healthy eating that are generally recognized as beneficial for
            most people. These principles include:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Consuming a variety of foods from all food groups, including
              fruits, vegetables, whole grains, lean proteins, and healthy fats.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Limiting processed foods and added sugars, as well as saturated
              and trans fats.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Balancing calorie intake with physical activity to maintain a
              healthy weight.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Drinking plenty of water and limiting sugary drinks.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              In addition, some people may have specific dietary requirements
              based on health conditions or personal beliefs, such as
              vegetarianism, veganism, or gluten-free diets. In these cases, it
              is important to seek the advice of a healthcare professional or
              registered dietitian to ensure that the necessary nutrients are
              being obtained from the diet.
            </li>
          </ul>
          <Paragraph>
            In summary, while there is no one best diet, a balanced and
            nutritious diet that meets an individual&quot;s specific needs and
            requirements is the key to good health.
          </Paragraph>
          <br />
          <Title type='h2'>
            Among those &quot;fad diets&quot; which is best for me?
          </Title>
          <Paragraph>
            It is important to approach the idea of &quot;fad diets&quot; with
            caution🧐, as many of these diets may not be scientifically
            supported, nutritionally balanced, or sustainable in the long term.
          </Paragraph>
          <Paragraph>
            In order to determine the best diet for you, it is recommended to{' '}
            <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              consult a healthcare professional or registered dietitian
            </span>{' '}
            who can take into consideration your individual needs, medical
            history, and health goals. They can help you create a healthy eating
            plan that meets your nutritional needs and supports your overall
            health and well-being.
          </Paragraph>
          <Paragraph>
            It is also important to keep in mind that quick-fix or restrictive
            diets are unlikely to be effective or sustainable in the long term.
            A healthy diet should be{' '}
            <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              balanced, varied, and include a variety of foods from all food
              groups
            </span>
            . In addition,{' '}
            <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              making gradual, sustainable changes
            </span>{' '}
            to your eating habits, such as reducing added sugars and increasing
            fruit and vegetable intake, can have a positive impact on your
            health over time.
          </Paragraph>
          <br />
          <span className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <Image
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
              src={foods}
              alt='food'
              height={500}
              width={500}
            />
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Dietitian vs Nutritionist?
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  {' '}
                  In Canada, “Dietitian,” and “Registered Dietitian,” are
                  protected-titles, only people who have the following
                  qualifications can call themselves one.
                </span>{' '}
                In all other provinces and territories except Nova Scotia,
                Quebec and Alberta, Nutritionist is not a protected title.
                <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                  {' '}
                  Anyone could legally call themselves a Nutritionist without
                  reliable qualifications.
                </span>{' '}
              </p>
            </div>
          </span>
          <br />
          <Title type='h2'>
            Are there &quot;diet pills&quot; that can help me lose weight? Are
            they safe?
          </Title>
          <Paragraph>
            Diet pills are a type of weight loss supplement that claim to help
            people lose weight. Some of these pills contain natural ingredients,
            such as green tea extract or fiber, while others contain
            prescription drugs or other potentially dangerous substances.
          </Paragraph>
          <Paragraph>
            While some diet pills may have a modest effect on weight loss, it is
            important to keep in mind that the benefits are often small and
            temporary. Additionally, many diet pills can have side effects, some
            of which can be serious, and may interact with other medications.
          </Paragraph>
          <Paragraph>
            Prescription weight loss drugs, such as orlistat, lorcaserin, and
            phentermine-topiramate, are only available under the supervision of
            a healthcare professional, and are only recommended for use in
            people who are classified as obese or have a body mass index (BMI)
            of at least 30. These drugs should be used in combination with a
            reduced calorie diet and increased physical activity, and their
            safety and effectiveness should be monitored regularly by a
            healthcare professional.
          </Paragraph>
          <Paragraph>
            In contrast, over-the-counter diet pills are not regulated by the
            Food and Drug Administration (FDA), and their safety and efficacy
            may not be fully understood. Some of these pills contain potentially
            harmful ingredients, and taking them can lead to serious health
            problems.
          </Paragraph>
          <Paragraph>
            Therefore, it is important to be cautious when considering the use
            of diet pills, and to{' '}
            <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              consult a healthcare professional before starting any weight loss
              supplement
            </span>
            . It is also important to remember that there is no magic solution
            for weight loss, and the most effective and safe way to lose weight
            and maintain a healthy weight is through a balanced and nutritious
            diet, combined with regular physical activity.
          </Paragraph>
          <br />
          <Title type='h2'>Is laxatives helpful for losing weight?</Title>
          <Paragraph>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400 font-bold'>
              No
            </span>
            ,{' '}
            <span className='line-through decoration-pink-600/30 decoration-4'>
              laxatives
            </span>{' '}
            are not a safe or effective method for losing weight. Laxatives work
            by increasing bowel movements and promoting the elimination of waste
            from the body. While they may result in a temporary reduction in
            body weight,{' '}
            <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
              this is due to the loss of water and electrolytes, not fat.
            </span>
          </Paragraph>
          <Paragraph>
            In addition, using laxatives regularly can lead to a number of
            health problems, such as dehydration, electrolyte imbalances, and
            damage to the digestive system. Over time, relying on laxatives to
            regulate bowel movements can also lead to a loss of normal bowel
            function, making it difficult to have a bowel movement without the
            use of laxatives.
          </Paragraph>
          <Paragraph>
            Furthermore, laxatives do not address the root cause of weight gain,
            which is often due to a combination of factors such as poor dietary
            choices, lack of physical activity, and behavioral patterns.
          </Paragraph>
          <Paragraph>
            Therefore, it is not recommended to use laxatives as a method for
            losing weight, as they can be harmful to health and do not address
            the underlying causes of weight gain. Instead, a healthy weight can
            be achieved and maintained through a balanced and nutritious diet,
            combined with regular physical activity.
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
