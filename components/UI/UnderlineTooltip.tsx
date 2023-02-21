'use client';
import { Tooltip } from 'flowbite-react';
import React from 'react';

export default function UnderlineTooltip({
  children,
  content,
  color = 'blue',
}: any) {
  return (
    <Tooltip content={content}>
      <span
        className={`underline underline-offset-2 decoration-2 decoration-${color}-400 dark:decoration-${color}-600`}
      >
        {children}
      </span>
    </Tooltip>
  );
}
