import React from 'react';
import ManagejobsClient from './ManagejobsClient';
import { getServerSession } from '@/lib/auth/server-session';
import { getCompanyInfo } from '@/lib/actions/recruiter/getcompanyInfo';
import { manageRecruiterJobs } from '@/lib/actions/recruiter/manageRecruiterjobs';

const Managejobs = async () => {
    const session = await getServerSession();

    const recruiterId = session?.user?.id;
    let companyDetails = null;

    if (recruiterId) {

        companyDetails = await getCompanyInfo(recruiterId);

    }

    const jobsDetails = await manageRecruiterJobs(recruiterId);
    console.log(jobsDetails)

    return (
        <div>
            <ManagejobsClient jobs={jobsDetails} company={companyDetails}></ManagejobsClient>
        </div>
    );
};

export default Managejobs;