import { clientUpdate } from "@/lib/api/client";

export const UpdateRecruiterProfile = async (recruiterId, profileData) => {
    console.log("UpdateRecruiterProfile starting...", { recruiterId, profileData });
    const result = await clientUpdate(`/user/${recruiterId}`, profileData);
    console.log("UpdateRecruiterProfile finished. Result:", result);
    return result;
};