import React from 'react';

export default function FirstParagraph({
  children,
  className,
  ...rest
}: {
  children: any;
  className?: string | null;
}) {
  return (
    <p
      className={`mb-3 text-lg font-light text-gray-600 md:text-xl dark:text-gray-400 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
