import * as React from 'react';

import Header from './Header';

// interface Props {
//     children: React.ReactNode;
// }

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
