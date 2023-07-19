"use client";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface pageProps {
  children: ReactNode;
}

const CaseStudy: FC<pageProps> = ({ children }) => {
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
        className="space-y-6 mt-24 md:mt-36 text-zinc-900 dark:text-zinc-100"
      >
        <article>{children}</article>
      </motion.main>
      <Footer />
    </>
  );
};

export default CaseStudy;
