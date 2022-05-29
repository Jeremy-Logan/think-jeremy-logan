import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';

import NextImage from '../NextImage';

export default function Navbar() {
  return (
    <>
      <div className='mx-auto w-screen px-2 shadow sm:px-24'>
        <div className='flex h-auto items-center'>
          <div className='flex w-full items-center justify-center sm:justify-start'>
            <div className='m-8 h-12 w-12 cursor-pointer sm:h-24 sm:w-24'>
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
                <picture className='h-[192px] w-[192px]'>
                  <source
                    srcSet='https://res.cloudinary.com/the-color-mill/image/upload/v1653788491/Color%20Mill%20Design/headerLogo_pi3cib.gif'
                    type='image/gif'
                  />
                  <source
                    srcSet='https://res.cloudinary.com/the-color-mill/image/upload/v1653830108/Color%20Mill%20Design/TJL-Logo_l5muds.png'
                    type='image/png'
                  />
                  <NextImage
                    src='https://res.cloudinary.com/the-color-mill/image/upload/v1653788491/Color%20Mill%20Design/headerLogo_pi3cib.gif'
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
              className='hidden origin-bottom text-2xl font-normal sm:block'
            >
              Think Jeremy Logan
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
}
