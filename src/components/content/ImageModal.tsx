import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from '../Image';
import { Fragment, useState } from 'react';
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

type Props = {
  project: {
    title: string;
    content: {
      imageURL: string;
    };

  }
  isOpen: boolean;
};


const ImageModal = ({ project }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <motion.button
        className='relative z-0 h-full w-full bg-white'
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <Image
          src={getCloudinaryImageUrl(`${project.content.imageURL}`)}
          alt={project.title}
          fill = {true}
          style={{objectFit: 'contain'}}
          sizes="(max-width: 768px) 45vw,"
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
                className='z-50 my-auto mx-auto inline-block w-full transform overflow-hidden rounded-lg bg-white pt-5 pb-4 text-left shadow-xl transition-all sm:w-full sm:pb-12 sm:align-middle  xl:w-[75vw] 2xl:w-[42vw]'
              >
                <div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className='flex h-6 w-full items-center justify-end pr-3'
                  >
                    <XMarkIcon
                      className='h-8 w-8 text-cyan-700'
                      aria-hidden='true'
                    />
                  </button>
                  <motion.div className='relative mx-auto h-[95vw] w-[95vw] xl:h-[75vw] xl:w-[75vw] 2xl:h-[42vw] 2xl:w-[42vw]'>
                    <Image
                      src={getCloudinaryImageUrl(`${project.content.imageURL}`)}
                      alt={project.title}
                      fill = {true}
          style={{objectFit: 'contain'}}
          sizes="(max-width: 768px) 45vw,"
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
