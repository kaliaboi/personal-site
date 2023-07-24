"use client";

import Link from "next/link";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const links = [
  {
    title: "Work",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Writing",
    href: "/writing",
  },
  {
    title: "Contact",
    href: "/about#contact",
  },
];

const Navigation: FC = ({}) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setOffset(window.scrollY);
    const checkIfOnTop = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", checkIfOnTop);
    return () => window.removeEventListener("scroll", checkIfOnTop);
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="dark:bg-zinc-950 bg-zinc-50 fixed w-full z-20 top-0 left-0 font-[200] shadow-sm"
    >
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center py-2">
            <div className="w-[48px] h-[48px] rounded-full relative">
              <Image
                src={"/logo-dark.svg"}
                fill
                alt="logo-dark"
                className="hidden dark:block"
              />
              <Image
                src={"/logo-light.svg"}
                fill
                alt="logo"
                className="block dark:hidden"
              />
            </div>
            <span
              className={`${
                offset !== 0 ? "opacity-100" : "-translate-y-2 opacity-0"
              } self-center font-[400] dark:text-zinc-50 ml-4 md:block hidden transition-all`}
            >
              <p className="text-base">Abhishek</p>
              <p className="opacity-50">Product Designer, Frontend Developer</p>
            </span>
          </a>
          <ul className="gap-4 md:flex hidden">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-[16px] dark:text-zinc-50 h-24 font-[400] hover:no-underline border-b-2 border-zinc-50/0 hover:border-b-2 hover:border-zinc-800 dark:hover:border-b-2 dark:hover:border-zinc-50 rounded-none no-underline"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger className="block md:hidden border border-zinc-50/20 p-2 rounded-lg">
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {links.map((link) => (
                <DropdownMenuItem key={link.title}>
                  <Link href={link.href}>{link.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator className="hidden dark:block" />
      </div>
    </motion.nav>
  );
};

export default Navigation;
