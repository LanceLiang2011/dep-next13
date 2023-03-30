'use client';
import KnowledgeCard from '@/components/Typograpjy/KnowledgeCard';
import Title from '@/components/Typograpjy/Title';
import { Tooltip } from 'flowbite-react';
import React from 'react';

export default function DESymptomsCheck() {
  return (
    <Tooltip content='**Have hover over the Symptom part with a disclaimer**'>
      <KnowledgeCard title='Common Disordered Eating Symptoms Relating to the Body'>
        <ul className='unordered-list'>
          <li>Poor body image</li>
          <li>Body checking and scanning</li>
          <li>Preoccupation about weight</li>
          <li>Discontent surrounding one&apos;s body</li>
        </ul>
      </KnowledgeCard>
    </Tooltip>
  );
}
