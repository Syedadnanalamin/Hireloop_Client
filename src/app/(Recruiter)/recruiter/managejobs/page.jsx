import React from 'react';
import ManagejobsClient from './ManagejobsClient';
import { managejobs } from '@/lib/api/recruiter/managejobs';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const Managejobs = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const recruiterId = session?.user?.id;
    let companyDetails = null;

    if (recruiterId) {
        try {
            const Mycompany = await fetch(`${process.env.NEXT_SERVER_URL}/recruiter/mycompany/${recruiterId}`);
            if (Mycompany.ok) {
                companyDetails = await Mycompany.json();
            }
        } catch (error) {
            console.error("Error fetching company details:", error);
        }
    }

    const jobsDetails = await managejobs();


    return (
        <div>
            <ManagejobsClient jobs={jobsDetails} company={companyDetails}></ManagejobsClient>
        </div>
    );
};

export default Managejobs;