import { serverGet } from "@/lib/actions/server";

export const findSpecificJob = async (id) => {

    const res = await serverGet(`/jobs/${id}`);
    return res;

}