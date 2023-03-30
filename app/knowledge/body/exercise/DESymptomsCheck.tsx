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
          <li>Overexercising</li>
          <li>Exercising in specific ways to alter body</li>
          <li>Negative relationship with physical activity or exercise </li>
        </ul>
      </KnowledgeCard>
    </Tooltip>
  );
}
