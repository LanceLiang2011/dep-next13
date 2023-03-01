import React from 'react';

const H1 =
  'mb-4 text-4xl md:text-5xl font-extrabold text-sky-800 dark:text-white';
const H2 =
  'mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-sky-50';
const H3 =
  'mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white';
const H4 =
  'mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white';

export default function Title({
  children,
  type,
  className,
  ...rest
}: {
  children: any;
  className?: string | null;
  type?: string;
}) {
  if (!type || type === 'h1')
    return (
      <h1 className={`${H1} ${className}`} {...rest}>
        {children}
      </h1>
    );

  if (type === 'h2')
    return (
      <h2 className={`${H2} ${className}`} {...rest}>
        {children}
      </h2>
    );

  if (type === 'h3')
    return (
      <h2 className={`${H3} ${className}`} {...rest}>
        {children}
      </h2>
    );
  if (type === 'h4')
    return (
      <h2 className={`${H4} ${className}`} {...rest}>
        {children}
      </h2>
    );

  return (
    <h1 className={`${H1} ${className}`} {...rest}>
      {children}
    </h1>
  );
}
