import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "tfe9ns95",
  dataset: "production",
  apiVersion: "2023-06-15",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects() {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            category,
            year,
            "slug": slug.current,
            "image": image.asset->url,
            "hover_image": hover_image.asset->url,
            url,
            content,
            order
        } | order(order asc)`
  );
  return projects;
}

export async function getProject(slug: string) {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "cover": cover.asset->url,
            "deviceImages": deviceImages[].asset->url,
            url,
            content
        }`,
    { slug }
  );
  return projects;
}

export async function getPosts() {
  const posts = await sanityClient.fetch(
    groq`*[_type == "article"] | order(publishDate desc){
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            publishDate,
            description,
        }`
  );
  return posts;
}

export async function getPost(slug: string) {
  const post = await sanityClient.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            publishDate,
            content
        }`,
    { slug }
  );
  return post;
}
