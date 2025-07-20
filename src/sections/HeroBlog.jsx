import { FadeUp } from "../animations";
import { BlogCard, Container } from "../components";
import { blogs } from "../constants";

const HeroBlog = () => {
  return (
    <>
      <div className="bg-[#000] w-full h-fit flex flex-col items-center py-[70px] px-[15px] md:py-[100px] md:px-[30px] relative">
        <Container>
          <div className="flex flex-col items-center gap-[100px]">
            <FadeUp
              distance={-40}
              duration={0.8}
              delay={0}
              className="flex flex-col items-center text-center gap-[12px]"
            >
              <h4 className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[4px] font-[700] mt-[20px] md:mt-0">
                articles from sombra
              </h4>
              <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-transparent ptextGradient font-[700] w-full lg:w-[80%] whitespace-nowrap -my-5">
                Blog posts
              </h1>
              <p className="text-[16px] lg:text-[18px] text-[#94A3BB] text-center font-[500] w-full lg:w-[70%]">
                We, the pioneers of the virtual realm, rise with boundless
                determination to shape a new reality. Guided by innovation and
                fueled by imagination.
              </p>
            </FadeUp>
            <div className="flex flex-col w-[90%] md:grid md:grid-cols-2 gap-[40px] md:gap-[60px] lg:gap-[80px]">
              {blogs.map((blog, index) => (
                <FadeUp
                  key={blog.id}
                  distance={50}
                  duration={0.8}
                  delay={index * 0.05}
                >
                  <BlogCard
                    href={`/blog/${blog.id}`}
                    imgSrc={blog.imgSrc}
                    alt={`blogImg-${blog.id}`}
                    title={blog.title}
                    date={blog.date}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroBlog;
