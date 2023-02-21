'use client';
import Image from 'next/image';
import React from 'react';

export default function HoverImage({ children, src, ...rest }: any) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(event: any) {
    const boundingRect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    setMousePosition({ x: offsetX, y: event.clientY - boundingRect.top });
  }
  return (
    <span className='relative hover-image'>
      <span className='relative' onMouseMove={handleMouseMove}>
        {children}
        <Image
          className='absolute hidden transform -translate-x-1/2 -translate-y-full'
          src={src}
          alt='Hovered Image'
          height={60}
          width={60}
          priority
          {...rest}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
      </span>
    </span>
  );
}
