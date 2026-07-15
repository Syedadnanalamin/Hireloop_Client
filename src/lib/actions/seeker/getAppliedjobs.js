import { serverGet } from "@/lib/core/server";


export const getAppliedJobs = async (jobid, applierId) => {




    const res = await serverGet(`/jobs/${jobid}/apply/${applierId}`);

    return res;

}