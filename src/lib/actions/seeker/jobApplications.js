import { clientPost } from "@/lib/api/client";


export const jobApplications = async (applicationData) => {

    const { jobId } = applicationData;
    console.log("job id is successfully extracted", jobId);
    const res = await clientPost(`/jobs/${jobId}/apply`, applicationData)

    return res;

}