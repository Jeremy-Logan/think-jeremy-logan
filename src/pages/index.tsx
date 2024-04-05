import type { NextPage } from 'next';

import BlobBackground from '@/components/sections/BlobBackground';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Seo from '@/components/Seo';


const Home: NextPage = () => {
  return (
    <>
      <Seo />

      <main className='snap-y snap-proximity overflow-hidden'>
        <HeroSection />
        
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
        <BlobBackground />
      </main>
    </>
  );
};

export default Home;