import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";

type ProjectProps = {
        title: string;
        subtitle: string;
        id: string;
        content: {
            link?: string;
            imageURL: string;
            description: string;
        };
    }


type CardLinkProps = {
    open: boolean;
    layout: string;
};

type CardImageProps = {
    open: boolean;
    layout: string;
};

type CardHeaderProps = {
    open: boolean;
    layout: string;
}

type CardSubtitleProps = {
    open: boolean;
    layout: string;
}

type CardDescriptionProps = {
    open: boolean;
    layout: string;
}

export default function NewProjectCard(props: ProjectProps) {
    const [open, setOpen] = useState(false);
    const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
    const card = useRef<HTMLDivElement>(null);

    return (
        <Fragment>
            
            <CardLink
                ref={card}
                open={open}
                layout="position"
                onClick={() => {
                    setOpen(true);
                    if (!open && card.current) {
                        setCardDimensions({
                            width: card.current.clientWidth,
                            height: card.current.clientHeight,
                        });
                    }
                }}
            >
                <CardImage
                    layout="preserve-aspect"
                    src={getCloudinaryImageUrl(`${props.content.imageURL}`)}
                />
                <motion.h2 layout="position" className={`text-white  text-[1.75em] font-thin ${open ? 'mt-[2rem] mx-[1.5rem]' : 'mt-[1rem] mx-0'}`}>
                    {props.title}
                </motion.h2>
                <motion.div layout="position" className={`text-white font-semibold ${open ? 'mx-[1.5rem]' : 'mx-0'}`}>
                    {props.subtitle}
                </motion.div>

                {open && (
                    <Fragment>
                    <motion.p className="text-lg text-white my-[1.5rem] mx-[1.5rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            {props.content.description}<br className='m-2'/>{props.content.link && (<a className='text-blue-500 text-lg' href={props.content.link}>Click here to view the site</a>)}
                    </motion.p>
                    
                    </Fragment>
                )}
            </CardLink>
            {open && (
                <Fragment>
                    <div 
                        style={{
                            width: cardDimensions.width,
                            height: cardDimensions.height,
                        }} 
                    ></div>
                    <CardBackground
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setOpen(false)}
                    ></CardBackground><CardCloseButton initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }} 
                        onClick={() => setOpen(false)} >X</CardCloseButton>
                </Fragment>
            )}
        </Fragment>
    );
}

const CardLink = styled(motion.div) <CardLinkProps>`
    height: 100%;
    width: 100%;
    background: rgba(31, 33, 70, 0);
    ${(props) =>
        props.open &&
        css`
        width: min(40rem, 95%);
        height: calc(100% - 10rem);
        overflow-y: auto;
        overflow-x: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        z-index: 10;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        background: rgba(31, 33, 70, 1);
    `}
`;

const CardImage = styled(motion.img) <CardImageProps>`
    width: 100%;
    height: auto;
`;

const CardBackground = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(10, 10, 10, 0.7);
`;

const CardCloseButton = styled(motion.button)`
    top: 15px;
    right: 15px; 
    z-index: 10;
    height: 2rem;
    width: 2rem;
    margin: 5;
    position: fixed;
    background: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    color: #000000;
    font-weight: 700; 
`;

