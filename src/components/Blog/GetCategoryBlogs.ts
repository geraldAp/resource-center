import { Post } from "@/types/SanityApi";


export function getCategoryBlogs(blogs: Post[], categoryName: string) {
  const filteredBlogs = blogs.filter((blog) =>
    blog.categories.some((category) => category.title === categoryName)
  );
  console.log("filtered blogs: ", filteredBlogs);
  return filteredBlogs;
}

