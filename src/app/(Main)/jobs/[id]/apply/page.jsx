import React from 'react';
import JobApplyForm from './JobApplyForm';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { getAppliedJobs } from '@/lib/actions/seeker/getAppliedjobs';
import { redirect } from 'next/navigation';



const page = async ({ params }) => {



    const session = await auth.api.getSession({

        headers: await headers() // headers containing the user's session token
    });
    const { id } = await params;


    const applierId = session?.user?.id;

    const res = await getAppliedJobs(id, applierId);

    const totalAppliedJobs = res.length;
    if (totalAppliedJobs > 3) {

        redirect(`/jobs/${id}`);


    }


    return (
        <div>
            <JobApplyForm></JobApplyForm>
        </div>
    );
};

export default page;