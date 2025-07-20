import { HeroFeat, HighQlt } from "@/src/sections";

const FeaturesPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <HeroFeat />
      <HighQlt />
    </>
  );
};

export default FeaturesPage;
