import Link from "next/link";
import React from "react";
import Paragraph from "../Typograpjy/Paragraph";
import Title from "../Typograpjy/Title";

export default function SectionHome({
  content,
}: {
  content: {
    title: string | null;
    para: string | null;
    btns: { btn: string; link: string }[];
  };
}) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 lg:mb-16">
          <Title type="h1">{content.title}</Title>

          <Paragraph>{content.para}</Paragraph>
        </div>

        <div className="flex justify-between gap-2">
          {content.btns.map((btn) => (
            <Link key={btn.btn} className="button-blue" href={btn.link}>
              {btn.btn}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
