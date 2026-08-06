"use client"

import { jobApplications } from "@/lib/actions/seeker/jobApplications";
import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
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
            status: "applied",
            hasInterview: false,
            ...data,
        }

        const serverRes = await jobApplications(applierData);
        if (serverRes) {
            router.back();
        }
    };

    return (
        <div className="min-h-screen bg-[#1F252D] py-16 px-4 relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px] pointer-events-none" />

            <div className="w-full max-w-2xl relative z-10">
                <div className="border border-white/10 bg-[#18181b]/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white tracking-tight">Apply for this Job</h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Fill in your details and submit your application.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-300 font-semibold text-sm mb-2">
                                Full Name
                            </label>

                            <div className="relative flex items-center w-full">
                                <FiUser className="absolute left-4 text-gray-500 text-lg" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#111113]/80 border border-white/5 focus:border-[#5C53FE]/60 focus:ring-1 focus:ring-[#5C53FE]/60 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    {...register("fullName", {
                                        required: "Full name is required",
                                    })}
                                />
                            </div>

                            {errors.fullName && (
                                <p className="text-rose-500 text-xs mt-1.5 font-medium">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 font-semibold text-sm mb-2">
                                Email Address
                            </label>

                            <div className="relative flex items-center w-full">
                                <FiMail className="absolute left-4 text-gray-500 text-lg" />
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-[#111113]/80 border border-white/5 focus:border-[#5C53FE]/60 focus:ring-1 focus:ring-[#5C53FE]/60 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                />
                            </div>

                            {errors.email && (
                                <p className="text-rose-500 text-xs mt-1.5 font-medium">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-gray-300 font-semibold text-sm mb-2">
                                Phone Number
                            </label>

                            <div className="relative flex items-center w-full">
                                <FiPhone className="absolute left-4 text-gray-500 text-lg" />
                                <input
                                    type="tel"
                                    placeholder="+8801XXXXXXXXX"
                                    className="w-full bg-[#111113]/80 border border-white/5 focus:border-[#5C53FE]/60 focus:ring-1 focus:ring-[#5C53FE]/60 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                    })}
                                />
                            </div>

                            {errors.phone && (
                                <p className="text-rose-500 text-xs mt-1.5 font-medium">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* CV Link */}
                        <div>
                            <label className="block text-gray-300 font-semibold text-sm mb-2">
                                CV Link
                            </label>

                            <div className="relative flex items-center w-full">
                                <FiLink className="absolute left-4 text-gray-500 text-lg" />
                                <input
                                    type="url"
                                    placeholder="https://drive.google.com/your-cv"
                                    className="w-full bg-[#111113]/80 border border-white/5 focus:border-[#5C53FE]/60 focus:ring-1 focus:ring-[#5C53FE]/60 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                                    {...register("cvLink", {
                                        required: "CV link is required",
                                        pattern: {
                                            value: /^https?:\/\/.+$/,
                                            message: "Please enter a valid URL",
                                        },
                                    })}
                                />
                            </div>

                            <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                                Google Drive, Dropbox, OneDrive, Cloudinary or any public PDF link.
                            </p>

                            {errors.cvLink && (
                                <p className="text-rose-500 text-xs mt-1.5 font-medium">
                                    {errors.cvLink.message}
                                </p>
                            )}
                        </div>

                        {/* Cover Letter */}
                        <div>
                            <label className="block text-gray-300 font-semibold text-sm mb-2">
                                Cover Letter
                                <span className="text-gray-500 font-normal ml-1.5">
                                    (Optional)
                                </span>
                            </label>

                            <div className="relative flex items-start w-full">
                                <FiFileText className="absolute left-4 top-4 text-gray-500 text-lg" />
                                <textarea
                                    rows={6}
                                    placeholder="Tell the recruiter why you're a great fit for this role..."
                                    className="w-full bg-[#111113]/80 border border-white/5 focus:border-[#5C53FE]/60 focus:ring-1 focus:ring-[#5C53FE]/60 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 resize-none"
                                    {...register("coverLetter")}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#5c53fe] to-[#736bff] text-white hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-indigo-500/20 rounded-xl py-4 font-bold text-sm cursor-pointer mt-6"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}