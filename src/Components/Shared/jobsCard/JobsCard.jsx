import Link from "next/link";
import {
    FiMapPin,
    FiClock,
    FiBriefcase,
    FiDollarSign,
    FiArrowRight,
} from "react-icons/fi";

export default function JobsCard({ job }) {
    return (
        <div className="group rounded-2xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:border-primary hover:shadow-2xl">

            {/* Top */}

            <div className="flex items-start justify-between">

                <div>

                    <span className="badge badge-primary badge-outline">
                        {job.jobCategory}
                    </span>

                    <h2 className="mt-3 text-2xl font-bold group-hover:text-primary transition">
                        {job.jobTitle}
                    </h2>

                </div>

                <span
                    className={`badge ${job.status === "active"
                        ? "badge-success"
                        : "badge-error"
                        }`}
                >
                    {job.status}
                </span>

            </div>

            {/* Meta */}

            <div className="mt-5 flex flex-wrap gap-5 text-sm text-base-content/70">

                <div className="flex items-center gap-2">
                    <FiMapPin />
                    {job.location}
                </div>

                <div className="flex items-center gap-2">
                    <FiBriefcase />
                    {job.jobType}
                </div>

                <div className="flex items-center gap-2">
                    <FiClock />
                    Deadline: {job.deadline}
                </div>

            </div>

            {/* Salary */}

            <div className="mt-6 rounded-xl bg-base-200 p-4">

                <div className="flex items-center gap-2 text-primary font-semibold">
                    <FiDollarSign />
                    Salary
                </div>

                <p className="mt-2 text-lg font-bold">
                    {job.minSalary} - {job.maxSalary} {job.currency}
                </p>

            </div>

            {/* Description */}

            <div className="mt-6 space-y-4">

                <div>
                    <h3 className="font-semibold">
                        Responsibilities
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-base-content/70">
                        {job.responsibilities}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Requirements
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-base-content/70">
                        {job.requirements}
                    </p>
                </div>

            </div>

            {/* Footer */}

            <div className="mt-8 flex items-center justify-between">

                <p className="text-xs text-base-content/50">
                    Posted {job.createdAt}
                </p>

                <Link
                    href={`/jobs/${job._id}`}
                    className="btn btn-primary rounded-xl"
                >
                    View Details
                    <FiArrowRight />
                </Link>

            </div>

        </div>
    );
}