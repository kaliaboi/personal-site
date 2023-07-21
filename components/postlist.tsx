"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import Link from "next/link";

interface postlistProps {
  posts: any;
}

const PostList: FC<postlistProps> = ({ posts }) => {
  return (
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
        Find here all my writing notes, essays, blog posts — you name it. Topics
        cover design operations and bridges between design and code. I may use
        this space also like a journal, we will see.
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
        {posts.map((post: any) => (
          <Link href={`/writing/${post.slug}`} key={post._id}>
            <h2 className="text-[32px] font-extrabold">{post.name}</h2>
            <p className="text-[16px] opacity-50">
              {dayjs(post.publishDate).format("MMMM D, YYYY")}
            </p>
          </Link>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default PostList;
