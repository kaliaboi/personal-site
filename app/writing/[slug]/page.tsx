import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Post from "@/components/post";
import { getPost } from "@/sanity/sanity-utils";

export default async function Home({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  console.log(post);
  return (
    <>
      <Navigation />
      <Post post={post} />
      <Footer />
    </>
  );
}
