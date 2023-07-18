"use client";

import Link from "next/link";
import { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      className="dark:bg-zinc-950 bg-zinc-50 fixed w-full z-20 top-0 left-0 font-[200]"
    >
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between p-6">
          <a href="/" className="flex items-center py-2">
            <div className="w-[48px] h-[48px] rounded-full relative">
              <Image
                src={"/logo.svg"}
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
            <span className="self-center font-[300] dark:text-zinc-50 ml-4 md:block hidden">
              <p className="text-base">Abhishek.</p>
              <p className="opacity-50">Product Designer, Frontend Developer</p>
            </span>
          </a>
          <ul className="gap-4 lg:flex hidden">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-base dark:text-zinc-50 underline-offset-8"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger className="block lg:hidden border border-zinc-50/20 p-2 rounded-lg">
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
        <Separator className="opacity-60" />
      </div>
    </motion.nav>
  );
};

export default Navigation;
