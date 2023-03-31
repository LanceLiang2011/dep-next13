import Link from 'next/link';
import Title from '@/components/Typograpjy/Title';
import Paragraph from '@/components/Typograpjy/Paragraph';

export default function HomePage() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto mb-8 lg:mb-16'>
          <Title type='h1'>Learn:</Title>

          <Paragraph>
            Explore the topics below to gain insights into eating behaviors, the
            functioning of the mind, and how our bodies move and get fueled.
          </Paragraph>
        </div>

        <div className='flex justify-between'>
          <Link className=' button-blue' href='/knowledge/de'>
            My Eating
          </Link>

          <Link className=' button-blue' href='/knowledge/mind'>
            My Mind
          </Link>

          <Link className=' button-blue' href='/knowledge/body'>
            My Body
          </Link>
        </div>
      </div>
    </section>
  );
}
