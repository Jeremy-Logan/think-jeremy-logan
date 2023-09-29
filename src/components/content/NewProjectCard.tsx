import React, { useState, useRef  } from 'react'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { getCloudinaryImageUrl } from '../../utils/cloudinary'

type Props = {
    title: string
    id: string
    content: {
        link: string
        imageURL: string
        description: string
    }
}

const container: Variants = {
    open: {
        width: 'min(40rem, 95%)',
        height: "calc(100% - 10rem)",
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'fixed',
        zIndex: 30,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    closed: {
        transition: {
            duration: 0.5,
        },
        height: "100%",
        width: "100%",
        transitionEnd: {
            zIndex: 0, 
},

    },
}

export default function NewProjectCard(props: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 })
    const card = useRef(null)
    return (
        <>
            <motion.div
                ref={card}
                initial={'closed'}
                animate={isOpen ? 'open' : 'closed'}
                className=''
                variants={container}
                layout
                onClick={() => {
                    setIsOpen(true)
                    if (!isOpen) {
                        setCardDimensions({
                            width: (card.current as HTMLElement | null)?.clientWidth || 0,
                            height: (card.current as unknown as HTMLElement)?.clientHeight ?? 0,
                        })
                    }
                }}
            >
                <motion.div
                    transition={{ duration: 0.5 }}
                    className='relative z-30 aspect-square w-full '
                >
                    <Image
                        src={getCloudinaryImageUrl(`${props.content.imageURL}`)}
                        alt={props.title}
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        sizes='(max-width: 768px) 45vw,'
                    />
                </motion.div>
                <motion.h3 className='text-white text-2xl '>{props.title}</motion.h3>
                {isOpen && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=' bg-black text-white'>
                        {props.content.description}
                    </motion.p>
                )}
            </motion.div>
            {isOpen && (
                <>
                    <div
                        style={{
                            width: cardDimensions.width,
                            height: cardDimensions.height,
                        }}
                    ></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='height-[100vh] fixed top-0 left-0 right-0 bottom-0 z-10 w-[100vw] bg-black bg-opacity-50'
                        onClick={() => setIsOpen(false)}
                    />
                </>
            )}
        </>
    )
}
