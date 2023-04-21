"use client";
import Image from "next/image";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth, logout } from "@/library/firebase";
import { Toaster } from "react-hot-toast";
import { Navbar } from "flowbite-react";
import logo from "../resources/imgs/my_eating_journey_symbol_logo.png";

export default function NavbarComponent() {
  const unselectedButton =
    "block py-2 pl-3 pr-4 text-button rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  const selectedButton =
    "block py-2 pl-3 pr-4 text-white bg-button-hover rounded md:bg-transparent md:text-button-hover md:p-0 dark:text-white";
  const activeSegment = useSelectedLayoutSegment();

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  // !return
  return (
    <div className=" py-5 lg:py-10 pr-40">
      <Navbar className="mb-8" fluid={true} rounded={true}>
        <Navbar.Brand
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={logo}
            className="mr-4"
            height={55}
            width={55}
            alt=" Logo"
          />
          <span className="h1-font self-center whitespace-nowrap text-2xl text-heading font-light  dark:text-white">
            My Eating Journey
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <li className="text-lg">
            <Link
              href="/"
              className={!activeSegment ? selectedButton : unselectedButton}
            >
              Home
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="/knowledge"
              className={
                activeSegment === "knowledge"
                  ? selectedButton
                  : unselectedButton
              }
            >
              Learn
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="/journal"
              className={
                activeSegment === "journal" ? selectedButton : unselectedButton
              }
            >
              Journal
            </Link>
          </li>
          <li className="text-lg">
            <Link
              href="/support"
              className={
                activeSegment === "support" ? selectedButton : unselectedButton
              }
            >
              Support
            </Link>
          </li>
          {!user && (
            <li className="text-lg">
              <Link
                href="/login"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </Link>
            </li>
          )}
          {user && (
            <>
              <li
                className=" text-lg cursor-pointer block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={logout}
              >
                Logout
              </li>{" "}
              <li>
                <Link
                  href="/user"
                  className=" text-lg block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-button-hover md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {user.displayName || "Profile"}
                </Link>
              </li>
              {user.photoURL && (
                <img
                  className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user.photoURL}
                  alt={user.displayName || "anonymous"}
                />
              )}
            </>
          )}
        </Navbar.Collapse>

        <Toaster />
      </Navbar>
    </div>
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
