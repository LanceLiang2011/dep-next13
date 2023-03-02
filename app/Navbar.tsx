'use client';
import Image from 'next/image';
import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth, db, logout } from '@/library/firebase';
import { Toaster } from 'react-hot-toast';
import { Navbar } from 'flowbite-react';

export default function NavbarComponent() {
  const unselectedButton =
    'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  const selectedButton =
    'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white';
  const activeSegment = useSelectedLayoutSegment();

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  // !return
  return (
    <Navbar className='mb-8' fluid={true} rounded={true}>
      <Navbar.Brand
        className='cursor-pointer'
        onClick={() => {
          router.push('/');
        }}
      >
        <Image
          src='https://trp.utoronto.ca/new/wp-content/uploads/sites/16/2022/04/cropped-trpdrop3.png'
          className='h-6 mr-3 sm:h-9'
          height={55}
          width={40}
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          DEP
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <li>
          <Link
            href='/'
            className={!activeSegment ? selectedButton : unselectedButton}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/knowledge'
            className={
              activeSegment === 'knowledge' ? selectedButton : unselectedButton
            }
          >
            Knowledge
          </Link>
        </li>
        <li>
          <Link
            href='/journal'
            className={
              activeSegment === 'journal' ? selectedButton : unselectedButton
            }
          >
            Journal
          </Link>
        </li>
        <li>
          <Link
            href='/support'
            className={
              activeSegment === 'support' ? selectedButton : unselectedButton
            }
          >
            Support
          </Link>
        </li>
        {!user && (
          <li>
            <Link
              href='/login'
              className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            >
              Login
            </Link>
          </li>
        )}
        {user && (
          <>
            <li
              className='cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              onClick={logout}
            >
              Logout
            </li>{' '}
            <li>
              <Link
                href='/user'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                {user.displayName || 'Profile'}
              </Link>
            </li>
            {user.photoURL && (
              <img
                className='w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
                src={user.photoURL}
                alt={user.displayName || 'anonymous'}
              />
            )}
          </>
        )}
      </Navbar.Collapse>

      <Toaster />
    </Navbar>
  );
}

/*
accessToken
: 

auth
: 

displayName
: 

email
: 

emailVerified
: 

isAnonymous
: 

metadata
: 

phoneNumber
: 

photoURL
: 

proactiveRefresh
: 

providerData
: 

providerId
: 

reloadListener
: 

reloadUserInfo
: 

stsTokenManager
: 

tenantId
: 

uid
: 

*/
