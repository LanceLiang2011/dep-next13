'use client';
import Paragraph from '@/components/Typograpjy/Paragraph';
import Title from '@/components/Typograpjy/Title';
import UnderlineSubtitle from '@/components/Typograpjy/UnderlineSubtitle';
import { deleteThoughtById } from '@/library/firebase';
import { Button, Rating, Table } from 'flowbite-react';
import { HiBadgeCheck } from 'react-icons/hi';

export default function ThoughtCard({ thought, setUserThoughts }: any) {
  const handleClick = () => {
    deleteThoughtById(thought.uid, thought.id);
    setUserThoughts((current: any) =>
      current.filter((curThought: any) => curThought.id !== thought.id)
    );
  };

  return (
    <div className='max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <Title type='h3'>Your alternative thought:</Title>
      <UnderlineSubtitle>{thought.alternative}</UnderlineSubtitle>
      <Paragraph className='mb-10'>
        Your belief in this thought:{' '}
        <Rating.Advanced percentFilled={thought.beliefAlt}></Rating.Advanced>
      </Paragraph>
      <Paragraph>
        Your feeling:{' '}
        <Rating.Advanced percentFilled={thought.feelNow}></Rating.Advanced>
      </Paragraph>
      <br />
      <Title type='h3'>Your original thought:</Title>
      <Paragraph>{thought.situation}</Paragraph>
      <Paragraph>{thought.thought}</Paragraph>
      <Paragraph className='mb-10'>
        Your belief in this thought:{' '}
        <Rating.Advanced percentFilled={thought.belief}></Rating.Advanced>
      </Paragraph>
      <br />
      <Table>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Happiness</Table.Cell>
          <Table.Cell>
            <Rating.Advanced
              percentFilled={thought.happiness}
            ></Rating.Advanced>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Saddness</Table.Cell>
          <Table.Cell>
            <Rating.Advanced percentFilled={thought.sadness}></Rating.Advanced>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Fear</Table.Cell>
          <Table.Cell>
            <Rating.Advanced percentFilled={thought.fear}></Rating.Advanced>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Disgust</Table.Cell>
          <Table.Cell>
            <Rating.Advanced percentFilled={thought.disgust}></Rating.Advanced>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Anger</Table.Cell>
          <Table.Cell>
            <Rating.Advanced percentFilled={thought.anger}></Rating.Advanced>
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Surprise</Table.Cell>
          <Table.Cell>
            <Rating.Advanced percentFilled={thought.suprise}></Rating.Advanced>
          </Table.Cell>
        </Table.Row>
      </Table>

      <br />

      <Table>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>What evidence do you have to support it?</Table.Cell>
          <Table.Cell>{thought.support}</Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>What evidence do you have against it?</Table.Cell>
          <Table.Cell>{thought.against}</Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>
            Where did this thought come from? Is the source of information
            dependable?
          </Table.Cell>
          <Table.Cell>{thought.source}</Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Is this thought based on feelings or facts?</Table.Cell>
          <Table.Cell>{thought.base}</Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>
            Does the thought include words or phrases that are extreme or
            exaggerated?
          </Table.Cell>
          <Table.Cell>{thought.extreme}</Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>
            Are your interpretations of the situation too far removed from
            reality to be accurate?
          </Table.Cell>
          <Table.Cell>{thought.distorting}</Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Are you taking it out of context?</Table.Cell>
          <Table.Cell>{thought.context}</Table.Cell>
        </Table.Row>
      </Table>

      <br />

      <Table>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Jumping to Conclusions</Table.Cell>
          <Table.Cell>
            {thought.jumping && <HiBadgeCheck size={24} />}
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Exaggerating or Minimizing a situation </Table.Cell>
          <Table.Cell>
            {thought.exaggerating && <HiBadgeCheck size={24} />}
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Disregarding important aspects of a situation</Table.Cell>
          <Table.Cell>
            {thought.disregarding && <HiBadgeCheck size={24} />}
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Oversimplifying</Table.Cell>
          <Table.Cell>
            {thought.oversimplifying && <HiBadgeCheck size={24} />}
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Overgeneralizing</Table.Cell>
          <Table.Cell>
            {thought.overgeneralizing && <HiBadgeCheck size={24} />}
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Mind reading</Table.Cell>
          <Table.Cell>
            {thought.mindReading && <HiBadgeCheck size={24} />}
          </Table.Cell>
        </Table.Row>
        <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
          <Table.Cell>Emotional Reasoning </Table.Cell>
          {thought.emotional && <HiBadgeCheck size={24} />}
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table>
      <br />
      <Paragraph>You will be reminded: {thought.remind}</Paragraph>

      <br />

      <Button color='failure' onClick={handleClick}>
        Delete
      </Button>
    </div>
  );
}
