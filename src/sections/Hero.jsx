import Image from "next/image";
import heroImg from "../../public/heroImg.png"; // Adjust the path as necessary
import { Container } from "../components";
import { BlurText, FadeUp, ScrollDownButton } from "../animations";

const Hero = () => {
  return (
    <div className="bgGradient h-[535px] md:h-[785px] lg:h-[200vh] lg:max-h-[940px] flex flex-col items-center pt-[80px] px-[40px] relative">
      <Container>
        <div className="flex flex-col items-center text-center w-full mx-auto">
          <FadeUp
            distance={60}
            duration={1}
            delay={1.2}
            className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[5px] font-[700] mb-[10px] lg:mb-[18px] mt-[20px] md:mt-0"
          >
            virtual reality
          </FadeUp>

          <div className="text-[44px] md:text-[80px] lg:text-[100px] text-[#FFF] font-[700] w-[310px] md:w-[600px] lg:w-[720px] leading-[50px] md:leading-[80px] text-center relative lg:mr-[40px]">
            {/* Normal */}
            <div className="absolute block md:hidden top-0 left-0 p-0">
              <BlurText
                text={`   An infinite    reality voyage`}
                delay={45}
                animateBy="letters"
                direction="bottom"
              />
            </div>
            {/* md */}
            <div className="absolute hidden md:block top-0 left-0 p-0">
              <BlurText
                text={`    An infinite     reality voyage`}
                delay={45}
                animateBy="letters"
                direction="bottom"
              />
            </div>
          </div>
        </div>
      </Container>

      <ScrollDownButton targetId="features" />
      <FadeUp
        delay={0.1}
        duration={0.8}
        distance={40}
        className="absolute bottom-0 w-[360px] h-[320px] md:w-[600px] md:h-[534px] lg:w-[762px] lg:h-[678px]"
      >
        <Image src={heroImg} alt="hero-img" />
      </FadeUp>
    </div>
  );
};

export default Hero;
