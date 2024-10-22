'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import Image from "next/image";
import { getCloudinaryImageUrl } from "../../utils/cloudinary";
import { AnimatePresence, motion } from "framer-motion";
import SplashAnimation from './SplashAnimation';

interface PortfolioCardProps {
    project: {
        title: string;
        subtitle: string;
        id: string;
        content: {
            link: string;
            imageURL: string;
            description: string;
            features?: {
                title: string;
                description: string;
                imageURL: string;
                color: string;
            }[];
        };
    };
}




function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const PortfolioCard = ({ project }: PortfolioCardProps) => {
    const [selectedFeature, setSelectedFeature] = useState(project.content.features?.[0] || null);
    const { title, subtitle, content } = project;
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const [splashPosition, setSplashPosition] = useState({ x: 0, y: 0 });
    const animationPlayedRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleAnimationComplete = useCallback(() => {
        setTriggerAnimation(false);
        animationPlayedRef.current = true;
    }, []);

    const handleLineComplete = useCallback((x: number, y: number) => {
        if (!animationPlayedRef.current) {
            setSplashPosition({ x, y });
            setTriggerAnimation(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Adjust the breakpoint as needed
        };

        handleResize(); // Set the initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const TracingLine = useMemo(() => {
        const TracingLineComponent = ({ isVisible, selectedFeature, onLineComplete }: { isVisible: boolean, selectedFeature: { title: string, description: string, color: string }, onLineComplete: (x: number, y: number) => void }) => {
            const svgRef = useRef<SVGSVGElement>(null);
            const pathRef = useRef<SVGPathElement>(null);

            useEffect(() => {
                const updatePath = () => {
                    const svg = svgRef.current;
                    const path = pathRef.current;
                    const featureBox = document.querySelector(`[data-feature="${selectedFeature.title}"]`);
                    const image = svg?.closest('.relative')?.querySelector('.project-image');

                    if (svg && path && featureBox && image) {
                        const svgRect = svg.getBoundingClientRect();
                        const featureRect = featureBox.getBoundingClientRect();
                        const imageRect = image.getBoundingClientRect();

                        const startX = featureRect.right - svgRect.left;
                        const startY = featureRect.top + featureRect.height / 2 - svgRect.top;
                        const endX = imageRect.left - svgRect.left;
                        const endY = imageRect.top + imageRect.height / 2 - svgRect.top;

                        const midX = (startX + endX) / 2;

                        path.setAttribute('d', `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`);

                        // Calculate the endpoint of the line and trigger the callback
                        const pathLength = path.getTotalLength();
                        const point = path.getPointAtLength(pathLength);
                        setTimeout(() => onLineComplete(point.x, point.y), 100);
                    }
                };

                const delayedUpdatePath = () => {
                    setTimeout(updatePath, 300); // Delay the calculation by 300ms
                };

                delayedUpdatePath();
                window.addEventListener('resize', delayedUpdatePath);
                return () => window.removeEventListener('resize', delayedUpdatePath);
            }, [selectedFeature, onLineComplete]);

            return (
                <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    <motion.path
                        ref={pathRef}
                        fill="none"
                        stroke={selectedFeature.color}
                        strokeWidth="8"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isVisible ? 1 : 0 }}
                        transition={{ duration: 0.15, ease: "easeInOut", delay: 0.3 }}
                        filter={`drop-shadow(0 0 20px ${selectedFeature.color}) drop-shadow(0 0 10px ${selectedFeature.color})`}
                    />
                </svg>
            );
        };
        TracingLineComponent.displayName = 'TracingLine';
        return TracingLineComponent;
    }, []);


    const BlobbyBorder = useMemo(() => {
        const BlobbyBorderComponent = ({ id }: { id: string | number }) => (
            <motion.svg
                key={id}
                className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] selected-feature"
                xmlns="http://www.w3.org/2000/svg"
            >
                {Array.from({ length: 12 }).map((_, index) => (
                    <motion.rect
                        key={index}
                        x="8" y="8"
                        rx="8" ry="8"
                        width="calc(100% - 16px)" height="calc(100% - 16px)"
                        fill="none"
                        stroke="#3b82f6"
                        strokeLinecap="round"
                        initial={{
                            opacity: 0,
                            strokeWidth: 2,
                            strokeDasharray: `${0.3 * (index + 1)} ${1.2 * (index + 1)}`,
                        }}
                        animate={{
                            opacity: selectedFeature?.title === id ? 1 : 0.3,
                            strokeDasharray: selectedFeature?.title === id
                                ? [`${0.2 * (index + 1)} ${2.4 * (index + 1)}`, `${0.4 * (index + 1)} ${2.2 * (index + 1)}`]
                                : `${0.3 * (index + 1)} ${1.2 * (index + 1)}`,
                            strokeWidth: selectedFeature?.title === id
                                ? [(index + 5) * 0.6, (index + 5) * 0.9, (index + 5) * 0.4]
                                : 2,
                        }}
                        transition={{
                            opacity: {
                                duration: 0.75,
                                ease: "easeOut",
                            },
                            strokeDasharray: {
                                duration: selectedFeature?.title === id ? index * Math.floor(Math.random() * 5) : 0,
                                ease: "easeInOut",
                                repeat: selectedFeature?.title === id ? Infinity : 0,
                                repeatType: "reverse",
                            },
                            strokeWidth: {
                                duration: selectedFeature?.title === id ? index * 0.2 : 0,
                                ease: "easeInOut",
                                repeat: selectedFeature?.title === id ? Infinity : 0,
                                repeatType: "reverse",
                            },
                        }}
                    />
                ))}
            </motion.svg>
        );
        BlobbyBorderComponent.displayName = 'BlobbyBorder';
        return BlobbyBorderComponent;
    }, [selectedFeature]);

    return (
        <div className="relative">
            <div className="relative mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Project details */}
                <div className="max-w-3xl col-span-2 lg:self-end">

                    <div>
                        <h1 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Project information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-md uppercase text-white sm:text-md">{subtitle}</p>


                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-white whitespace-pre-line">{content.description}</p>
                        </div>

                    </section>
                </div>

                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Project Features
                        </h2>
                        <div className="sm:flex sm:justify-between">
                            {/* Feature selector */}
                            <fieldset>
                                <legend className="text-lg uppercase mb-4 font-medium text-white">Features</legend>
                                <RadioGroup
                                    value={selectedFeature}
                                    onChange={(feature) => {
                                        setSelectedFeature(feature);
                                        setTriggerAnimation(false);
                                        animationPlayedRef.current = false;
                                    }}
                                    className="mt-1 grid grid-cols-1 gap-4"
                                >
                                    {content.features?.map((feature) => (
                                        <AnimatePresence key={feature.title}>
                                            <Radio
                                                value={feature}
                                                style={{
                                                    borderColor: selectedFeature === feature ? feature.color : 'gray',
                                                    borderWidth: selectedFeature === feature ? '8px' : '2px',
                                                    boxShadow: selectedFeature === feature ? `0px 0px 15px 5px ${feature.color}` : 'none'
                                                }}
                                                className={classNames(
                                                    `group relative block border cursor-pointer mb-2 rounded-lg transition-all duration-500 focus:outline-none overflow-hidden`
                                                )}
                                                data-feature={feature.title}
                                            >
                                                {/* <AnimatePresence>
                                                    {selectedFeature === feature && <BlobbyBorder id={feature.title} />}
                                                </AnimatePresence> */}

                                                <div className="relative z-10 p-6">
                                                    {isMobile &&selectedFeature === feature && (
                                                        <div className="lg:hidden aspect-h-1 aspect-w-1 rounded-lg project-image relative mb-4 overflow-hidden origin-bottom">
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{
                                                                height: selectedFeature === feature ? "auto" : 0,
                                                                opacity: selectedFeature === feature ? 1 : 0
                                                            }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="absolute inset-0 rounded-xl origin-bottom"
                                                        >
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{
                                                                    height: selectedFeature === feature ? "auto" : 0,
                                                                    opacity: selectedFeature === feature ? 1 : 0
                                                                }}
                                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                style={{ backgroundColor: feature.color, overflow: "hidden" }}
                                                                className="absolute inset-0 rounded-xl overflow-hidden " />
                                                            <Image
                                                                src={getCloudinaryImageUrl(`${feature.imageURL}`)}
                                                                alt={feature.title}
                                                                fill={true}
                                                                style={{ objectFit: "cover", scale: '98%', borderRadius: '10px' }}
                                                                sizes="(max-width: 768px) 45vw,"
                                                            />
                                                        </motion.div>


                                                    </div>)}
                                                    <p className="text-base font-medium text-white">{feature.title}</p>
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{
                                                            height: selectedFeature === feature ? "auto" : 0,
                                                            opacity: selectedFeature === feature ? 1 : 0
                                                        }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        style={{ overflow: "hidden" }}
                                                    >
                                                        <p className="mt-3 text-sm text-white leading-relaxed whitespace-pre-line">{feature.description}</p>
                                                    </motion.div>
                                                </div>
                                            </Radio>
                                        </AnimatePresence>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>

                    </section>
                </div>
                <div className="hidden lg:block lg:col-start-2 lg:row-span-2 lg:self-center ">
                    <div className="aspect-h-1 aspect-w-1 rounded-lg project-image relative">
                        <AnimatePresence>
                            {content.features?.map((feature) => (
                                selectedFeature === feature && (
                                    <motion.div
                                        key={feature.title}
                                        data-feature={feature.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0.75 }}
                                        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-xl"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                                            style={{ backgroundColor: feature.color, boxShadow: `0px 0px 15px 5px ${feature.color}` }}
                                            className="absolute inset-0 rounded-xl overflow-hidden " />
                                        <Image
                                            src={getCloudinaryImageUrl(`${feature.imageURL}`)}
                                            alt={feature.title}
                                            fill={true}
                                            style={{ objectFit: "cover", scale: '98%', borderRadius: '10px' }}
                                            sizes="(max-width: 768px) 45vw,"
                                        />

                                        {/* <BlobbyBorder id={feature.title} /> */}
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className='hidden lg:block absolute inset-0'>
                    <AnimatePresence>
                        {selectedFeature && (
                            <TracingLine
                                key={selectedFeature.title}
                                isVisible={true}
                                selectedFeature={selectedFeature}
                                onLineComplete={handleLineComplete}
                            />
                        )}
                    </AnimatePresence>
                    <SplashAnimation
                        triggerAnimation={triggerAnimation}
                        onAnimationComplete={handleAnimationComplete}
                        color={selectedFeature?.color}
                        style={{
                            position: 'absolute',
                            left: `${splashPosition.x - 35}px`,
                            top: `${splashPosition.y}px`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 20
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;
