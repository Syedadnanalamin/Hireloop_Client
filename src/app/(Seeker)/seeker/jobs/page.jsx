import JobsCard from "@/Components/Shared/jobsCard/JobsCard";

export default async function JobList() {

    // Later:
    // const jobs = await getJobs();

    const jobs = [
        {
            _id: "1",
            jobTitle: "Junior Backend Developer",
            jobCategory: "Technology",
            jobType: "Hybrid",
            deadline: "2026-08-18",
            minSalary: "25000",
            maxSalary: "35000",
            currency: "BDT",
            responsibilities:
                "Develop RESTful APIs using Node.js and Express.js, manage MongoDB data and collaborate with frontend developers.",
            requirements:
                "Node.js, Express.js, MongoDB, JWT, Git, REST APIs.",
            location: "Dhaka, Bangladesh",
            status: "active",
            createdAt: "01 Jul 2026",
        },
        {
            _id: "2",
            jobTitle: "Frontend React Developer",
            jobCategory: "Technology",
            jobType: "Remote",
            deadline: "2026-09-01",
            minSalary: "40000",
            maxSalary: "60000",
            currency: "BDT",
            responsibilities:
                "Develop beautiful React applications using Next.js and Tailwind CSS.",
            requirements:
                "React, Next.js, Tailwind CSS, TypeScript.",
            location: "Remote",
            status: "active",
            createdAt: "10 Jul 2026",
        },
        {
            _id: "3",
            jobTitle: "Frontend React Developer",
            jobCategory: "Technology",
            jobType: "Remote",
            deadline: "2026-09-01",
            minSalary: "40000",
            maxSalary: "60000",
            currency: "BDT",
            responsibilities:
                "Develop beautiful React applications using Next.js and Tailwind CSS.",
            requirements:
                "React, Next.js, Tailwind CSS, TypeScript.",
            location: "Remote",
            status: "active",
            createdAt: "10 Jul 2026",
        },
        {
            _id: "4",
            jobTitle: "Frontend React Developer",
            jobCategory: "Technology",
            jobType: "Remote",
            deadline: "2026-09-01",
            minSalary: "40000",
            maxSalary: "60000",
            currency: "BDT",
            responsibilities:
                "Develop beautiful React applications using Next.js and Tailwind CSS.",
            requirements:
                "React, Next.js, Tailwind CSS, TypeScript.",
            location: "Remote",
            status: "active",
            createdAt: "10 Jul 2026",
        },
    ];

    return (
        <section className="mx-auto max-w-7xl py-10">

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-center bg-blue-500 rounded-full p-4">
                    Find Latest Jobs Here
                </h1>

                <p className="mt-2 text-base-content/60 text-center">
                    Discover opportunities that match your skills.
                </p>

            </div>

            <div className=" mx-auto grid gap-6 lg:grid-cols-2">

                {jobs.map((job) => (
                    <JobsCard
                        key={job._id}
                        job={job}
                    />
                ))}

            </div>

        </section>
    );
}