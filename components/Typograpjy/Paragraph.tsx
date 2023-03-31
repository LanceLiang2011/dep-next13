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
      className={`mb-3 text-lg xl:text-xl font-light text-body dark:text-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
