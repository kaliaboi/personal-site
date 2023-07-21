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
      className="mt-24 md:mt-32 lg:mt-40 container max-w-2xl text-zinc-900 dark:text-zinc-100"
    >
      <h1 className="text-[48px] font-bold">I write stuff</h1>
      <p className="text-[16px] opacity-70 dark:opacity-50">
        This is a space I use to document my learning in prose. You can find
        pieces on product design, development and anything tech related – you
        name it. I sometimes even love writing about the video games I am
        playing!
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
            <p className="text-[14px] opacity-70 dark:opacity-50 mb-1">
              {dayjs(post.publishDate).format("MMMM D, YYYY")}
            </p>
            <h2 className="text-[28px] font-extrabold mb-2">{post.name}</h2>
            <p className="text-[16px] opacity-70 dark:opacity-50">
              {post.description}
            </p>
          </Link>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default PostList;
