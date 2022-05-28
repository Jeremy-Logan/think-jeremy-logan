import { motion } from 'framer-motion/dist/framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';

import NextImage from '@/components/NextImage';

export default function Navbar() {
    return (
        <>
            <div className='mx-auto w-screen px-2 shadow sm:px-24'>
                <div className='flex h-auto items-center'>
                    <div className='flex w-full items-center justify-center sm:justify-start'>
                        <div className='m-8 h-12 w-12 cursor-pointer sm:h-24 sm:w-24'>
                            <Link href='/' passHref>
                                <motion.a>
                                    <NextImage
                                        src='/images/headerLogo.gif'
                                        width='192px'
                                        height='192px'
                                        alt='logo'
                                    />
                                </motion.a>
                            </Link>
                        </div>
                        <motion.h1
                            animate={{
                                scaleY: [0, 0.15, 0.3, 1.4, 0.7, 1],
                                y: [0, 0, 0, -25, 0, 0],
                            }}
                            initial={{ scaleY: 0, y: 0 }}
                            transition={{ delay: 1, duration: 0.3 }}
                            className='hidden origin-bottom text-2xl font-thin sm:block'
                        >
                            Think Jeremy Logan
                        </motion.h1>
                    </div>
                </div>
            </div>
        </>
    );
}
