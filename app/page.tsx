"use client";
import React, { useState } from "react";
import Image from "next/image";
import homeImage from "../resources/imgs/my_eating_journey_home_page.png";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onClose = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <div className="relative">
        <Image
          className="object-cover w-11/12 h-11/12"
          alt="home image"
          src={homeImage}
        />
      </div>
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-30 z-0"
            onClick={onClose}
          ></div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 z-20">
            <h2 className="text-xl font-semibold mb-4">
              Empowering your journey to healthier eating habits and positive
              body
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                At &quot;My Eating Journey&quot;, we are dedicated to empowering
                individuals throughout their journey to a healthier relationship
                with food and positive body image. Our app provides personalized
                journaling, education, and support to help users gain a deeper
                understanding of their minds and bodies. It is our mission to
                empower our users throughout their eating journey to achieve a
                more fulfilling life through an understanding of nutrition,
                exercise, mindfulness, and self-care.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                A personalized web app designed to support individuals in
                developing a positive and healthy relationship with food and
                body image. Offering a range of educational content,
                personalized journaling programs, and support resources to guide
                and empower users on their journey towards healthier eating
                habits and overall well-being.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={onClick}
              >
                I Understood!
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
