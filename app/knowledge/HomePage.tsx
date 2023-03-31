import SectionHome from '@/components/UI/SectionHome';

const content = {
  title: 'Learn:',
  para: 'Explore the topics below to gain insights into eating behaviors, the functioning of the mind, and how our bodies move and get fueled.',
  btns: [
    { btn: 'My Eating', link: '/knowledge/de' },
    { btn: 'My Mind', link: '/knowledge/mind' },
    { btn: 'My Body', link: '/knowledge/body' },
  ],
};

export default function HomePage() {
  return <SectionHome content={content} />;
}
