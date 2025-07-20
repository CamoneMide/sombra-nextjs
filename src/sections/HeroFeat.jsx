import { Container } from "../components";
import Image from "next/image";
import heroFeatImg from "../../public/grid-boxImg01.jpg";
import { FadeUp, ScrollDownButton, TiltUp } from "../animations";

const HeroFeat = () => {
  return (
    <>
      <div className="bg-[url('../../public/grid-boxImg01.jpg')] bg-no-repeat bg-cover w-full h-[66vh] md:h-[62vh] lg:h-[118vh] flex flex-col items-center pt-[80px] px-[40px] relative">
        <Container>
          <div className="flex flex-col items-center">
            <TiltUp
              angle={16}
              distance={40}
              duration={0.8}
              delay={0}
              perspective={2000}
              className="flex flex-col items-center text-center"
            >
              <h4 className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[4px] font-[700] mb-[10px] mt-[20px] md:mt-0">
                Create your world
              </h4>
              <h1 className="text-[48px] md:text-[80px] lg:text-[100px] text-transparent ptextGradient font-[700] w-full lg:w-[80%] leading-[50px] md:leading-[80px] ">
                Experience everywhere
              </h1>
            </TiltUp>

            <FadeUp
              distance={40}
              duration={0.8}
              delay={0.2}
              className="w-[250px] h-[136px] md:w-[390px] md:h-[215px] lg:w-[492px] lg:h-[272px] bg-[#FFFFFF17] backdrop-blur-[10px] rounded-[12px] p-[5px]"
            >
              <Image
                src={heroFeatImg}
                alt="Grid Img1"
                unoptimized
                className="object-cover size-full rounded-[7px]"
              />
            </FadeUp>
          </div>
        </Container>
        <ScrollDownButton targetId="captivating" />
      </div>
      <div className="bg-[#000] w-full" id="captivating" />
    </>
  );
};

export default HeroFeat;
