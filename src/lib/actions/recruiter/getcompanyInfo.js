import { serverGet } from "../server"

export const getCompanyInfo = async (recruiterId) => {


    const res = await serverGet(`/recruiter/mycompany/${recruiterId}`)
    return res;

}