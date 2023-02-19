'use client';
import { Alert, Button, Card, Tooltip } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface Question {
  id: number;
  title: string;
  content: string;
  options: string[];
  answer: boolean | null;
  rightAnswer: number;
  explaination: string;
}

const questionsList = [
  {
    id: 1,
    title: 'This is an example question!',
    content: 'Here is the detial of the questions!',
    options: ['A. Something', 'B. Something', 'C. Something'],
    answer: null,
    rightAnswer: 2,
    explaination:
      'Risht answer is A! Here goes explainations and further resources!',
  },
  {
    id: 2,
    title: 'This is another example question!',
    content: 'Here is the detial of the questions!',
    options: ['A. Something', 'B. Something', 'C. Something'],
    answer: null,
    rightAnswer: 0,
    explaination:
      'Risht answer is B! Here goes explainations and further resources!',
  },
];

export default function InteractiveImg() {
  const [questions, setQuestions] = useState<Question[]>(questionsList);
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 text-center'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <h2 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white'>
            Anser Questions
          </h2>
          <br />
          {questions.map((question, i) => (
            <Card className='mb-20' key={question.id}>
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {question.title}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {question.content}
              </p>
              <br />
              <div className='flex flex-wrap gap-3'>
                {question.options.map((option, j) => (
                  <Button
                    disabled={questions[i].answer !== null}
                    onClick={(e) => {
                      const nextState = [
                        ...questions.slice(0, i),
                        {
                          ...question,
                          answer: j === question.rightAnswer ? true : false,
                        },
                        ...questions.slice(i + 1),
                      ];
                      setQuestions(nextState);
                    }}
                    key={i}
                    id={String(i)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {question.answer !== null && (
                <Alert color={question.answer ? 'success' : 'failure'}>
                  <span className='font-medium'>{question.explaination}</span>
                </Alert>
              )}
            </Card>
          ))}
          <br />
          <h2 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white'>
            Play Games:
          </h2>
        </article>
      </div>
    </main>
  );
}
