import { serverGet } from "@/lib/core/server"

export const applications = async (recruiterId) => {
    const result = await serverGet(`/applications/${recruiterId}`)
    return result;

}
