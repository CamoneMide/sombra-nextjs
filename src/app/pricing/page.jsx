import { FAQSect, HeroPricing, WhatCustomerSay } from "@/src/sections";

const PricingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <HeroPricing />
      <WhatCustomerSay />
      <FAQSect />
    </>
  );
};

export default PricingPage;
