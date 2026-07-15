'use client'
import Jobstats from '@/Components/Recruiter/Jobstats/Jobstats';
import { authClient } from '@/lib/auth-client';
import React, { use } from 'react';

const RecruiterDashboard = () => {

    const { data: session, isPending } = authClient.useSession();



    return (
        <div className='py-4 flex flex-col gap-4'>
            <h1 className='text-2xl flex'>Welcome Back,
                {isPending && <span className="loading loading-dots loading-xs"></span>}
                {session?.user?.name}
            </h1>

            <Jobstats></Jobstats>
        </div>
    );
};

export default RecruiterDashboard;