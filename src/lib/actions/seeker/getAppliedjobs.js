import { serverGet } from "@/lib/actions/server";


export const getAppliedJobs = async (jobid, applierId) => {




    const res = await serverGet(`/jobs/${jobid}/apply/${applierId}`);

    return res;

}