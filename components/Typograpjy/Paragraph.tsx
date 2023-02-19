import React from 'react';

export default function Paragraph({
  children,
  className,
  ...rest
}: {
  children: any;
  className?: string | null;
}) {
  return (
    <p
      className={`mb-3 text-lg font-light text-gray-600 dark:text-gray-400 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
