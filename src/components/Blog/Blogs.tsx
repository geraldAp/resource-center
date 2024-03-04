"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogsData, getPhysicsResources } from "@/api/SanityApi";
import { getCategoryBlogs } from "./GetCategoryBlogs";
import { client } from "../../../sanity/lib/client";
import { Post } from "@/types/SanityApi";
import BlogCards from "./BlogCards";
const Blogs = () => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["BLOGS"],
    queryFn:getBlogsData
  });

  let physicsBlogs: Post[] = [];
  let techBlogs: Post[] = [];
  if (!isPending) {
    console.log("Blogs is pending is false :", blogs);

    const TechBlogs = getCategoryBlogs(blogs!, "Tech");
    console.log("Physics Blogs:", TechBlogs);
    techBlogs = TechBlogs;
    // Physics
    const PhysicsBlogs = getCategoryBlogs(blogs!, "Physics");
    console.log("Physics Blogs:", PhysicsBlogs);
    physicsBlogs = PhysicsBlogs;
  }

  if (isPending)
    return (
      <>
        <div>Loading</div>
      </>
    );
  return (
    <div>
      <section className="mb-20" id="Physics-blog">
        <h2 className="text-2xl text-center font-bold mb-6">
          Popular Physics Blogs
        </h2>
        {physicsBlogs && (
          <div className="grid grid-cols-3 gap-6">
            {physicsBlogs?.map((blog) => (
              <BlogCards
                image={blog.mainImage}
                category={blog.categories}
                author={blog.author}
                title={blog.title}
                key={blog._id}
              />
            ))}
          </div>
        )}
      </section>
      <section id="Tech-blogs" className="mb-20">
        <h2 className="text-2xl  text-center font-bold mb-6">
          Popular Tech Blogs
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {techBlogs?.map((blog) => (
            <BlogCards
              image={blog.mainImage}
              category={blog.categories}
              author={blog.author}
              title={blog.title}
              key={blog._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
