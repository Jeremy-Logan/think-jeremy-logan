import { motion } from 'framer-motion';
import Goo from 'gooey-react';
import * as React from 'react';

export default function BlobBackground() {
  return (
    <div className='-pb-12 hue-rotate-10 fixed top-0 z-[-1] h-[110vh] w-[110vw] overflow-hidden bg-gradient-to-br from-[#182045] to-[#500226] blur-none'>
      <Goo intensity='strong'>
        <motion.svg width='100vw' height='100vh'>
          <defs>
            <linearGradient id='linear' x1='0%' y1='0%' x2='20%' y2='100%'>
              <stop offset='0%' stopColor='#5C18AB' />
              <stop offset='100%' stopColor='#460B6A' />
            </linearGradient>
          </defs>
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'easeInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='300'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'easeInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='80'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'easeInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='180'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'easeInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='160'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'backInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='100'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'backInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='130'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'backInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='50'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'backInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='80'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'backInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='40'
          />
          <motion.circle
            animate={{
              cx: [
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
                Math.floor(Math.random() * 2400 + 1),
              ],
              cy: [
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
                Math.floor(Math.random() * 1400 + 1),
              ],

              transition: {
                repeat: Infinity,
                duration: Math.floor(Math.random() * 60 + 80),
                ease: 'backInOut',
                repeatType: 'reverse',
              },
            }}
            fill='url(#linear)'
            r='90'
          />
        </motion.svg>
      </Goo>
    </div>
  );
}
