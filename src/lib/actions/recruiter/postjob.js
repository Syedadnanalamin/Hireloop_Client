"use server"
import { serverPost } from "@/lib/core/server"

export const postJob = async (dataObject) => {

    const res = await serverPost("/recruiter/managejobs/add-new", dataObject);



}
