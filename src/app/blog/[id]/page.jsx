import { Container } from "@/src/components";
import Image from "next/image";
import React from "react";
import { getBlogById } from "../blog";

const BlogPageDetails = async ({ params }) => {
  const { id } = await params;
  const blog = await getBlogById(id);

  // const blog = blogs.find((p) => p.id === Number(id));
  // if (!blog) {
  //   return <div>Blog not found</div>;
  // }

  return (
    <>
      <div className="bg-[#000] w-full h-fit flex flex-col items-center py-[70px] px-[15px] md:py-[100px] md:px-[30px] relative">
        <Container>
          <div className="flex flex-col items-center gap-[40px]">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <h4 className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[4px] font-[700] mt-[20px] md:mt-0">
                {blog.date}
              </h4>
              <h1 className="text-[28px] md:text-[40px] lg:text-[48px] text-[#FFF] font-[700] w-full max-w-[560px] leading-[100%] my-0">
                {blog.title}
              </h1>
            </div>
            <div className="w-full h-full lg:w-[90%]">
              <Image
                src={blog.imgSrc}
                alt={`blogImg-${blog.id}`}
                className="size-full object-cover rounded-[20px]"
              />
            </div>
            <div className="flex flex-col w-[90%] max-w-[580px] gap-[20px]">
              <p className="text-[#94A3BB] text-[16px] lg:text-[18px]">
                {blog.text}
              </p>
              <h4 className="text-[#FFF] font-[700] text-[18px] md:text-[24px] lg:text-[28px] mt-[20px]">
                {blog.htext01}
              </h4>
              <p className="text-[#94A3BB] text-[16px] lg:text-[18px]">
                {blog.text01}
              </p>
              <h4 className="text-[#FFF] font-[700] text-[18px] md:text-[24px] lg:text-[28px] mt-[20px]">
                {blog.htext02}
              </h4>
              <p className="text-[#94A3BB] text-[16px] lg:text-[18px]">
                {blog.text02}
              </p>
              <h4 className="text-[#FFF] font-[700] text-[18px] md:text-[24px] lg:text-[28px] mt-[20px]">
                {blog.htext03}
              </h4>
              <p className="text-[#94A3BB] text-[16px] lg:text-[18px]">
                {blog.text03}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogPageDetails;
