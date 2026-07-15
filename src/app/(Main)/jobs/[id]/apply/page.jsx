import React from 'react';
import JobApplyForm from './JobApplyForm';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { getAppliedJobs } from '@/lib/actions/seeker/getAppliedjobs';
import { redirect } from 'next/navigation';
import ApplicationLimit from './applicationLimit';
import { findPlanlimit } from '@/lib/actions/seeker/findplanlimit';



const page = async ({ params }) => {

    const { id } = await params;

    const session = await auth.api.getSession({

        headers: await headers() // headers containing the user's session token
    });

    const applierId = session?.user?.id;
    const curUserPlan = session?.user?.plan;


    const PlanLimit = await findPlanlimit(curUserPlan);
    const userPlanLimit = PlanLimit.limit;


    const res = await getAppliedJobs(id, applierId);
    const totalAppliedJobs = res.length;

    if (totalAppliedJobs >= userPlanLimit) {

        return (
            <div>
                <ApplicationLimit limitApplications={userPlanLimit}></ApplicationLimit>
            </div>
        );

    }


    return (
        <div>
            <JobApplyForm></JobApplyForm>
        </div>
    );
};

export default page;