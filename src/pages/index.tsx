import type { NextPage } from 'next';

// import UnstyledLink from '@/components/links/UnstyledLink';
// import NextImage from '@/components/NextImage';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />

      <main className='overflow-hidden scroll-smooth bg-cyan-50'>
        <HeroSection />
        <ProjectSection />
        <ContactSection />
        <div className='h-36'></div>
      </main>
    </>
  );
};

export default Home;
