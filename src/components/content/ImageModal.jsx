import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const ImageModal = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <motion.button
        className='relative z-0 h-full w-full '
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
      </motion.button>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={setOpenModal}
        >
          <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0 sm:pt-12'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='backdrop-saturate-75 fixed inset-0 bg-gradient-to-br from-sky-500/20 to-sky-200/10 backdrop-blur-xl -backdrop-hue-rotate-15 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:h-[80vh] sm:align-middle'
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
              <motion.div
                layout
                className='z-50 my-auto inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:mt-36 sm:w-full sm:max-w-4xl sm:p-6 sm:pb-12 sm:align-middle'
              >
                <div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className='flex h-6 w-full items-center justify-end'
                  >
                    <XIcon
                      className='h-8 w-8 text-cyan-700'
                      aria-hidden='true'
                    />
                  </button>
                  <motion.div className='relative mx-auto h-[80vw] w-[80vw] xl:h-[55vw] xl:w-[55vw] 2xl:h-[35vw] 2xl:w-[35vw]'>
                    <Image
                      src={project.content.imageURL}
                      alt={project.title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </motion.div>
                </div>
              </motion.div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ImageModal;
