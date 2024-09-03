import { motion } from 'framer-motion';
import * as React from 'react';

import Navbar from '@/components/ui/Navbar';

export default function Header() {
  return (
    <motion.header
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className='backdrop-saturate-75 sticky top-0 z-20 overflow-hidden border-b-[1px] border-b-blue-900/60 bg-gradient-to-r from-blue-700/20 to-blue-900/10 shadow-xl shadow-blue-700/10 backdrop-blur-xl -backdrop-hue-rotate-15'
    >
      <Navbar />
    </motion.header>
  );
}
