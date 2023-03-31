'use client';

import Feature from '@/components/UI/Feature';
import Link from 'next/link';
import { TfiThought } from 'react-icons/tfi';
import { FiTarget } from 'react-icons/fi';
import SectionHome from '@/components/UI/SectionHome';

const content = {
  title: 'My Journal:',
  para: "Welcome! My Journal is your place to privately document and record your thoughts, actions and emotions to improve your mind and body. Through an interactive experience, My Journal will guide you through a series of daily and weekly practices that can be adapted into your everyday lifestyle. You can also use diaries as a safe place to input anything on your mind, document your feelings, thoughts and emotions. Before we get to work, let's set up your journal to customize your experience in a way that works best for you. Now, you can click sections below to start setting up your journal!",
  btns: [
    { btn: 'Thinking Patterns', link: '/journal/thinkingpattern' },
    { btn: 'Set Up My Goals', link: '/journal/goalssetup' },
    { btn: 'My Thoughts', link: '/journal/thoughts' },
    { btn: 'My Goals', link: '/journal/goals' },
    { btn: 'My Diary', link: '/journal/diary' },
  ],
};

export default function Journal() {
  return <SectionHome content={content} />;
}
