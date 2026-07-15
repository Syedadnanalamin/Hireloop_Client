import { serverGet } from "@/lib/core/server";

export const GetpublishedJobs = async () => {


    const res = await serverGet("/jobs");

    return res;


}