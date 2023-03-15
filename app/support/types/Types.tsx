import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import HoverImage from '@/components/UI/HoverImage';
import React from 'react';
import psychologist from '@/resources/imgs/types/psychologist.png';
import psychotherapist from '@/resources/imgs/types/psychotherapist.png';
import socialworker from '@/resources/imgs/types/social-worker.png';
import ot from '@/resources/imgs/types/ot.png';
import psychiatrist from '@/resources/imgs/types/psychiatrist.png';
import gp from '@/resources/imgs/types/gp.png';
import dietician from '@/resources/imgs/types/dietician.png';
import nutritionist from '@/resources/imgs/types/nutritionist.png';

export default function Types() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Types of Support That Exist</Title>
          <Paragraph>
            When looking for support, it is important to know what types of
            support are available so you can find the support most beneficial to
            YOU!
          </Paragraph>
          <br />
          <div className='relative overflow-x-auto'>
            <table className='w-full text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Focus
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Profession Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    What their Profession Does/Accreditation
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    What they can help with
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Mind</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={psychologist} size={120}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Psychologist
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>
                        Have a Master&apos;s degree in Psychology, typically a
                        Ph.D. also
                      </li>
                      <li>A regulated healthcare profession </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>
                        Able to diagnose mental health conditions/illnesses
                      </li>
                      <li>Develop treatment plans for DE</li>
                      <li>
                        Develop treatment plans for other direct or indirect
                        issues relating to DE
                      </li>
                      <li>
                        Uses psychological tests to determine DE-related issues
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Mind</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={psychotherapist} size={90}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Psychotherapist
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Will have a Master&apos;s of Psychotherapy</li>
                      <li>A regulated healthcare profession</li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>
                        Can assist DE individuals in working through challenges
                      </li>
                      <li>
                        Mood and emotional regulation is typically worked
                        through using a psychotherapist
                      </li>
                      <li>Develop treatment plans for DE</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Mind</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={socialworker} size={120}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Social Worker
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    Will have a Bachelor&apos;s degree in Social Work, but
                    typically also have a Master&apos;s of Social Work
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Typically facilitate group-related DE sessions</li>
                      <li>Found in community based resources</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Mind</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={ot} size={120}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Occupational Therapist
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>
                        Have a Master&apos;s of Occupational Therapy degree
                      </li>
                      <li>A regulated healthcare profession</li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'></td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Mind / Doctor</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={psychiatrist} size={120}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Psychiatrist
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Have a Medical school degree</li>
                      <li>Additional psychiatry-related schooling</li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Assess an individuals DE</li>
                      <li>Able to develop treatment plan for DE</li>
                      <li>
                        Able to prescribe medications if necessary for other
                        issues influencing DE (ex. Anxiety, depression, OCD)
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Doctor</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={gp} size={80}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        General Practioner
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Medical school degree</li>
                      <li>Typically family doctors</li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>
                        Typically not formally trained within ED or DE, but have
                        some knowledge
                      </li>
                      <li>Good first person to go to, to seek help</li>
                      <li>Understand signs and symptoms</li>
                      <li>Can direct to other resources</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Food</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={dietician} size={120}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Dietician
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Regulated profession in Ontario</li>
                      <li>Obtained a 4-year degree in nutrition</li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Can prescribe dietary treatments for DE</li>
                      <li>Provide medical nutrition therapy</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>Food</td>
                  <td className='px-6 py-4'>
                    <HoverImage src={nutritionist} size={120}>
                      <span className='underline decoration-2 decoration-blue-400 dark:decoration-blue-600'>
                        Nutritionist
                      </span>
                    </HoverImage>
                  </td>
                  <td className='px-6 py-4'>Not accredited</td>
                  <td className='px-6 py-4'>
                    <ul className='list-disc list-inside'>
                      <li>Can provide nutritional information</li>
                      <li>Can address fears that relate to foods and DE</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
