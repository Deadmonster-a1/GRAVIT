"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import { cn } from "../lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";

  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  return (
    <motion.span
      className={cn("inline-block text-white", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};
const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 50, 0],
  );

  return (
    <motion.img
      src={char}
      className={cn("inline-block w-24 h-24 object-contain mx-4 drop-shadow-2xl", isSpace && "w-4")}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
    />
  );
};
const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      className={cn("inline-block w-24 h-24 object-contain mx-4 drop-shadow-2xl", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};

export const TechStackReveal = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start end", "end start"]
  });

  const text = "we build with power";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const techIconsRow1 = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  ];
  const techIconsRow2 = [
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
  ];
  const centerIndex1 = Math.floor(techIconsRow1.length / 2);
  const centerIndex2 = Math.floor(techIconsRow2.length / 2);

  return (
    <div className="w-full bg-transparent overflow-hidden">
      <div className="top-22 absolute left-1/2 z-10 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-white">
      </div>
      
      {/* Block 1 */}
      <div
        ref={targetRef}
        className="relative box-border flex h-[100vh] items-center justify-center gap-[2vw] overflow-hidden bg-transparent p-[2vw]"
      >
        <div
          className="font-mono w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-white"
          style={{
            perspective: "500px",
          }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Block 2 */}
      <div
        ref={targetRef2}
        className="relative box-border flex h-[100vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-transparent p-[2vw]"
      >
        <p className="font-mono flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-white uppercase opacity-50 mb-12">
          <Bracket className="h-12 text-[#2F3336]" />
          <span>integrate with your fav tech stack</span>
          <Bracket className="h-12 scale-x-[-1] text-[#2F3336]" />
        </p>
        <div className="flex flex-col gap-12 items-center justify-center w-full max-w-4xl">
          <div className="flex justify-center w-full">
            {techIconsRow1.map((char, index) => (
              <CharacterV2
                key={'r1'+index}
                char={char}
                index={index}
                centerIndex={centerIndex1}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
          <div className="flex justify-center w-full">
            {techIconsRow2.map((char, index) => (
              <CharacterV2
                key={'r2'+index}
                char={char}
                index={index}
                centerIndex={centerIndex2}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Block 3 */}
      <div
        ref={targetRef3}
        className="relative box-border flex h-[100vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-transparent p-[2vw]"
      >
        <p className="font-mono flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-white uppercase opacity-50 mb-12">
          <Bracket className="h-12 text-[#2F3336]" />
          <span>master the digital frontier</span>
          <Bracket className="h-12 scale-x-[-1] text-[#2F3336]" />
        </p>
        <div
          className="flex flex-col gap-12 items-center justify-center w-full max-w-4xl"
          style={{
            perspective: "500px",
          }}
        >
          <div className="flex justify-center w-full">
            {techIconsRow1.map((char, index) => (
              <CharacterV3
                key={'r1'+index}
                char={char}
                index={index}
                centerIndex={centerIndex1}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
          <div className="flex justify-center w-full">
            {techIconsRow2.map((char, index) => (
              <CharacterV3
                key={'r2'+index}
                char={char}
                index={index}
                centerIndex={centerIndex2}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
