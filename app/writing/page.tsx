import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import PostList from "@/components/postlist";
import { getPosts } from "@/sanity/sanity-utils";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <>
      <Navigation />
      <PostList posts={posts} />
      <Footer />
    </>
  );
}
