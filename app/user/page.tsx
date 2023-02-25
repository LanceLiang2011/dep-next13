'use client';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth, db, getUserData, logout } from '@/library/firebase';

interface User {
  authProvider: string;
  email: string;
  name: string;
  uid: string;
}

export default function User() {
  const [user, loading, error] = useAuthState(auth);
  const [myUser, setMyUser] = useState({
    authProvider: '',
    email: '',
    name: '',
    uid: '',
  });
  const router = useRouter();

  // ? Side effect, check the auth state
  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push('/');
      return;
    } // if have logged, return to main page
    const getMyUser = async () => {
      const myUserData = await getUserData(user.uid);
      setMyUser(myUserData);
    };
    getMyUser();
  }, [user, loading]);
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Welcome, {myUser.name}!
      </h5>
      <br />
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Email: {myUser.email}
      </p>
      <br />
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Loginmethod: {myUser.authProvider}
      </p>
    </div>
  );
}
