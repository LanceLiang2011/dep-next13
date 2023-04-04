import React from 'react';

export default function NutrientsTable() {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='bg-pink-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Carbohydrates
            </th>
            <td className='px-6 py-4 bg-pink-50'>
              Primary source for providing energy (glucose).
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='bg-purple-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Proteins
            </th>
            <td className='bg-purple-50 px-6 py-4'>
              Builds and repairs tissues, hormones, and enzymes, as well as play
              a role in one’s immune system function.
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th
              scope='row'
              className='bg-yellow-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Fats
            </th>
            <td className='bg-yellow-50 px-6 py-4'>
              Another important source of energy, helping with the absorption of
              fcertain vitamins (Vitamins A, D, E, and K). Fats also provide
              insulation and cushioning for organs, and hormone production.{' '}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th
              scope='row'
              className='bg-green-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Vitamins
            </th>
            <td className='bg-green-50 px-6 py-4'>
              Helps regulate chemical processes in the body, as well as play a
              role in maintaining a healthy immune system.
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th
              scope='row'
              className='bg-gray-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Minerals
            </th>
            <td className='bg-gray-50 px-6 py-4'>
              Helps maintain healthy bones and teeth, as well as plays a role in
              maintaining a healthy immune system.
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th
              scope='row'
              className='bg-blue-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Water
            </th>
            <td className='bg-blue-50 px-6 py-4'>
              Helps regulates body temperature and maintains healthy skin.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
