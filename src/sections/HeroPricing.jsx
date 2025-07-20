import { TiltUp } from "../animations";
import { Button, ButtonDark, Container } from "../components";
import { PiCheckCircleFill, PiCheckCircleLight } from "react-icons/pi";

const HeroPricing = () => {
  return (
    <>
      <div className="bg-[#000] w-full h-fit flex flex-col items-center py-[80px] px-[15px] md:py-[100px] md:px-[30px] relative">
        <Container>
          <TiltUp
            angle={12}
            distance={34}
            duration={0.8}
            delay={0.05}
            perspective={2000}
            className="flex flex-col items-center gap-[60px]"
          >
            <div className="flex flex-col items-center text-center gap-[12px]">
              <h4 className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[4px] font-[700] mt-[20px] md:mt-0">
                Pricing
              </h4>
              <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-transparent ptextGradient font-[700] w-full lg:w-[80%] leading-[50px] md:leading-[80px] whitespace-nowrap">
                Get started
              </h1>
              <p className="text-[16px] lg:text-[18px] text-[#94A3BB] text-center font-[500] w-full lg:w-[80%]">
                Find your perfect VR package today. Unleash boundless
                experiences without breaking the bank.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[16px] w-full">
              <div className="w-full lg:w-[320px] h-fit border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col justify-between gap-[30px] md:gap-[20px] lg:gap-[30px] py-[40px] px-[30px] gridBgGradient">
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[#8c8c8c] text-[12px] tracking-[0.3em] font-[700] uppercase mb-[2px]">
                    Personal
                  </h6>
                  <h4 className="text-[#FFF] text-[28px] md:text-[40px] lg:text-[48px] font-[700]">
                    $5
                  </h4>
                  <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                    /one-time payment
                  </p>
                </div>
                <ButtonDark text={"Buy template"} href={"/"} />

                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      1 projects
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Analytics
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Insights Panel
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Share Features
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[320px] h-fit border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col justify-between gap-[40px] md:gap-[20px] lg:gap-[40px] py-[40px] md:py-[60px] px-[30px] gridBgGradientBl">
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[#2563EB] text-[12px] md:text-[14px] tracking-[0.3em] font-[700] uppercase mb-[2px]">
                    Professional
                  </h6>
                  <h4 className="text-[#FFF] text-[28px] md:text-[40px] lg:text-[48px] font-[700]">
                    $10
                  </h4>
                  <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                    /one-time payment
                  </p>
                </div>
                <Button text={"Buy Template"} href={"/"} />

                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleFill size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      2 projects
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleFill size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Analytics
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleFill size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Insights Panel
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleFill size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Share Features
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[320px] h-fit border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col justify-between gap-[30px] md:gap-[20px] lg:gap-[30px] py-[40px] px-[30px] gridBgGradient">
                <div className="flex flex-col gap-[8px]">
                  <h6 className="text-[#2563EB] text-[12px] md:text-[14px] tracking-[0.3em] font-[700] uppercase mb-[2px] ">
                    Business
                  </h6>
                  <h4 className="text-[#FFF] text-[28px] md:text-[40px] lg:text-[48px] font-[700]">
                    $50
                  </h4>
                  <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                    /one-time payment
                  </p>
                </div>
                <ButtonDark text={"Buy template"} href={"/"} />
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Unlimited projects
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Analytics
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Insights Panel
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[#2563EB]">
                      <PiCheckCircleLight size={24} />
                    </div>
                    <p className="text-[#94A3BB] text-[16px] lg:text-[18px] font-[400]">
                      Share Features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltUp>
        </Container>
      </div>
    </>
  );
};

export default HeroPricing;
