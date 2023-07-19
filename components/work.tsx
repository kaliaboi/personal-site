"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

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
      <div className="grid grid-cols-1 gap-16 w-full">
        <div className="card w-full">
          <div className="aspect-video w-full mb-2 relative">
            <Image src={"/pour-2.png"} fill alt="test" />
          </div>
          <Link
            href={"/work/pour"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "pl-0 underline"
            )}
          >
            Pour – A journalling app for people in therapy
          </Link>
          <p className="opacity-50">Product Design / 2023</p>
        </div>
        <div className="card w-full">
          <div className="aspect-video w-full bg-zinc-700 mb-2 relative">
            <Image src={"/sita-cover.png"} fill alt="test" />
          </div>
          <Link
            href={"https://journi.site"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "pl-0 underline"
            )}
          >
            Sita – Crafting a design system for India&apos;s biggest travel
            company
          </Link>
          <p className="opacity-50">Design Systems, Product Design / 2022</p>
        </div>
        <div className="card w-full">
          <div className="aspect-video w-full bg-zinc-700 mb-2 relative">
            <Image src={"/tt-cover.png"} fill alt="test" />
          </div>
          <Link
            href={"https://journi.site"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "pl-0 underline"
            )}
          >
            TopTeen – An app to help teens find the right careers
          </Link>
          <p className="opacity-50">Product Design / 2022</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
