import React from 'react';
import Sidebar from '@/Components/Recruiter/Sidebar/Sidebar';
import Navbar from '@/Components/Recruiter/Navbar/Navbar';
const Recruiterlayout = ({ children }) => {
    return (
        <div>

            <div className="flex min-h-screen bg-[#111111]">
                <Sidebar></Sidebar>
                <main className="flex-1 lg:ml-[285px] p-6 flex flex-col">
                    <Navbar></Navbar>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Recruiterlayout;