import Footer from '@/Components/Shared/Footer/Footer';
import Navbar from '@/Components/Shared/Navbar/Navbar';
import React from 'react';

const HomepageLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default HomepageLayout;