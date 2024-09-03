import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplashAnimation from '../content/SplashAnimation';


const TestSection = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    const handleAnimationComplete = () => {
        setTriggerAnimation(false);
    };

    const handleTriggerAnimation = () => {
        setTriggerAnimation(true);
    };

    return (
        <div className='relative z-50'>
            <button onClick={handleTriggerAnimation} className='bg-red-500'>Trigger Animation</button>
            <SplashAnimation
                triggerAnimation={triggerAnimation}
                onAnimationComplete={handleAnimationComplete}
            />
        </div>
    );
};

export default TestSection;
