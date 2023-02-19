import Sidebar from './Sidebar';

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=' flex gap-10 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <Sidebar />
      <div className='flex justify-center'>{children}</div>
    </div>
  );
}
