import ButtonGroup from './ButtonGroup';

export default function MindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <ButtonGroup />
      <div>{children}</div>
    </div>
  );
}
