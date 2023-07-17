"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const intros = [
  "I take ideas from the whiteboard to production with design and development.",
  "The frontend engineer who can transform your mundane ideas into slightly less terrible user experiences.",
  `The grand master of design, ready to deliver creations that will leave you saying, "Hmm, I've seen worse."`,
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
    console.log(newIntro);
    setIntro(newIntro);
  };
  return (
    <div className="px-14 mt-12 h-96">
      <motion.h2
        key={intro}
        variants={variants}
        animate={"show"}
        initial="hide"
        className="text-[56px] font-[400] max-w-5xl leading-[110%] mb-8"
      >
        {intro}
      </motion.h2>
      <Button
        variant="secondary"
        className="rounded-full flex gap-2"
        onClick={randomizeIntro}
      >
        <Shuffle size={18} />
        Make it honest
      </Button>
    </div>
  );
};

export default Hero;
