import { serverGet } from "@/lib/core/server";

export const subscriptionPlans = async () => {
    const res = await serverGet("/pricing");
    return res;
}   
