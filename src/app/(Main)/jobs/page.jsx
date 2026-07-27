import React from 'react';
import { GetpublishedJobs } from "@/lib/api/seeker/getpublishedjobs";
import JobsClient from "./JobsClient";

const Jobs = async () => {
    const jobs = await GetpublishedJobs();

    return (
        <JobsClient initialJobs={jobs || []} />
    );
};

export default Jobs;