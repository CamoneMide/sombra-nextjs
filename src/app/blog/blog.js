import { blogs } from "@/src/constants";

export async function getBlogById(id) {
  const foundBlog = blogs.find((blog) => blog.id === Number(id));

  if (!foundBlog) {
    throw new Error(`Blog with id ${id} not found`);
  }
  return foundBlog;
}
