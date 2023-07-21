"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import dayjs from "dayjs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface postlistProps {
  post: any;
}

const portableComponents: PortableTextComponents = {
  types: {},
  block: {
    p: ({ children }) => <div className="hidden">{children}</div>,
  },
};

const Post: FC<postlistProps> = ({ post }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mt-12 md:mt-28 lg:mt-40 container max-w-3xl text-zinc-900 dark:text-zinc-100 prose dark:prose-invert "
    >
      <Link
        href="/writing"
        className={cn(buttonVariants({ variant: "link" }), "pl-0 mb-4")}
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to writing
      </Link>
      <h1 className="text-[48px] font-bold mb-3">{post.name}</h1>
      <p className="mt-0">
        Published on {dayjs(post.publishDate).format("MMMM D, YYYY")}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mt-12"
      >
        <div className="text-[16px] prose dark:prose-invert prose-zinc">
          <PortableText value={post.content} components={portableComponents} />
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="py-12 mt-12 flex flex-col gap-12"
      >
        {posts.map((post: any) => (
          <Link href={`/writing/${post.slug}`} key={post._id}>
            <h2 className="text-[32px] font-extrabold">{post.name}</h2>
            <p className="text-[16px] opacity-50">
              {dayjs(post.publishDate).format("MMMM D, YYYY")}
            </p>
          </Link>
        ))}
      </motion.div> */}
    </motion.main>
  );
};

export default Post;
