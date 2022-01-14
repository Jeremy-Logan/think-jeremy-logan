import type { NextPage } from 'next';
import * as React from 'react';

// import UnstyledLink from '@/components/links/UnstyledLink';
// import NextImage from '@/components/NextImage';
import HeroSection from '@/components/sections/HeroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
    return (
        <>
            <Seo />

            <main className='scroll-smooth overflow-hidden bg-cyan-50'>
                <HeroSection />
                <ProjectSection />
                <div className='h-screen'></div>
            </main>
        </>
    );
};

export default Home;
