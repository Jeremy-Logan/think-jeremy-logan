import Link from 'next/link';
import { Fragment } from 'react';

import NextImage from '@/components/NextImage';

export default function Navbar() {
    return (
        <>
            <div className='px-2 mx-auto w-screen shadow sm:px-24'>
                <div className='flex items-center h-auto'>
                    <div className='flex justify-center items-center w-full sm:justify-start'>
                        <div className='m-8 w-24 h-24 cursor-pointer'>
                            <Link href='/' passHref>
                                <a>
                                    <NextImage
                                        src='/favicon/android-icon-192x192.png'
                                        width='192px'
                                        height='192px'
                                        alt='logo'
                                    />
                                </a>
                            </Link>
                        </div>
                        <h1 className='hidden text-2xl font-thin sm:block'>
                            Think Jeremy Logan
                        </h1>
                    </div>
                </div>
            </div>
        </>
        // <Disclosure as='nav' className='bg-white'>
        //     {({ open }) => (
        //         <>
        //             <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        //                 <div className='flex h-auto items-center relative'>
        //                     <div className='flex items-center w-full sm:w-6/12 justify-center'>
        //                         <div className='h-24 m-8 w-24  cursor-pointer'>
        //                             <Link
        //                                 href='/'
        //                                 passHref

        //                             ><a>
        //                                 <NextImage
        //                                     src='/favicon/android-icon-192x192.png'
        //                                     width='192px'
        //                                     height='192px'
        //                                     alt='logo'
        //                                 /></a>
        //                             </Link>
        //                         </div>
        //                         <h1 className='font-thin hidden text-2xl sm:block'>
        //                             Think Jeremy Logan
        //                         </h1>
        //                     </div>
        //                     <div className='absolute flex inset-y-0 items-center left-0 sm:hidden'>
        //                         {/* Mobile menu button */}
        //                         <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset'>
        //                             <span className='sr-only'>
        //                                 Open main menu
        //                             </span>
        //                             {open ? (
        //                                 <XIcon
        //                                     className='block h-6 w-6'
        //                                     aria-hidden='true'
        //                                 />
        //                             ) : (
        //                                 <MenuIcon
        //                                     className='block h-6 w-6'
        //                                     aria-hidden='true'
        //                                 />
        //                             )}
        //                         </Disclosure.Button>
        //                     </div>
        //                     <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end'>
        //                         <div className='hidden sm:flex sm:ml-6 sm:space-x-8'>
        //                             {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
        //                             <a
        //                                 href='#'
        //                                 className='border-b-2 border-blue-400 font-medium inline-flex items-center pt-1 px-1 text-gray-900 text-sm'
        //                             >
        //                                 Projects
        //                             </a>
        //                             <a
        //                                 href='#'
        //                                 className='border-b-2 border-transparent font-medium inline-flex items-center pt-1 px-1 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700'
        //                             >
        //                                 Contact
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <Disclosure.Panel className='sm:hidden'>
        //                 <div className='pb-4 pt-2 space-y-1'>
        //                     {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        //                     <Disclosure.Button
        //                         as='a'
        //                         href='#'
        //                         className='bg-indigo-50 block border-cyan-500 border-l-4 font-medium pl-3 pr-4 py-2 text-base text-cyan-700'
        //                     >
        //                         Projects
        //                     </Disclosure.Button>
        //                     <Disclosure.Button
        //                         as='a'
        //                         href='#'
        //                         className='block border-l-4 border-transparent font-medium pl-3 pr-4 py-2 text-base text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
        //                     >
        //                         Contact
        //                     </Disclosure.Button>
        //                 </div>
        //             </Disclosure.Panel>
        //         </>
        //     )}
        // </Disclosure>
    );
}
