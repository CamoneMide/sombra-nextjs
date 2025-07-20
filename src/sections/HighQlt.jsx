import {
  PiBinocularsLight,
  PiGameControllerLight,
  PiPlanetLight,
  PiPopcornLight,
  PiSpeakerSimpleHighLight,
  PiWifiNoneDuotone,
} from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import {
  Button,
  ButtonDark,
  Container,
  SectHead,
  SectPar,
} from "../components";
import Image from "next/image";
import vrImg from "../../public/vr-img.jpg";
import vrSectImg from "../../public/vr-sect-img.jpg";
import { TiltUp } from "../animations";

const HighQlt = () => {
  return (
    <>
      <section className="bg-[#000]">
        <Container>
          <TiltUp
            angle={10}
            distance={40}
            duration={0.8}
            delay={0.5}
            perspective={2000}
            className="px-[5px] md:px-[30px] py-[80px] md:py-[100px] flex flex-col md:grid md:grid-cols-2 gap-[40px] md:gap-[30px] lg:gap-[50px]"
          >
            <div className="flex flex-col gap-[30px] lg:gap-[40px]">
              <div className="flex flex-col gap-[10px]">
                <SectHead text={"high quality"} />
                <SectPar text={"Captivating worlds"} />
                <p className="text-[16px] lg:text-[18px] text-[#94A3B8] font-[500]">
                  A new era of portable virtual reality, where you can explore
                  captivating worlds wherever you go. With our portable VR
                  headset, the possibilities are boundless and the adventure
                  never ends.
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]">
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiBinocularsLight />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      Adjustable lenses for clarity and reduced eye strain
                    </h4>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiPlanetLight />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      Dive into mesmerizing worlds of immersive 3D
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]">
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiSpeakerSimpleHighLight />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      lifelike audio that enhances the virtual environment.
                    </h4>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiWifiNoneDuotone />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      An experience with no cable or wire constraints
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full min-h-fit">
              <Image
                src={vrImg}
                alt="vrImg"
                className="size-full object-contain"
              />
            </div>
          </TiltUp>

          {/* Let's Get Social */}
          <TiltUp
            angle={12}
            distance={40}
            duration={0.8}
            delay={0.5}
            perspective={2000}
            className="px-[5px] md:px-[30px] py-[80px] md:py-[100px] flex flex-col-reverse md:grid md:grid-cols-2 gap-[40px] md:gap-[30px] lg:gap-[50px]"
          >
            <div className="w-full min-h-fit">
              <Image
                src={vrSectImg}
                alt="vrSectImg"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[30px] lg:gap-[40px]">
              <div className="flex flex-col gap-[10px]">
                <SectHead text={"Let's get social"} />
                <SectPar text={"A shared universe"} />
                <p className="text-[16px] lg:text-[18px] text-[#94A3B8] font-[500]">
                  Step into a world of VR social sharing and connect with
                  friends, family, and communities like never before. Share and
                  forge bonds across virtual landscapes
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]">
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiGameControllerLight />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      Compete with friends or other VR users in exciting games
                    </h4>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiPopcornLight />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      Enjoy movies and videos in a virtual cinema setting
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px]">
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <CiDumbbell />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      Do physical activity and workouts with your firends
                    </h4>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-[10px] md:gap-[20px]">
                    <div className="text-[#2563EB] text-[24px] lg:text-[40px]">
                      <PiWifiNoneDuotone />
                    </div>
                    <h4 className="text-[14px] md:text-[16px] text-[#FFF] font-[500]">
                      An experience with no cable or wire constraints
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </TiltUp>
        </Container>
      </section>

      {/* Start Today */}

      <section className="bg-[url('../../public/vr-sect-bg.jpg')] bg-no-repeat bg-cover w-full min-h-[466px] md:h-[524px] lg:h-[760px] flex flex-col items-center justify-center px-[20px]">
        <TiltUp
          angle={13}
          distance={40}
          duration={1}
          delay={0.2}
          perspective={1900}
        >
          <div className="w-full md:w-[70%] lg:w-[740px] md:h-[364px] lg:h-[440px] py-[60px] px-[30px] md:p-[80px] flex flex-col items-center gap-[30px] border-[1px] border-[rgba(37,99,235,0.3)] bg-[#000000D1] rounded-[20px]">
            <div className="flex flex-col items-center gap-[10px]">
              <SectHead text={"Start today"} />
              <div className="text-center">
                <SectPar text={"Experience the best"} />
              </div>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] text-[#94A3B8] font-[500] text-center">
                Discover the transformative power of VR. Get your VR headset now
                and unlock a world of infinite possibilities
              </p>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-[10px]">
              <div>
                <ButtonDark text="Read Blog" href="/blog" />
              </div>
              <div>
                <Button text="Buy Template" />
              </div>
            </div>
          </div>
        </TiltUp>
      </section>
    </>
  );
};

export default HighQlt;
