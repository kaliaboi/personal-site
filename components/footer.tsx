"use client";

import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { links } from "./navigation";
import Link from "next/link";
import { Dribbble, Linkedin, LucideDribbble } from "lucide-react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

/**
 * TODO: Add links
 *
 */

export default function Footer() {
  return (
    <footer className="mt-12 h-64 container max-w-6xl">
      <Separator className="opacity-100 dark:opacity-60" />
      <div className="mt-12 flex flex-col-reverse md:flex-row gap-16 justify-between">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-base">Abhishek.</p>
            <p className="opacity-50">I made this website myself.</p>
          </div>
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
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-24">
          <div className="flex flex-col gap-1">
            <p>This site</p>
            {links.map((link) => (
              <Link key={link.title} href={link.href} className="opacity-50">
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <p>Me on the interwebs</p>
            <Link
              href="https://google.com"
              className="opacity-50 flex gap-2 items-center"
            >
              <LinkedInLogoIcon />
              Stalk me on LinkedIn
            </Link>
            <Link
              href="https://google.com"
              className="opacity-50 flex gap-2 items-center"
            >
              <TwitterLogoIcon />
              Be the first person to like my tweets
            </Link>
            <Link
              href="https://google.com"
              className="opacity-50 flex gap-2 items-center"
            >
              <LucideDribbble size={16} />
              View my designs on Dribbble
            </Link>
            <Link
              href="https://google.com"
              className="opacity-50 flex gap-2 items-center"
            >
              <GitHubLogoIcon />
              Discover my unorganized repositories
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
