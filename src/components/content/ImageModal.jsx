import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const ImageModal = ({ project }, isOpen) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <button
                className={`relative w-[80vw] h-[80vw] sm:w-[20vw] sm:h-[20vw] z-0 + ${
                    isOpen
                        ? 'transition  delay-200 ease-in-out opacity-100 duration-150'
                        : 'transition  delay-0 ease-in-out opacity-0'
                }`}
                onClick={() => {
                    setOpenModal(true);
                }}
            >
                <Image
                    src={project.content.imageURL}
                    alt={project.title}
                    layout='fill'
                    objectFit='cover'
                />
            </button>
            <Transition.Root show={openModal} as={Fragment}>
                <Dialog
                    as='div'
                    className='overflow-y-auto fixed inset-0 z-10'
                    onClose={setOpenModal}
                >
                    <div className='flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0 sm:pt-12'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className='hidden sm:h-[80vh] sm:inline-block sm:align-middle'
                            aria-hidden='true'
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <div className='inline-block overflow-hidden z-50 px-4 pt-5 pb-4 my-auto w-full text-left bg-white rounded-lg shadow-xl transition-all transform sm:p-6 sm:pb-12 sm:mt-36 sm:w-full sm:max-w-4xl sm:align-middle'>
                                <div>
                                    <button
                                        onClick={() => setOpenModal(false)}
                                        className='flex justify-end items-center w-full h-6'
                                    >
                                        <XCircleIcon
                                            className='w-6 h-6 text-red-600'
                                            aria-hidden='true'
                                        />
                                    </button>
                                    <div className='h-[80vw] w-[80vw] relative mx-auto xl:h-[55vw] xl:w-[55vw] 2xl:h-[35vw] 2xl:w-[35vw]'>
                                        <Image
                                            src={project.content.imageURL}
                                            alt={project.title}
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default ImageModal;
