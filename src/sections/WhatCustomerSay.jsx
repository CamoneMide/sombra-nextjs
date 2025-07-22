import Image from "next/image";
import { Container } from "../components";
import custImg1 from "../../public/cust-img01.avif";
import { testimonies } from "../constants";
import { FadeUp, ScrollerEndl } from "../animations";

const WhatCustomerSay = () => {
  return (
    <>
      <div className="bg-[#000] w-full h-fit flex flex-col items-center py-[80px] px-[15px] md:py-[100px] md:px-[30px] relative">
        <Container>
          <div className="flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <h4 className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[0.3em] font-[700] mt-[20px] md:mt-0">
                testimonials
              </h4>
              <h1 className="text-[28px] md:text-[40px] lg:text-[48px] lg:leading-[46px] text-transparent ptextGradient font-[700] w-full lg:w-[80%] whitespace-nowrap">
                What customers say
              </h1>
              <p className="text-[16px] lg:text-[18px] text-[#94A3BB] text-center font-[500] w-full lg:w-[80%]">
                Our themes are some of the most user-friendly and easiest to set
                up on the market
              </p>
            </div>
            <div className="flex flex-col items-center gap-[30px] lg:gap-[40px] w-full">
              <FadeUp
                distance={40}
                duration={0.8}
                delay={0.05}
                className="flex flex-col items-center p-[36px] md:py-[60px] md:px-[80px] lg:px-[30px] gap-[30px] md:gap-[40px] w-full lg:w-[60%] border-[1px] border-[rgba(255,255,255,0.15)] rounded-[16px] overflow-clip gridBgGradientWcs"
              >
                <p className="ptextGradient text-transparent text-center text-[16px] md:text-[18px] lg:text-[20px]">
                  “The themes from SuperbThemes are very easy to use and worth
                  the money. They have the best customer service.”
                </p>
                <div className="flex flex-row items-center gap-[10px]">
                  <div className="size-[48px]">
                    <Image
                      src={custImg1}
                      alt="Customer Image"
                      className="size-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      Tiffany Armstrong
                    </h4>
                    <p className="text-[16px] lg:text-[18px] text-[#94A3BB] font-[500]">
                      Designer, Avicraft
                    </p>
                  </div>
                </div>
              </FadeUp>

              <ScrollerEndl
                direction="left"
                baseSpeed={40}
                className="py-[30px]"
              >
                {testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="flex flex-col w-full max-w-[360px] md:max-w-[400px] p-[30px] pb-[40px] gap-[30px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] gridBgGradientAccd"
                  >
                    <div className="text-[16px] text-[#94A3BB] font-[400]">
                      {testimony.text}
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <div className="size-[40px] flex">
                        <Image
                          src={testimony.imgSrc}
                          alt={`custImg-${testimony.id}`}
                          className="size-full rounded-full object-cover"
                        />{" "}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h5 className="text-[14px] md:text-[16px] text-[#FFF] font-[600]">
                          {testimony.name}
                        </h5>
                        <p className="text-[16px] text-[#94A3BB] font-[500]">
                          {testimony.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="flex flex-col w-full max-w-[360px] md:max-w-[400px] p-[30px] pb-[40px] gap-[30px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] gridBgGradientAccd"
                  >
                    <div className="text-[16px] text-[#94A3BB] font-[400]">
                      {testimony.text}
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <div className="size-[40px] flex">
                        <Image
                          src={testimony.imgSrc}
                          alt={`custImg-${testimony.id}`}
                          className="size-full rounded-full object-cover"
                        />{" "}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h5 className="text-[14px] md:text-[16px] text-[#FFF] font-[600]">
                          {testimony.name}
                        </h5>
                        <p className="text-[16px] text-[#94A3BB] font-[500]">
                          {testimony.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="flex flex-col w-full max-w-[360px] md:max-w-[400px] p-[30px] pb-[40px] gap-[30px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] gridBgGradientAccd"
                  >
                    <div className="text-[16px] text-[#94A3BB] font-[400]">
                      {testimony.text}
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <div className="size-[40px] flex">
                        <Image
                          src={testimony.imgSrc}
                          alt={`custImg-${testimony.id}`}
                          className="size-full rounded-full object-cover"
                        />{" "}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h5 className="text-[14px] md:text-[16px] text-[#FFF] font-[600]">
                          {testimony.name}
                        </h5>
                        <p className="text-[16px] text-[#94A3BB] font-[500]">
                          {testimony.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="flex flex-col w-full max-w-[360px] md:max-w-[400px] p-[30px] pb-[40px] gap-[30px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] gridBgGradientAccd"
                  >
                    <div className="text-[16px] text-[#94A3BB] font-[400]">
                      {testimony.text}
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <div className="size-[40px] flex">
                        <Image
                          src={testimony.imgSrc}
                          alt={`custImg-${testimony.id}`}
                          className="size-full rounded-full object-cover"
                        />{" "}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h5 className="text-[14px] md:text-[16px] text-[#FFF] font-[600]">
                          {testimony.name}
                        </h5>
                        <p className="text-[16px] text-[#94A3BB] font-[500]">
                          {testimony.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="flex flex-col w-full max-w-[360px] md:max-w-[400px] p-[30px] pb-[40px] gap-[30px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] gridBgGradientAccd"
                  >
                    <div className="text-[16px] text-[#94A3BB] font-[400]">
                      {testimony.text}
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <div className="size-[40px] flex">
                        <Image
                          src={testimony.imgSrc}
                          alt={`custImg-${testimony.id}`}
                          className="size-full rounded-full object-cover"
                        />{" "}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h5 className="text-[14px] md:text-[16px] text-[#FFF] font-[600]">
                          {testimony.name}
                        </h5>
                        <p className="text-[16px] text-[#94A3BB] font-[500]">
                          {testimony.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonies.map((testimony) => (
                  <div
                    key={testimony.id}
                    className="flex flex-col w-full max-w-[360px] md:max-w-[400px] p-[30px] pb-[40px] gap-[30px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] gridBgGradientAccd"
                  >
                    <div className="text-[16px] text-[#94A3BB] font-[400]">
                      {testimony.text}
                    </div>
                    <div className="flex flex-row gap-[10px]">
                      <div className="size-[40px] flex">
                        <Image
                          src={testimony.imgSrc}
                          alt={`custImg-${testimony.id}`}
                          className="size-full rounded-full object-cover"
                        />{" "}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h5 className="text-[14px] md:text-[16px] text-[#FFF] font-[600]">
                          {testimony.name}
                        </h5>
                        <p className="text-[16px] text-[#94A3BB] font-[500]">
                          {testimony.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollerEndl>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhatCustomerSay;
