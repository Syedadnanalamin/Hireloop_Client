import React from 'react';
import ManagejobsClient from './ManagejobsClient';
import { managejobs } from '@/lib/api/recruiter/managejobs';

const Managejobs = async () => {

    const jobsDetails = await managejobs();


    return (
        <div>
            <ManagejobsClient jobs={jobsDetails}></ManagejobsClient>
        </div>
    );
};

export default Managejobs;