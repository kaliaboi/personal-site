"use client";

import Link from "next/link";
import { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

const links = [
  {
    title: "Work",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/about#contact",
  },
];

const Navigation: FC = ({}) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="dark:bg-zinc-900 fixed w-full z-20 top-0 left-0 "
    >
      <div className="container border-zinc-600 border-b p-2">
        <div className="flex items-center justify-between p-6">
          <a href="/" className="flex items-center">
            <div className="w-[48px] h-[48px] rounded-full relative">
              <Image src={"/logo.svg"} fill alt="logo" />
            </div>
            <span className="self-center font-[300] text-white -space-y-1 ml-4">
              <p>Abhishek.</p>
              <p className="opacity-50">Product Designer, Frontend Developer</p>
            </span>
          </a>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-base text-white"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
