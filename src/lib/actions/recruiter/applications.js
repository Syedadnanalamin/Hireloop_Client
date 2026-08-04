import { serverGet } from "@/lib/actions/server"

export const applications = async (recruiterId) => {
    const result = await serverGet(`/applications/${recruiterId}`)
    return result;

}
