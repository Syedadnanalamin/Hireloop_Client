import { serverGet } from "@/lib/actions/server";

export const GetpublishedJobs = async () => {


    const res = await serverGet("/jobs");

    return res;


}