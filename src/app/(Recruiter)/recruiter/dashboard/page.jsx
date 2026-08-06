import Jobstats from '@/Components/Recruiter/Dashboard/Jobstats';
import RecentApplications from '@/Components/Recruiter/Dashboard/RecentApplications';
import TopCompanies from '@/Components/Recruiter/Dashboard/TopCompanies';
import WelcomeMessage from '@/Components/Recruiter/Dashboard/WelcomeMessage';
import { getPublishedJobs } from '@/lib/actions/recruiter/getPublishedjobs';
import React from 'react';
import { Usersession } from '@/lib/auth/server-session';
import { applications } from '@/lib/actions/recruiter/applications';

const RecruiterDashboard = async () => {

    const session = await Usersession();
    const reqruiterId = session?.user?.id;

    const jobs = await getPublishedJobs(reqruiterId);
    const totalApplications = await applications(reqruiterId);

    const totalActiveJobs = jobs.filter((job) => job.status === "active");

    const totalClosedJobs = jobs.filter((job) => job.status === "closed");


    return (
        <div className='py-4 flex flex-col gap-6'>
            <WelcomeMessage />

            <Jobstats
                totalJobs={jobs?.length || 0}
                totalApplicants={totalApplications?.length || 0}
                activeJobs={totalActiveJobs?.length || 0}
                jobsClosed={totalClosedJobs?.length || 0}
            />

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