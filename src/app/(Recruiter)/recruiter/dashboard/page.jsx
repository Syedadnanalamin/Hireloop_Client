'use client'
import Jobstats from '@/Components/Recruiter/Dashboard/Jobstats';
import RecentApplications from '@/Components/Recruiter/Dashboard/RecentApplications';
import TopCompanies from '@/Components/Recruiter/Dashboard/TopCompanies';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboard = () => {

    const { data: session, isPending } = authClient.useSession();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className='py-4 flex flex-col gap-6'>
            <h1 className='text-2xl font-bold text-white flex items-center gap-2'>
                Welcome back,{" "}
                {!mounted || isPending ? (
                    <span className="loading loading-dots loading-xs text-[#5C53FE]"></span>
                ) : (
                    session?.user?.name || "Recruiter"
                )}
            </h1>

            <Jobstats></Jobstats>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 flex">
                    <RecentApplications />
                </div>
                <div className="flex w-full">
                    <TopCompanies />
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashboard;