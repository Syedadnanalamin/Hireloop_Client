import React from 'react';

import SeekerNav from '@/Components/Seeker/SeekerNav';
import Sidebar from '@/Components/Shared/Sidebar/Sidebar';
const Seekerlayout = ({ children }) => {
    return (
        <div>

            <div className="flex min-h-screen bg-[#111111]">
                <Sidebar></Sidebar>
                <main className="flex-1 lg:ml-[285px] p-3 flex flex-col">
                    <SeekerNav></SeekerNav>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Seekerlayout;