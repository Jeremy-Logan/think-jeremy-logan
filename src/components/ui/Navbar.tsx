import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';

import NextImage from '../NextImage';

export default function Navbar() {
  return (
    <>
      <div className='relative mx-auto w-screen px-2 opacity-100 sm:px-24 '>
        <div className='flex items-center'>
          <div className='flex w-full items-center justify-center sm:justify-start'>
            <div className='m-8 h-12 w-12 cursor-pointer shadow-xl shadow-sky-700/40 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-sky-700/60 active:scale-95 active:shadow-sky-600/80 sm:h-24 sm:w-24'>
              <Link href='/' passHref>
                {/* <motion.a>
                  <Image
                    src='/favicon/ms-icon-310x310.png'
                    width='192px'
                    height='192px'
                    alt='logo'
                    layout='responsive'
                  />
                </motion.a> */}
                <picture className='h-24 w-24 '>
                  <source
                    srcSet='v1654091088/Color%20Mill%20Design/headerLogo_ty5dmw.gif'
                    type='image/gif'
                  />
                  <source
                    srcSet='v1653830108/Color%20Mill%20Design/TJL-Logo_l5muds.png'
                    type='image/png'
                  />
                  <NextImage
                    src='v1654091088/Color%20Mill%20Design/headerLogo_ty5dmw.gif'
                    width='192px'
                    height='192px'
                    alt='logo'
                    layout='responsive'
                  />
                </picture>
              </Link>
            </div>
            <motion.h1
              animate={{
                scaleY: [0, 0.15, 0.3, 1.4, 0.7, 1],
                y: [0, 0, 0, -25, 0, 0],
              }}
              initial={{ scaleY: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              className='hidden origin-bottom text-2xl font-normal text-white sm:block '
            >
              Think Jeremy Logan
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
}
