"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

const Work: FC = ({}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="work pt-12"
    >
      <p className="mb-4 font-bold text-[12px]">SELECTED WORK</p>
      <div className="grid grid-cols-1 gap-12 w-full">
        <div className="card w-full">
          <div className="aspect-video w-full mb-2 relative">
            <Image
              src={"/tc-1.png"}
              fill
              alt="test"
              className="border border-zinc-50/20"
            />
          </div>
          <p>Project Title</p>
          <p className="opacity-50">Project Catrgory</p>
        </div>
        <div className="card w-full">
          <div className="aspect-video w-full bg-zinc-700 mb-2 relative">
            <Image src={"/tc-2.png"} fill alt="test" />
          </div>
          <p>Project Title</p>
          <p className="opacity-50">Project Catrgory</p>
        </div>
        <div className="card w-full">
          <div className="aspect-video w-full bg-zinc-700 mb-2 relative">
            <Image src={"/tc-3.png"} fill alt="test" />
          </div>
          <p>Project Title</p>
          <p className="opacity-50">Project Catrgory</p>
        </div>
        <div className="card w-full">
          <div className="aspect-video w-full bg-zinc-700 mb-2"></div>
          <p>Project Title</p>
          <p className="opacity-50">Project Catrgory</p>
        </div>
        <div className="card w-full">
          <div className="aspect-video w-full bg-zinc-700 mb-2"></div>
          <p>Project Title</p>
          <p className="opacity-50">Project Catrgory</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
