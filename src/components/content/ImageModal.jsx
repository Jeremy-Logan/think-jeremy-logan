import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const ImageModal = ({ project }, isOpen) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className={`+ relative z-0 h-[80vw] w-[80vw] sm:h-[20vw] sm:w-[20vw] ${
          isOpen
            ? 'opacity-100  transition delay-200 duration-150 ease-in-out'
            : 'delay-0  opacity-0 transition ease-in-out'
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
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
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
              <div className='z-50 my-auto inline-block w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:mt-36 sm:w-full sm:max-w-4xl sm:p-6 sm:pb-12 sm:align-middle'>
                <div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className='flex h-6 w-full items-center justify-end'
                  >
                    <XCircleIcon
                      className='h-6 w-6 text-red-600'
                      aria-hidden='true'
                    />
                  </button>
                  <div className='relative mx-auto h-[80vw] w-[80vw] xl:h-[55vw] xl:w-[55vw] 2xl:h-[35vw] 2xl:w-[35vw]'>
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
