import * as React from 'react';

// import UnstyledLink from '@/components/links/UnstyledLink';
// import NextImage from '@/components/NextImage';
import HeroSection from '@/components/sections/HeroSection';
import Seo from '@/components/Seo';

export default function HomePage() {
    return (
        <>
            <Seo />

            <main>
                <HeroSection />
                <section className='bg-white'></section>
            </main>
        </>
    );
}
