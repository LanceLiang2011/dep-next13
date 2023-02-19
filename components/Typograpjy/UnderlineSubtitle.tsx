import React from 'react';

export default function UnderlineSubtitle({
  children,
  className,
  ...rest
}: {
  children: any;
  className?: string | null;
}) {
  return (
    <h3
      className={`text-2xl font-bold dark:text-white underline decoration-4 decoration-blue-400 dark:decoration-blue-600 mb-3 ${className}`}
      {...rest}
    >
      {children}
    </h3>
  );
}
