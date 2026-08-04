import React from 'react';

import SeekerNav from '@/Components/Seeker/SeekerNav';
import Sidebar from '@/Components/Shared/Sidebar/Sidebar';
import { getServerSession } from '@/lib/auth/server-session';
import { redirect } from 'next/navigation';
const Seekerlayout = async ({ children }) => {
    const session = await getServerSession();
    if (session?.user?.role !== 'seeker') {
        redirect('/unauthorized');
    }
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