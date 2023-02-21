import Image from 'next/image';
import React from 'react';

export default function HoverImage({ children, src, ...rest }: any) {
  return (
    <span className='relative hover-image'>
      {children}
      <Image
        className='absolute hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-full'
        src={src}
        alt='Hovered Image'
        priority
        {...rest}
      />
    </span>
  );
}
