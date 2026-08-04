"use server"
import { serverPost } from "@/lib/actions/server"

export const createCompany = (async (companydetails) => {

    console.log("server preview of company details", companydetails)

    const result = await serverPost("/recruiter/mycompany", companydetails);




})