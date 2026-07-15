import { serverGet } from "@/lib/core/server";

export const findSpecificJob = async (id) => {

    const res = await serverGet(`/jobs/${id}`);
    return res;

}