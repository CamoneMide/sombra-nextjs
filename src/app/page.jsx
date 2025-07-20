import { Features, Hero, HighQlt } from "../sections";

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <Hero />
      <Features />
      <HighQlt />
    </>
  );
};

export default HomePage;
