export default function KnowledgeCard({ children, title }: any) {
  return (
    <div className='max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>
      <section>{children}</section>
    </div>
  );
}
