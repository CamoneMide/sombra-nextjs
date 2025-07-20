import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ href, imgSrc, alt, title, date }) => {
  return (
    <>
      <Link
        href={href}
        className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] cursor-pointer"
      >
        <div className="w-full max-w-[510px] h-[310px] lg:h-[400px]">
          <Image
            src={imgSrc}
            alt={alt}
            className="size-full object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-[5px] lg:gap-[4px]">
          <h4 className="text-[18px] md:text-[24px] lg:text-[28px] text-[#FFF] font-[600] w-[80%] max-w-[408px]">
            {title}
          </h4>
          <h6 className="text-[16px] lg:text-[18px] font-[400] text-[#94A3BB]">
            {date}
          </h6>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
