'use client';
// !stateful import
import { FormEvent, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

// ? stateless import
import logo from '../../resources/imgs/my_eating_journey_symbol_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '@/library/firebase';
import { async } from '@firebase/util';

export default function Login() {
  // ! form related states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  // ? Side effect, check the auth state
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  // ? Router
  const router = useRouter();

  // ?handlers
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await logInWithEmailAndPassword(email, password);
    router.push('/journal');
  };
  // ! Return
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          href='https://trp.utoronto.ca/'
          target='_blank'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <Image src={logo} alt='trplogp' height={80} width={80} />
        </Link>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-heading md:text-2xl dark:text-white'>
              Login with Google or your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-body dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-body sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full text-white bg-subheading hover:bg-heading focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Log In
              </button>
              <button
                type='button'
                onClick={async () => {
                  await signInWithGoogle();
                  router.push('/journal');
                }}
                className='w-full text-white bg-button-hover hover:bg-button-text focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                <span className='flex flex-row items-center gap-3 justify-center'>
                  <BsGoogle />
                  Log In with Google
                </span>
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Haven&apos;t had an account?{' '}
                <Link
                  href='/signup'
                  className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                >
                  Create a new account here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
