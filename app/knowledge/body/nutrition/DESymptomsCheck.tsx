'use client';
import KnowledgeCard from '@/components/Typograpjy/KnowledgeCard';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import { Tooltip } from 'flowbite-react';
import React from 'react';

export default function DESymptomsCheck() {
  return (
    <KnowledgeCard
      title='          Common Disordered Eating Symptoms Relating to Food Intake and
          Nutrition'
    >
      <ul className='unordered-list'>
        <li>Unusual food fears</li>
        <li>Unusual ways of actually consuming food</li>
        <li>Unusual diet regimes</li>
        <li>Overeating</li>
        <li>Undereating</li>
        <li>Bingeing</li>
        <li>Arbitrary food labeling</li>
        <li>Constantly dieting</li>
        <li>Fasting</li>
      </ul>
    </KnowledgeCard>
  );
}
