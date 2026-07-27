import { GetpublishedJobs } from "@/lib/api/seeker/getpublishedjobs";
import SeekerJob from "./SeekerJob";

export default async function Page() {


    const jobs = await GetpublishedJobs();


    return <SeekerJob jobs={jobs} />;
}
