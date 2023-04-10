import Title from '@/components/Typograpjy/Title';
import Paragraph from '@/components/Typograpjy/Paragraph';

export default function DirectPage() {
  return (
    <div>
      <Title type='h1'>
        National Eating Disorder Information Centre (NEDIC)
      </Title>
      <br />
      <Paragraph>
        NEDIC provides information, resources, referrals and support to
        Canadians affected by eating disorders. You may like to visit{' '}
        <a
          className=' text-blue-500'
          href='https://nedic.ca/'
          target='_blank'
          rel='noreferrer'
        >
          their website
        </a>{' '}
        for further information
      </Paragraph>
      <br />
      <a
        className='button-blue inline-block'
        href='https://nedic.ca/blog/what-can-the-helpline-do-for-me/'
        target='_blank'
        rel='noreferrer'
      >
        What Can The Helpline Do For Me?
      </a>
    </div>
  );
}
