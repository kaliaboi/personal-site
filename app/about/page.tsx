"use client";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mt-24 md:mt-32 lg:mt-40 container max-w-6xl text-zinc-900 dark:text-zinc-100"
      >
        <div className="grid gird-cols-1 md:grid-cols-2 gap-12">
          <div className="order-last md:order-first flex flex-col gap-8 justify-between">
            <div>
              <div className="aspect-[6/8] w-full bg-zinc-800 relative">
                <Image src={"/about/1.png"} fill alt="" />
              </div>
              <p className="text-sm mt-2">This is how I look on good days</p>
            </div>
            <div>
              <div className="aspect-square w-full bg-zinc-800 relative">
                <Image src={"/about/3.png"} fill alt="" />
              </div>
              <p className="text-sm mt-2">My first puppy – Tookie</p>
            </div>
          </div>
          <div className="prose dark:prose-invert flex flex-col justify-between">
            <div>
              <h1>A little about me</h1>
              <p>I hate talking about myself too much so here goes...</p>
              <p>
                My full name is Abhishek Kalia. I am a product designer and
                frontend developer based in <strong>New York City</strong>, but
                originally from <strong>New Delhi, India.</strong>
              </p>
            </div>
            <div>
              <h2 className="mt-12">My Background</h2>
              <p>
                I majored in <strong>Computer Science</strong> as an undergrad
                at <strong>SRM University</strong> and tried to start a company
                right after (which didn&apos;t work out). So I worked as a
                frontend developer for a couple of years before I switched to
                the world of product design, working at{" "}
                <Link href="https://grappus.com">Grappus</Link>.
              </p>
              <p>
                After a couple of years I decided to get deeper into design by
                attending grad school at{" "}
                <Link href={"https://newschool.edu/parsons"}>
                  Parsons School of Design
                </Link>{" "}
                where I majored in <strong>Digital Product Design.</strong>
              </p>
            </div>
            <div>
              <div>
                <h2 className="mt-12">Outside Work</h2>
                <p>
                  I&apos;m glued to my Macbook most of the time but when
                  I&apos;m not - you can find me helping puppies find homes at{" "}
                  <Link href="https://www.muddypawsrescue.org/">
                    Muddy Paws Rescue
                  </Link>{" "}
                  near Flatiron and playing (and sucking at) pickleball.
                </p>
                <p>
                  I&apos;m also a big fan of pregressive indie music (all kinds
                  of music actually), check out some of my pfavourite songs on
                  this playlist.
                </p>
                <iframe
                  className="spotify mt-11"
                  src="https://open.spotify.com/embed/playlist/63IBUBl7cOyIAhCS1P9nNL?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-12 border-t border-zinc-600 dark:border-zinc-800"
          id="contact"
        >
          <div className="mt-6 prose dark:prose-invert">
            <h2 className="mb-2">Get in touch</h2>
            <p className="mt-0">
              Let&apos;s talk about video games, code and our mutual disdain for
              ketchup.
            </p>
            <div className="mt-12 flex flex-row w-full flex-wrap gap-8">
              <div className="flex flex-col gap-1">
                <Mail />
                <p className="my-0 flex gap-1 items-center">
                  Email <ArrowUpRight size={16} />
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <LinkedInLogoIcon width={24} height={24} />
                <p className="my-0 flex gap-1 items-center">
                  LinkedIn <ArrowUpRight size={16} />
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <TwitterLogoIcon width={24} height={24} />
                <p className="my-0 flex gap-1 items-center">
                  Twitter <ArrowUpRight size={16} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
