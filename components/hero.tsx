"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * TODO: Add more intros with similar sentence length
 *
 */

const intros = [
  "I take ideas from the whiteboard to production with design and development.",
  "The frontend engineer who can transform your mundane ideas into slightly less terrible user experiences.",
  `The grand master of design, delivering creations that will leave you saying, "Hmm, I've seen worse."`,
  "The magnificent frontend engineer who can transform your dreams into something... vaguely reminiscent of what you had in mind.",
  "The master of UI deception, capable of making your website appear far more impressive than it actually is.",
  "The cosmic being who combines design finesse with frontend wizardry, bringing you websites that are as beautiful as they are unpredictable.",
];

export const variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    x: -20,
    opacity: 0,
  },
};

const Hero: FC = ({}) => {
  const [intro, setIntro] = useState(intros[0]);
  const randomizeIntro = () => {
    var newIntro = intros[Math.floor(Math.random() * intros.length)];
    if (newIntro === intro) {
      randomizeIntro();
    } else {
      setIntro(newIntro);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="my-12 h-60 flex flex-col justify-center"
    >
      <div>
        <p className="mb-4 text-[20px]">Hi, I&apos;m Abhishek</p>
        <motion.h2
          key={intro}
          variants={variants}
          animate={"show"}
          initial="hide"
          className="text-[44px] font-[700] max-w-2xl leading-[115%] mb-8"
        >
          {intro}
        </motion.h2>
        <Button
          variant="secondary"
          className="flex gap-4 font-mono uppercase font-bold"
          onClick={randomizeIntro}
        >
          <Shuffle size={18} />
          Make it honest
        </Button>
      </div>
    </motion.div>
  );
};

export default Hero;
