import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import Image from 'next/image';
import React from 'react';
import foods from '@/resources/imgs/foods.jpg';
import TopButton from '@/components/UI/TopButton';

export default function Nutrition() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Diet and Nutritional Medicine</Title>
          <br />
          <Title type='h2'>How lifestyle can influence nutrition?</Title>
          <Paragraph>
            One&apos;s lifestyle can greatly impact your dietary habits and
            choices, and vice versa. Here are some ways in which they are
            interconnected:
          </Paragraph>
          <ul className='list-disc ml-8'>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-pink-400 font-bold'>
                Physical activity level
              </span>
              : People who are physically active may require more calories and
              nutrients than individuals who do not participate in physical
              activity. They may benefit from a diet that is higher in
              carbohydrates, proteins, and healthy fats.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 font-bold'>
                Time availability
              </span>
              : A busy lifestyle may lead to a reliance on convenient or fast
              food, which is often high in calories, unhealthy fats, and added
              sugars. On the other hand, a diet that emphasizes whole,
              unprocessed foods can complement a busy lifestyle by providing the
              nutrients and energy needed to maintain health and well-being.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-yellow-400 font-bold'>
                Food environment
              </span>
              : People who live in areas with limited access to healthy food
              options may find it more challenging to maintain a balanced diet.
              A diet that emphasizes whole, unprocessed foods, along with
              regular physical activity, can support good health even in
              food-insecure areas.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-purple-400 font-bold'>
                Personal preferences and cultural background
              </span>
              : Individual food preferences and cultural background can greatly
              impact dietary habits. Incorporating culturally-specific foods
              into a balanced diet can help individuals maintain their cultural
              heritage and enjoyment of food.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400 font-bold'>
                Stress levels
              </span>
              : Stressful lifestyles can lead to unhealthy eating habits, such
              as overeating, snacking on &quot;junk food&quot;, or skipping
              meals. A diet that is rich in whole, unprocessed foods, along with
              stress-management techniques, can support good health and
              well-being.
            </li>
          </ul>
          <br />
          <Paragraph>
            Making gradual, sustainable changes to your lifestyle and diet,
            based on your individual needs and preferences, can have a positive
            impact on your health over time.
          </Paragraph>
          <br />
          <Title type='h2'>Is there a &quot;best diet&quot; for me?</Title>
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
              and trans fats like commercial baked goods and fried foods.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Balancing calorie intake with physical activity to maintain a
              healthy weight.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Drinking plenty of water and limiting sugary drinks, like pop
              drinks.
            </li>
            <li className='text-lg font-light text-gray-600 dark:text-gray-400'>
              Some people may have specific dietary requirements based on health
              conditions or personal beliefs, such as vegetarianism, veganism,
              or gluten-free diets. In these cases, it is important to seek the
              advice of a healthcare professional or registered dietitian to
              ensure that the necessary nutrients are being obtained from the
              diet.
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
            A fad diet is a weight loss plan or dietary trend that becomes
            popular for a short period of time and is often promoted as a quick
            and easy way to lose weight. It is important to approach the idea of
            &quot;fad diets&quot; with caution🧐, as many of these diets may not
            be scientifically supported, nutritionally balanced, or sustainable
            in the long term.
          </Paragraph>
          <Paragraph>
            In order to determine the best diet for you, it is recommended to
            consult a healthcare professional or registered dietitian who can
            take into consideration your individual needs, medical history, and
            health goals.
          </Paragraph>
          <Paragraph>
            It is also important to keep in mind that a &quot;quick-fix&quot; or
            restrictive diets are unlikely to be effective or sustainable in the
            long term. A healthy diet should be balanced, varied, and include a
            variety of foods from all food groups. In addition, making gradual
            and sustainable changes to your eating habits can have a positive
            impact on your health over time.
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
                In Canada, “Registered Dietitians,” are regulated healthcare
                professionals, each having specific qualifications depending on
                the provinces and territories they work in. (Exceptions to this
                are Nova Scotia, Quebec, and Alberta). Nutritionists are not a
                regulated healthcare profession, meaning anyone could legally
                call themselves a nutritionist without reliable, regulated
                qualifications.
              </p>
            </div>
          </span>
          <br />
          <Title type='h2'>What do &quot;diet pills&quot; do?</Title>
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
            of which can be very serious, and may interact with other
            medications.
          </Paragraph>
          <Paragraph>
            It is important to be cautious when considering the use of diet
            pills, and to consult a healthcare professional before starting any
            weight loss supplement . It is also important to remember that there
            is no magic solution for weight loss, and the most effective and
            safe way to lose weight and maintain a healthy weight is through a
            balanced and nutritious diet, combined with regular physical
            activity.
          </Paragraph>
          <br />
          <Title type='h2'>Are laxatives helpful for losing weight?</Title>
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
            body weight, this is due to the loss of water and electrolytes, not
            fat.
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

          <TopButton next='/knowledge' />
        </article>
      </div>
    </main>
  );
}
