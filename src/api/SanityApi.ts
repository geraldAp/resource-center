import { Post, Resource } from "@/types/SanityApi";
import { client } from "../../sanity/lib/client";

export const getPhysicsResources = async (): Promise<Resource[]> => {
  try {
    const data =
      await client.fetch(` *[_type == "resourceContent"] | order(_createdAt asc) {
        _id,
        name,
        'slug': slug.current,
         'courses': courses[]{
            course_title,
           introduction,
           'resourceSlug':resource->slug.current
          }
          }`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export async function getBlogsData(): Promise<Post[]> {
  try {
    const data = await client.fetch(`*[_type == 'post']{
      _id,
      title,
      "author": author->name,
      "slug": slug.current,
      mainImage,
      "categories": categories[]->
    }`);
    console.log("posts", data);
    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
}
