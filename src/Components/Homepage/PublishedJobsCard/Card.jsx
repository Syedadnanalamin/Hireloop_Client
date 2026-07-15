import Link from "next/link";

export default function Card({ job }) {
  return (
    <div className="card bg-[#242a33] border border-white/5 hover:border-violet-500/50 transition-all duration-300 shadow-xl">
      <div className="card-body p-6">

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {job.jobTitle}
            </h2>

            <p className="text-sm text-slate-400 mt-2 leading-6">
              {`${job.responsibilities.slice(0, 130)} Read more...`}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">

          <span className="badge badge-outline border-violet-500/20 text-slate-300">
            📍 {job.location}
          </span>

          <span className="badge badge-outline border-violet-500/20 text-slate-300">
            💼 {job.jobType}
          </span>

          <span className="badge badge-outline border-violet-500/20 text-slate-300">
            💰 {job.maxSalary}
          </span>

        </div>

        <div className="card-actions mt-8">
          <Link
            href={`/jobs/${job._id}`}
            className="text-violet-400 hover:text-violet-300 font-medium transition"
          >
            Apply Now →
          </Link>
        </div>

      </div>
    </div>
  );
}