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
import TopButton from '@/components/UI/TopButton';

export default function Types() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <Title type='h1'>Types of Support That Exist</Title>
          <Paragraph>
            When looking for support, it can be difficult to know what each type
            of health professional could provide. Below are the main types of
            healthcare professionals that relate to disordered eating and eating
            disorders. Please note that this is just an overview of what might
            be possible for them to provide.
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
                    What they may be able to help with
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Master&apos;s degree in Psychology, typically a Ph.D.
                        also
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Regulated healthcare profession.
                      </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Able to diagnose mental health conditions/illnesses.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Develop treatment plans for disordered eating.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Develop treatment plans for other direct or indirect
                        issues relating to disordered eating.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Uses psychological tests to determine disordered
                        eating-related issues.
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Master&apos;s of Psychotherapy.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Regulated healthcare profession.
                      </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Can assist disordered eating individuals in working
                        through challenges.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Mood and emotional regulation is typically worked
                        through using a psychotherapist.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Develop treatment plans for disordered eating.
                      </li>
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Bachelor&apos;s degree in Social Work.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        May also have a Master&apos;s of Social Work.
                      </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Typically facilitate group-related disordered eating
                        sessions.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Found in community based resources.
                      </li>
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Master&apos;s of Occupational Therapy.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        A regulated healthcare profession.
                      </li>
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Medical school degree.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Additional psychiatry-related schooling.
                      </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Assess an individuals disordered eating.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Able to develop treatment plan for disordered eating.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Able to prescribe medications if necessary for other
                        issues influencing disordered eating (ex. Anxiety,
                        depression, Obsessive-compulsive disorder).
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Medical school degree.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Typically family doctors.
                      </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Typically not formally trained within eating disorder or
                        disordered eating, but have some knowledge.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        An ideal first person to go to when seeking help.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Understand signs and symptoms.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Can direct to other resources.
                      </li>
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
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Regulated profession in Ontario.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        4-year degree in nutrition.
                      </li>
                    </ul>
                  </td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Can prescribe dietary treatments for disordered eating.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Provide medical nutrition therapy.
                      </li>
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
                  <td className='px-6 py-4'>Not accredited.</td>
                  <td className='px-6 py-4'>
                    <ul className='my-list list-none p-0 m-0'>
                      <li className='pl-5 ml-5 list-disc'>
                        Can provide nutritional information.
                      </li>
                      <li className='pl-5 ml-5 list-disc'>
                        Can address fears that relate to foods and disordered
                        eating.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <TopButton />
        </article>
      </div>
    </main>
  );
}
