import React from 'react';
import Navbar from '@/Components/Recruiter/Navbar/Navbar';
import Sidebar from '@/Components/Shared/Sidebar/Sidebar';
const Recruiterlayout = ({ children }) => {
    return (
        <div>

            <div className="flex min-h-screen bg-[#111111]">
                <div className='max-w-[284px]'>
                    <Sidebar></Sidebar>
                </div>
                <main className="flex-1 lg:ml-[285px] p-6 flex flex-col">
                    <Navbar></Navbar>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Recruiterlayout;