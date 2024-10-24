import type { NextPage } from 'next';

import BlobBackground from '@/components/sections/BlobBackground';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Seo from '@/components/Seo';
import PortfolioSection from '@/components/sections/PortfolioSection';


const Home: NextPage = () => {
  return (
    <>
      <Seo />

      <main className='snap-y snap-proximity overflow-hidden'>
        {/* <TestSection /> */}
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
        <BlobBackground />
      </main>
    </>
  );
};

export default Home;