import { clientDelete } from "@/lib/api/client";

export const jobDeleted = async (jobId) => {

    const res = await clientDelete(`/recruiter/managejobs/${jobId}`);
    return res;

}
