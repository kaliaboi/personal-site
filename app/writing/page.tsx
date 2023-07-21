"use client";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

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
        className="mt-24 md:mt-48 container max-w-2xl text-zinc-900 dark:text-zinc-100"
      >
        <h1 className="text-[48px] font-bold">I write stuff</h1>
        <p className="text-[18px] opacity-50">
          Find here all my writing notes, essays, blog posts — you name it.
          Topics cover design operations and bridges between design and code. I
          may use this space also like a journal, we will see.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="py-12 mt-12 flex flex-col gap-12"
        >
          <div>
            <h2 className="text-[32px] font-extrabold">
              Celebrating my first year at Specify
            </h2>
            <p className="text-[16px] opacity-50">Sep 6, 2022</p>
          </div>
          <div>
            <h2 className="text-[32px] font-extrabold">
              Introducing Raycast extension for Gather
            </h2>
            <p className="text-[16px] opacity-50">Sep 6, 2022</p>
          </div>
          <div>
            <h2 className="text-[32px] font-extrabold">
              Introducing Supercat.app
            </h2>
            <p className="text-[16px] opacity-50">Sep 6, 2022</p>
          </div>
          <div>
            <h2 className="text-[32px] font-extrabold">
              A new adventure at Specify
            </h2>
            <p className="text-[16px] opacity-50">Sep 6, 2022</p>
          </div>
          <div>
            <h2 className="text-[32px] font-extrabold">
              Let&apos;s open the garage door
            </h2>
            <p className="text-[16px] opacity-50">Sep 6, 2022</p>
          </div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  );
}
