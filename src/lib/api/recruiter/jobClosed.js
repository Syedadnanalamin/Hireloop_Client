import { clientUpdate } from "@/lib/api/client";

export const jobClosed = async (jobId) => {

    const res = await clientUpdate(`/recruiter/managejobs/${jobId}`, { status: "closed" });
    return res;

}
