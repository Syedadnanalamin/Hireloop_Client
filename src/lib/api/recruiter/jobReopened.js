import { clientUpdate } from "@/lib/api/client";

export const jobReopened = async (jobId) => {

    const res = await clientUpdate(`/recruiter/managejobs/${jobId}`, { status: "active" });
    return res;

}
