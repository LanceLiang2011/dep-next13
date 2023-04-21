"use client";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
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
      <div className=" relative">
        <Image
          className="object-cover w-11/12 h-11/12"
          alt="home image"
          src={homeImage}
        />
      </div>
      <Modal show={isModalVisible} onClose={onClose}>
        <Modal.Header>
          empowering your journey to healthier eating habits and positive body
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              At &quot;My Eating Journey,&quot; we are dedicated to empowering
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
              developing a positive and healthy relationship with food and body
              image. Offering a range of educational content, personalized
              journaling programs, and support resources to guide and empower
              users on their journey towards healthier eating habits and overall
              well-being.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClick}>I Understood!</Button>
          {/* <Button color="gray" onClick={onClick}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
