import Link from "next/link";

import Card from "./Card";
import { GetpublishedJobs } from "@/lib/api/seeker/getpublishedjobs";

export default async function PublishedJobsCard() {

    const jobs = await GetpublishedJobs()






    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center">

                    <p className="uppercase tracking-[5px] text-violet-400 text-sm mb-4">
                        Smart Job Discovery
                    </p>

                    <h2 className="text-5xl font-bold text-white max-w-3xl mx-auto">
                        The roles you'd never find by searching
                    </h2>

                </div>

                <div className="grid mt-16 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {jobs.slice(0, 6).map((job) => (
                        <Card
                            key={job._id}
                            job={job}
                        />
                    ))}

                </div>

                <div className="flex justify-center mt-14">

                    <Link
                        href="/jobs"
                        className="btn bg-white hover:bg-violet-600 hover:text-white border-none text-black px-8"
                    >
                        View All Jobs
                    </Link>

                </div>

            </div>

        </section>
    );
}