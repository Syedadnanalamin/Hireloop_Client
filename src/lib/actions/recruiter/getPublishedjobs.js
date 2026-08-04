import { serverGet } from "../server";


// you can get jobs by recruiter id 
export const getPublishedJobs = async (recruiterId) => {

    const res = await serverGet(`/jobs/recruiter/${recruiterId}`);
    return res;
}
