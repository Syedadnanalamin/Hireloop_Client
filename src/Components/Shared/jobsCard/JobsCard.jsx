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
        <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#18181b]/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#202024]/80 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1">
            {/* Ambient subtle glow effect inside card on hover */}
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl transition-all duration-300 group-hover:bg-indigo-500/10" />

            {/* Top Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {job.jobCategory}
                    </span>
                    <h2 className="mt-3 text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-200">
                        {job.jobTitle}
                    </h2>
                </div>

                <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                        job.status === "active"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    }`}
                >
                    <span className={`h-1.5 w-1.5 rounded-full ${
                        job.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-rose-400"
                    }`} />
                    {job.status}
                </span>
            </div>

            {/* Meta tags */}
            <div className="mt-5 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 bg-[#222226] border border-white/5 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-300">
                    <FiMapPin className="text-gray-500" />
                    {job.location}
                </div>

                <div className="flex items-center gap-1.5 bg-[#222226] border border-white/5 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-300">
                    <FiBriefcase className="text-gray-500" />
                    {job.jobType}
                </div>

                <div className="flex items-center gap-1.5 bg-[#222226] border border-white/5 px-2.5 py-1 rounded-lg text-xs font-medium text-gray-300">
                    <FiClock className="text-gray-500" />
                    {job.deadline}
                </div>
            </div>

            {/* Salary Container */}
            <div className="mt-6 flex items-center justify-between border border-white/5 bg-[#1f1f23]/60 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <FiDollarSign className="text-sm" />
                    Salary
                </div>
                <p className="text-base font-extrabold text-white">
                    {Number(job.minSalary).toLocaleString()} - {Number(job.maxSalary).toLocaleString()} <span className="text-indigo-400 text-xs font-medium">{job.currency}</span>
                </p>
            </div>

            {/* Responsibilities & Requirements */}
            <div className="mt-6 space-y-4 border-t border-white/5 pt-5">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Responsibilities
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-300 leading-relaxed line-clamp-2">
                        {job.responsibilities}
                    </p>
                </div>

                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Requirements
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-300 leading-relaxed line-clamp-2">
                        {job.requirements}
                    </p>
                </div>
            </div>

            {/* Card Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <p className="text-[11px] text-gray-500">
                    Posted {job.createdAt}
                </p>

                <Link
                    href={`/jobs/${job._id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5c53fe] to-[#736bff] text-white hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md shadow-indigo-500/10 rounded-xl px-4 py-2.5 font-bold text-xs"
                >
                    View Details
                    <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}