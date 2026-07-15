import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";

const ApplicationLimit = ({ limitApplications }) => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-xl w-full text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <HiOutlineSparkles className="text-primary text-3xl" />
                </div>

                <h1 className="text-3xl font-bold">
                    You've reached your application limit
                </h1>

                <p className="mt-4 text-base-content/65 leading-7">
                    You've used all{" "}
                    <span className="font-semibold">
                        {limitApplications} of {limitApplications}
                    </span>{" "}
                    applications included in your current plan.
                </p>

                <p className="mt-2 text-base-content/60">
                    Upgrade your subscription to continue applying for jobs without
                    interruption.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-base-300 bg-base-200 px-6 py-4">
                    <span className="text-2xl font-bold">
                        {limitApplications}
                        <span className="text-base-content/40">
                            /{limitApplications}
                        </span>
                    </span>

                    <div className="divider divider-horizontal m-0"></div>

                    <span className="text-sm text-base-content/60">
                        Applications Used
                    </span>
                </div>

                <div className="mt-10 flex justify-center gap-3">
                    <Link href="/pricing" className="btn btn-primary px-8">
                        Upgrade Plan
                    </Link>

                    <Link href="/jobs" className="btn bg-green-600 px-8">
                        Browse Jobs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ApplicationLimit;