import { serverGet } from "@/lib/core/server"

export const findPlanlimit = async (myplan) => {


    const res = await serverGet(`/pricing?currPlan=${myplan}`);

    return res;

}