import React, { useEffect, useRef } from "react";

import { animate, motion, stagger, useInView } from "framer-motion";
import { items } from "./cardData";

const Page1 = () => {
  const cardContainer = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardContainer, { once: true });

  const textContainer = useRef<HTMLDivElement | null>(null);
  const textInView = useInView(textContainer, { once: true });

  const mainText = useRef<HTMLDivElement | null>(null);
  const mainTextInView = useInView(mainText, { once: true });

  return (
    <main>
      <div>
        <h1 className="text-5xl">Our Resolutions for 2024</h1>
      </div>

      <motion.div
        className="my-[10vh]"
        style={{
          transform: inView ? "translateX(0)" : "translateX(-100vw)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={cardContainer}
      >
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </motion.div>

      <motion.div
        ref={textContainer}
        style={{
          transform: textInView ? "translateY(0vh)" : "translateY(20vh)",
          opacity: textInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="text-center w-full h-[50vh] p-2 flex justify-center items-center">
          <h1 className="text-6xl">Wait You Forget Something</h1>
        </div>
      </motion.div>

      <motion.div
        style={{
          scale: mainTextInView ? 1 : 0.5,
          opacity: mainTextInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
        }}
        ref={mainText}
      >
        <div className="text-center h-[50vh] w-screen flex justify-center items-center">
          <div>
            <h1 className="text-7xl font-extrabold">YourSelf()</h1>
            <p className="py-2">
              Make time for self-care amidst the hustle and bustle of life.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Page1;

interface CardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  text?: string;
}

const Card = ({ title, description, image, color, text }: CardProps) => {
  return (
    <div
      className={`card w-[96vw] h-full m-auto ${color} ${text} my-4`}
    >
      <div>
        <header className="p-4 w-full h-12">
          <h1 className="font-bold text-xl">{title}</h1>
        </header>

        <main className="px-4 w-full">
          <p>{description}</p>
          <div className="py-4">
            <img
              src={image}
              alt=""
              className="rounded-lg object-cover object-center"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
