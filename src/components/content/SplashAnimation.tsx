import { useState, useEffect } from "react";
import SVG from 'react-inlinesvg';

const frames = ['/images/splash-anim/splash-anim0001.svg', '/images/splash-anim/splash-anim0002.svg', '/images/splash-anim/splash-anim0003.svg', '/images/splash-anim/splash-anim0004.svg', '/images/splash-anim/splash-anim0005.svg', '/images/splash-anim/splash-anim0006.svg', '/images/splash-anim/splash-anim0007.svg', '/images/splash-anim/splash-anim0008.svg', '/images/splash-anim/splash-anim0009.svg'] as string[];

interface SplashAnimationProps {
    triggerAnimation: boolean;
    onAnimationComplete: () => void;
    style?: React.CSSProperties;
    color?: string;
}

const SplashAnimation = ({ triggerAnimation, onAnimationComplete, style, color }: SplashAnimationProps) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (triggerAnimation && !isPlaying) {
            setCurrentFrame(0);
            setIsPlaying(true);
        }
    }, [triggerAnimation, isPlaying]);

    useEffect(() => {
        let intervalId: NodeJS.Timer | undefined;

        if (isPlaying) {
            intervalId = setInterval(() => {
                setCurrentFrame((prevFrame) => {
                    if (prevFrame + 1 >= frames.length) {
                        setIsPlaying(false);
                        onAnimationComplete();
                        return 0;
                    }
                    return prevFrame + 1;
                });
            }, 45); // Adjust this value to control animation speed
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPlaying, onAnimationComplete]);

    if (!isPlaying) {
        return null;
    }

    return (
        <div style={style}>
            <SVG 
                src={frames[currentFrame] || ''} 
                height={200} 
                width={300} 
                preProcessor={(code) => {
                    code = code.replace(/fill=".*?"/g, `fill="${color || '#55baea'}"`);
                    code = code.replace(/stroke=".*?"/g, `stroke="${color || '#55baea'}"`);
                    return code;
                }}
            />
        </div>
    );
}

export default SplashAnimation;