import { serverGet } from "../server";

// Get managed jobs for recruiter
export const manageRecruiterJobs = async (recruiterId) => {

    const res = await serverGet(`/recruiter/managejobs/${recruiterId}`);
    return res;


}