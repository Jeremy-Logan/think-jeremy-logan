import { Disclosure,  } from '@headlessui/react';
import {  MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

import NextImage from '@/components/NextImage';



export default function Navbar() {
    return (
        <Disclosure as='nav' className='bg-white shadow'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className='flex h-auto relative items-center '>
                        <div className='flex items-center '>
                            <div className='h-24 m-8 w-24'>
                                <NextImage
                                    src='/favicon/android-icon-192x192.png'
                                    width='192px'
                                    height='192px'
                                    alt='logo'
                                />
                            </div>
                            <h1 className='font-bold text-3xl hidden sm:block'>
                                Think Jeremy Logan
                            </h1></div>
                            <div className='absolute flex inset-y-0 items-center left-0 sm:hidden'>
                                {/* Mobile menu button */}
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset'>
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    ) : (
                                        <MenuIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end'>
                                <div className='hidden sm:flex sm:ml-6 sm:space-x-8'>
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <a
                                        href='#'
                                        className='border-b-2 border-indigo-500 font-medium inline-flex items-center pt-1 px-1 text-gray-900 text-sm'
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href='#'
                                        className='border-b-2 border-transparent font-medium inline-flex items-center pt-1 px-1 text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700'
                                    >
                                        Contact
                                    </a>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='pb-4 pt-2 space-y-1'>
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as='a'
                                href='#'
                                className='bg-indigo-50 block border-indigo-500 border-l-4 font-medium pl-3 pr-4 py-2 text-base text-indigo-700'
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as='a'
                                href='#'
                                className='block border-l-4 border-transparent font-medium pl-3 pr-4 py-2 text-base text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                            >
                                Contact
                            </Disclosure.Button>
                            
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
