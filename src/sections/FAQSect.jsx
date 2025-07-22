import { Accordion, Container } from "../components";
import { accordions } from "../constants";

const FAQSect = () => {
  return (
    <>
      <div className="bg-[#000] w-full h-fit flex flex-col items-center pt-[50px] pb-[70px] px-[15px] md:py-[100px] md:px-[30px] relative">
        <Container>
          <div className="flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <h4 className="text-[12px] md:text-[14px] text-[#2563EB] uppercase tracking-[0.3em] font-[700] mt-[20px] md:mt-0">
                FAQ
              </h4>
              <h1 className="text-[28px] md:text-[40px] lg:text-[48px] text-transparent ptextGradient font-[700] w-[92%] lg:w-[80%] leading-[100%]">
                Frequently asked questions
              </h1>
              <p className="text-[16px] lg:text-[18px] text-[#94A3BB] text-center font-[500] w-full lg:w-[80%]">
                We, the pioneers of the virtual realm, rise with boundless
                determination to shape a new reality. Guided by innovation and
                fueled by imagination.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] w-full lg:w-[80%] max-w-[900px]">
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.id}
                  head={accordion.head}
                  content={accordion.content}
                  state={accordion.state}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FAQSect;
