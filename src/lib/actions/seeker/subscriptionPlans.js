import { serverGet } from "@/lib/actions/server";

export const subscriptionPlans = async () => {
    const res = await serverGet("/pricing");
    return res;
}   
