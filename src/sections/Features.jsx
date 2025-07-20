import { Button, Container, SectHead, SectPar } from "../components";
import Image from "next/image";
import featGif from "../../public/prism-roll.gif";
import gridImg1 from "../../public/grid-boxImg01.jpg";
import gridImg2 from "../../public/grid-boxImg02.png";
import gridImg3 from "../../public/grid-boxImg03.png";
import astroImg1 from "../../public/astroPulse.svg";
import Link from "next/link";
import { FadeUp, ScrollerEndl, TiltUp } from "../animations";
import { GiSparkles } from "react-icons/gi";
import {
  SiAsana,
  SiBehance,
  SiDiscord,
  SiDropbox,
  SiFramer,
  SiGithub,
  SiNotion,
  SiSlack,
  SiSoundcloud,
  SiSpotify,
} from "react-icons/si";

const Features = () => {
  return (
    <div className="bg-[#000]" id="features">
      <div className="border-y-[1px] border-[rgba(255,255,255,0.2)] h-[120px] flex flex-col justify-center">
        <div className="w-full lg:w-[1000px] mx-auto py-[10px]">
          <ScrollerEndl direction="left" baseSpeed={60} className="py-[30px]">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div key={index} className="h-[40px] flex items-center">
                <Image src={astroImg1} alt={`item-${index + 1}`} />
              </div>
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div key={index} className="h-[40px] flex items-center">
                <Image src={astroImg1} alt={`item-${index + 1}`} />
              </div>
            ))}
            {[0, 1, 2, 3, 4, 5].map((item, index) => (
              <div key={index} className="h-[40px] flex items-center">
                <Image src={astroImg1} alt={`item-${index + 1}`} />
              </div>
            ))}
          </ScrollerEndl>
        </div>
      </div>

      <Container>
        <div className="flex flex-col items-center justify-center pt-[20px] pb-[60px] lg:pb-[110px] gap-[10px]">
          <div className="size-[200px]">
            <Image
              src={featGif}
              alt="Features GIF"
              unoptimized
              className="object-cover size-full"
            />
          </div>
          <TiltUp distance={40} duration={0.8} delay={0.2} perspective={1700}>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] text-center text-[#94A3B8] w-full md:w-[500px] lg:w-[600px] font-[500]">
              We, the pioneers of the virtual realm, rise with boundless
              determination to shape a new reality. Guided by innovation and
              fueled by imagination, we embark on a transformative journey into
              the realm of Virtual Reality. We believe in the immense power of
              this extraordinary technology to redefine human experience,
              revolutionize industries, and ignite the flames of infinite
              possibility.
            </p>
          </TiltUp>
        </div>
        <div className="px-[5px] md:px-[20px] lg:px-[30px] pt-[100px] pb-[80px] md:py-[40px] lg:py-[100px] flex flex-col gap-[60px] lg:gap-[80px]">
          <FadeUp distance={40} duration={0.8} delay={0}>
            <div className="flex flex-col items-center gap-[20px] max-w-[550px] mx-auto">
              <SectHead text="Features" />
              <SectPar text="The magic of VR" />
              <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                <div className="bg-linear-to-b from-[rgb(46,46,46)] to-[rgb(31,31,31)] hover:from-[rgb(52,50,50)] hover:to-[rgb(31,31,31)] py-[10px] px-[20px] rounded-[6px] text-[14px] font-[500] text-[#FFF] border-[1px] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 rdShadow">
                  <Link href="/blog" className="keychainify-checked">
                    Read Blog
                  </Link>
                </div>
                <div>
                  <Button text="Buy Template" />
                </div>
              </div>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-[20px]">
            <TiltUp
              angle={25}
              distance={60}
              duration={1}
              delay={0.2}
              perspective={1600}
              className="grid grid-cols-1 lg:grid-cols-5 gap-[20px]"
            >
              <div className="w-full h-[400px] lg:h-[500px] col-span-1 lg:col-span-3 relative border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col">
                <div className="flex flex-col gap-[4px] mt-[40px] px-[40px] relative z-[2]">
                  <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-transparent font-[700] ptextGradient">
                    Immerse into video
                  </h4>
                  <p className="text-[16px] lg:text-[18px] text-[#94A3B8] font-[500]">
                    Enjoy movies like never before with captivating visuals and
                    audio
                  </p>
                </div>
                <div className="flex flex-col items-center flex-1 relative z-[2] pt-[70px]">
                  <div className="w-[194px] h-[106px] md:w-[280px] md:h-[153px] bg-[#FFFFFF17] backdrop-blur-[10px] rounded-[12px] p-[5px]">
                    <Image
                      src={gridImg1}
                      alt="Grid Img1"
                      unoptimized
                      className="object-cover size-full rounded-[7px]"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 w-full h-full z-[1]">
                  <Image
                    src={gridImg1}
                    alt="Grid Img1"
                    unoptimized
                    className="object-cover size-full"
                  />
                </div>
              </div>

              <div className="w-full h-[400px] lg:h-[500px] col-span-1 lg:col-span-2 border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col justify-between pt-[40px] pb-[60px] gridBgGradient">
                <div className="flex flex-col gap-[4px] px-[40px]">
                  <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-transparent font-[700] ptextGradient">
                    Connect apps
                  </h4>
                  <p className="text-[16px] lg:text-[18px] text-[#94A3B8] font-[500]">
                    Connect and work with a variety of the best apps in the
                    world
                  </p>
                </div>
                <div className="space-y-[10px]">
                  <ScrollerEndl direction="left" baseSpeed={60}>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDiscord size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDropbox size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiBehance size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiNotion size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSoundcloud size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiAsana size={50} />
                    </div>

                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDiscord size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDropbox size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiBehance size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiNotion size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSoundcloud size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiAsana size={50} />
                    </div>

                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDiscord size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDropbox size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiBehance size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiNotion size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSoundcloud size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiAsana size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDiscord size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiDropbox size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiBehance size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiNotion size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSoundcloud size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiAsana size={50} />
                    </div>
                  </ScrollerEndl>

                  <ScrollerEndl direction="right" baseSpeed={60}>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiGithub size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSpotify size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSlack size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiFramer size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <GiSparkles size={50} />
                    </div>

                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiGithub size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSpotify size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSlack size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiFramer size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <GiSparkles size={50} />
                    </div>

                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiGithub size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSpotify size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSlack size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiFramer size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <GiSparkles size={50} />
                    </div>

                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiGithub size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSpotify size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiSlack size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <SiFramer size={50} />
                    </div>
                    <div className="flex items-center justify-center size-[80px] text-[#D8D8D8] border-[2px] border-[rgba(255,255,255,0.1)] rounded-[16px] relative overflow-hidden">
                      <div className="absolute inset-0 bgGradientIcons"></div>
                      <GiSparkles size={50} />
                    </div>
                  </ScrollerEndl>
                </div>
              </div>
            </TiltUp>

            <TiltUp
              angle={15}
              distance={40}
              duration={1}
              delay={0.4}
              perspective={1700}
              className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
            >
              <div className="w-full min-h-[400px] lg:max-h-[598px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col gap-[10px] gridBgGradient">
                <div className="flex flex-col gap-[4px] mt-[40px] px-[40px]">
                  <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-transparent font-[700] ptextGradient">
                    Best performance
                  </h4>
                  <p className="text-[16px] lg:text-[18px] text-[#94A3B8] font-[500]">
                    Powerful hardware with the SB10 chip. A VR headset that
                    delivers an unparalleled level of performance
                  </p>
                </div>
                <div className="w-full h-full">
                  <Image
                    src={gridImg2}
                    alt="Grid Img1"
                    unoptimized
                    className="object-cover size-full"
                  />
                </div>
              </div>
              <div className="w-full min-h-[400px] lg:max-h-[598px] border-[1px] border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-clip flex flex-col gap-[10px] gridBgGradient">
                <div className="flex flex-col gap-[4px] mt-[40px] px-[40px] ">
                  <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-transparent font-[700] ptextGradient">
                    Be productive
                  </h4>
                  <p className="text-[16px] lg:text-[18px] text-[#94A3B8] font-[500]">
                    Unlock your creative potential with productive drawing in
                    VR. From concept sketches to detailed designs
                  </p>
                </div>
                <div className=" w-full h-full">
                  <Image
                    src={gridImg3}
                    alt="Grid Img1"
                    unoptimized
                    className="object-cover size-full"
                  />
                </div>
              </div>
            </TiltUp>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
