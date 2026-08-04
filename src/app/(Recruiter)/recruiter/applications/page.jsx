import React from 'react';
import { getServerSession } from '@/lib/auth/server-session';
import { applications } from '@/lib/actions/recruiter/applications';
import ApplicationsClient from './ApplicationsClient';

const page = async () => {

    const recruiterSession = await getServerSession();
    const recruiterId = recruiterSession?.user?.id;

    const applicationsList = await applications(recruiterId);

    return (
        <div>
            <ApplicationsClient applications={applicationsList} />
        </div>
    );
};

export default page;