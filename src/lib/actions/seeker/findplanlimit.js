import { serverGet } from "@/lib/actions/server"

export const findPlanlimit = async (myplan) => {


    const res = await serverGet(`/pricing?currPlan=${myplan}`);

    return res;

}