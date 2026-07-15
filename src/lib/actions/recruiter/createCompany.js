"use server"
import { serverPost } from "@/lib/core/server"

export const createCompany = (async (companydetails) => {

    console.log("server preview of company details", companydetails)

    const result = await serverPost("/recruiter/mycompany", companydetails);




})