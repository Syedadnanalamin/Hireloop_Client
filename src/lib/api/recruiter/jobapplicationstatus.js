import { clientUpdate } from "../client"

export const applicationStatus = async (jobId, status) => {


    const result = await clientUpdate(`/recruiter/applications/${jobId}`, { status });

    return result;
}