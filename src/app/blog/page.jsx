import { HeroBlog } from "@/src/sections";

const BlogPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <HeroBlog />
    </>
  );
};

export default BlogPage;
