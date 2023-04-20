import Image from "next/image";
import homeImage from "../resources/imgs/my_eating_journey_home_page.png";
import Paragraph from "@/components/Typograpjy/Paragraph";

export default function Home() {
  return (
    <div>
      <div className=" relative">
        <Image
          className="object-cover w-11/12 h-11/12"
          alt="home image"
          src={homeImage}
        />
        {/* <p className="tagline absolute bottom-0 w-full text-center bg-opacity-30 bg-button-back text-2xl font-bold text-[#85696e] p-2">
          empowering your journey to healthier eating habits and positive body
          image
        </p> */}
      </div>
      {/* <br />
      <Paragraph className="">
        At &quot;My Eating Journey,&quot; we are dedicated to empowering
        individuals throughout their journey to a healthier relationship with
        food and positive body image. Our app provides personalized journaling,
        education, and support to help users gain a deeper understanding of
        their minds and bodies. It is our mission to empower our users
        throughout their eating journey to achieve a more fulfilling life
        through an understanding of nutrition, exercise, mindfulness, and
        self-care.
      </Paragraph>
      <Paragraph className="">
        A personalized web app designed to support individuals in developing a
        positive and healthy relationship with food and body image. Offering a
        range of educational content, personalized journaling programs, and
        support resources to guide and empower users on their journey towards
        healthier eating habits and overall well-being.
      </Paragraph> */}
    </div>
  );
}
