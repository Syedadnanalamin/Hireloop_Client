"use client"

import { jobApplications } from "@/lib/actions/seeker/jobApplications";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiLink, FiFileText } from "react-icons/fi";

export default function JobApplyForm() {
    const { data: session } = authClient.useSession()
    const userId = session?.user?.id;
    const { id } = useParams();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = async (data) => {

        const applierData = {
            jobId: id,
            applierId: userId,
            ...data,


        }

        const serverRes = await jobApplications(applierData);
        if (serverRes) {

            router.back();
        }
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="card bg-base-100 shadow-2xl border border-base-300">
                    <div className="card-body p-8 md:p-10">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold">Apply for this Job</h2>
                            <p className="text-base-content/70 mt-2">
                                Fill in your details and submit your application.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* Full Name */}
                            <div>
                                <label className="label font-semibold">
                                    Full Name
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full">
                                    <FiUser className="text-lg opacity-70" />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="grow"
                                        {...register("fullName", {
                                            required: "Full name is required",
                                        })}
                                    />
                                </label>

                                {errors.fullName && (
                                    <p className="text-error text-sm mt-1">
                                        {errors.fullName.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label font-semibold">
                                    Email Address
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full">
                                    <FiMail className="text-lg opacity-70" />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="grow"
                                        {...register("email", {
                                            required: "Email is required",
                                        })}
                                    />
                                </label>

                                {errors.email && (
                                    <p className="text-error text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="label font-semibold">
                                    Phone Number
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full">
                                    <FiPhone className="text-lg opacity-70" />
                                    <input
                                        type="tel"
                                        placeholder="+8801XXXXXXXXX"
                                        className="grow"
                                        {...register("phone", {
                                            required: "Phone number is required",
                                        })}
                                    />
                                </label>

                                {errors.phone && (
                                    <p className="text-error text-sm mt-1">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            {/* CV Link */}
                            <div>
                                <label className="label font-semibold">
                                    CV Link
                                </label>

                                <label className="input input-bordered flex items-center gap-3 w-full">
                                    <FiLink className="text-lg opacity-70" />
                                    <input
                                        type="url"
                                        placeholder="https://drive.google.com/your-cv"
                                        className="grow"
                                        {...register("cvLink", {
                                            required: "CV link is required",
                                            pattern: {
                                                value: /^https?:\/\/.+$/,
                                                message: "Please enter a valid URL",
                                            },
                                        })}
                                    />
                                </label>

                                <p className="text-xs text-base-content/60 mt-2">
                                    Google Drive, Dropbox, OneDrive, Cloudinary or any public PDF
                                    link.
                                </p>

                                {errors.cvLink && (
                                    <p className="text-error text-sm mt-1">
                                        {errors.cvLink.message}
                                    </p>
                                )}
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label className="label font-semibold">
                                    Cover Letter
                                    <span className="text-base-content/50 ml-2">
                                        (Optional)
                                    </span>
                                </label>

                                <label className="textarea textarea-bordered flex gap-3 w-full">
                                    <FiFileText className="mt-1 text-lg opacity-70" />
                                    <textarea
                                        rows={6}
                                        placeholder="Tell the recruiter why you're a great fit for this role..."
                                        className="grow resize-none outline-none"
                                        {...register("coverLetter")}
                                    />
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg w-full mt-4"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}