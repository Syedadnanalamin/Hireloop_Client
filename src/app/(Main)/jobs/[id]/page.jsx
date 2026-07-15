import { findSpecificJob } from "@/lib/actions/seeker/findSpecificJob";
import JobDetails from "./JobDetails";

const page = async ({ params }) => {
    const { id } = await params;
    const specificJobDetails = await findSpecificJob(id);


    return (
        <div>
            <JobDetails jobData={specificJobDetails}></JobDetails>
        </div>
    );
};

export default page;