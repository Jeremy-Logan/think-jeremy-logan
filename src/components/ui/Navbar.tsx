import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';

import NextImage from '@/components/NextImage';

export default function Navbar() {
    return (
        <>
            <div className='px-2 mx-auto w-screen shadow sm:px-24'>
                <div className='flex items-center h-auto'>
                    <div className='flex justify-center items-center w-full sm:justify-start'>
                        <div className='m-8 w-12 h-12 cursor-pointer sm:w-24 sm:h-24'>
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
                            className='hidden text-2xl font-thin origin-bottom sm:block'
                        >
                            Think Jeremy Logan
                        </motion.h1>
                    </div>
                </div>
            </div>
        </>
    );
}
