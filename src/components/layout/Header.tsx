import * as React from 'react';

import Navbar from '@/components/ui/Navbar';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 overflow-hidden bg-white'>
      <Navbar />
    </header>
  );
}
