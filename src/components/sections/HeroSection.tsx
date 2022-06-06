import { motion, useTransform, useViewportScroll } from 'framer-motion';
import * as React from 'react';

export default function HeroSection() {
  const { scrollYProgress } = useViewportScroll();

  const barParallax1 = useTransform(scrollYProgress, [0, 1], [0, -5000]);
  const barParallax2 = useTransform(
    scrollYProgress,
    [0, 0.02, 1],
    [0, 0, -4000]
  );
  const barParallax3 = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [0, 0, -3000]
  );

  return (
    <div className='mx-auto w-screen '>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mt-12 mb-0 flex w-screen sm:h-12 xl:mt-20 xl:mb-12 xl:h-[40vh]'
      >
        {/* <div className='relative mx-auto mb-6 h-36 w-36 justify-center lg:h-48 lg:w-48'>
          <Image
            src='v1654110747/Color%20Mill%20Design/PortraitBlue_wgxyhp.png'
            alt='self portrait'
            layout='fill'
            objectFit='contain'
          />
        </div> */}
        <div className='md:w-5/12 xl:w-5/12 2xl:w-7/12 '></div>
        <div className='2xl:mr-30 mx-4 md:w-7/12 lg:mx-0 lg:mr-24 xl:w-7/12 2xl:w-5/12'>
          <h1
            style={{ lineHeight: '1em' }}
            className='mb-4 px-4 text-left font-serif text-base text-3xl font-semibold text-white xl:text-4xl 2xl:text-5xl'
          >
            Hello. I&apos;m Jeremy Logan.
          </h1>
          <p
            style={{ lineHeight: '1.75em' }}
            className=' px-4 text-left text-base font-light text-white lg:text-xl'
          >
            I’m a designer and a coder, driven by the belief that exceptional
            design elevates the world. I’m a logical thinker, thrive in
            collaborative environments and I’m always looking for the most
            elegant way to solve a problem. You can view some of my work below.
          </p>
        </div>
        {/* <div className='w-1/12'></div> */}
      </motion.div>
      <div className='z-50 mt-10 flex flex-col sm:mt-60 xl:-mt-36'>
        <motion.div
          style={{ translateY: barParallax1, rotate: '12deg' }}
          className='transfrom backdrop-saturate-75 -ml-12 mb-8 h-10 w-[120vw] rotate-[12deg] border-b-[1px] border-t-[1px] border-t-red-400/50 border-b-red-800/50 bg-gradient-to-r from-red-600/50  to-red-600/40 shadow-lg shadow-red-800/30 backdrop-blur-xl -backdrop-hue-rotate-15 sm:h-14 xl:-ml-24 xl:h-24'
        ></motion.div>
        <motion.div
          style={{ translateY: barParallax2, rotate: '12deg' }}
          className='transfrom backdrop-saturate-75 -ml-12 mb-8 h-10 w-[120vw] rotate-[12deg] border-b-[1px] border-t-[1px] border-t-orange-400/50 border-b-orange-800/50 bg-gradient-to-r from-orange-600/50  to-orange-600/40 shadow-lg shadow-orange-700/20 backdrop-blur-xl -backdrop-hue-rotate-15 sm:h-14 xl:-ml-24 xl:h-24'
        ></motion.div>
        <motion.div
          style={{ translateY: barParallax3, rotate: '12deg' }}
          className='transfrom backdrop-saturate-75 -ml-12 h-10 w-[120vw] rotate-[12deg] border-b-[1px] border-t-[1px] border-t-yellow-400/50 border-b-yellow-800/50 bg-gradient-to-r from-yellow-600/50  to-yellow-600/40 shadow-lg shadow-yellow-400/20 backdrop-blur-xl -backdrop-hue-rotate-15 sm:h-14 xl:-ml-24 xl:h-24'
        ></motion.div>
      </div>
    </div>
  );
}
