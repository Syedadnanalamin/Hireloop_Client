"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { createCompany } from "@/lib/actions/recruiter/createCompany";
import { authClient } from "@/lib/auth-client";
import CreateYourCompany from "@/Components/Recruiter/Mycompany/CreateYourCompany";


// Replace with your actual ImgBB API key (Ideally, use process.env.NEXT_PUBLIC_IMGBB_API_KEY)
const IMGBB_API_KEY = "YOUR_IMGBB_API_KEY_HERE";

export default function MyCompany() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [logoPreview, setLogoPreview] = useState("");
    const { data: session } = authClient.useSession()

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            companyName: "",
            industry: "Technology",
            websiteUrl: "",
            location: "",
            employeeCount: "1-10 employees",
            companyLogo: "",
            description: "",
        },
    });

    const watchLogo = watch("companyLogo");


    useEffect(() => {
        const modal = document.getElementById("register_modal");

        if (searchParams.get("modal") === "new") {
            modal.showModal();
        } else {
            modal.close();
        }
    }, [searchParams]);

    // Handle Image Upload to ImgBB
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);

        // Preview locally first
        setLogoPreview(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=acea519dce0f6c45d6fad6437f175d43`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                // Set the uploaded image URL into React Hook Form state
                setValue("companyLogo", data.data.url, { shouldValidate: true });
            } else {
                alert("Failed to upload image to ImgBB.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("An error occurred during image upload.");
        } finally {
            setIsUploading(false);
        }
    };

    // Form Submission
    const onSubmit = async (data) => {

        if (!session?.user) {
            alert("please log in first");
            return;
        }

        const recruiterId = session?.user?.id;



        const updatedCompanyData = {

            ...data,
            recruiterId

        }
        router.back()
        router.refresh()

        await createCompany(updatedCompanyData);

    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-white">

            {/* --- Step 1: Empty State View --- */}
            <CreateYourCompany></CreateYourCompany>

            {/* --- Step 2: Modal Registration Form --- */}
            <dialog id="register_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-md bg-black/40">
                <div className="modal-box bg-[#1b1b1f] border border-white/10 text-white max-w-2xl rounded-3xl p-8 relative shadow-2xl">

                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl"
                        onClick={() => router.back()}
                    >
                        ✕
                    </button>

                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white">Register New Company</h3>
                        <p className="text-xs text-zinc-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Company Name */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Acme Corp"
                                    className={`bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-4 h-11 text-white placeholder-zinc-500 transition-all ${errors.companyName ? 'border-red-500/50 focus:border-red-500' : ''}`}
                                    {...register("companyName", { required: "Company name is required" })}
                                />
                            </div>

                            {/* Industry / Category */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Industry / Category</label>
                                <select
                                    className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-3 h-11 text-white transition-all appearance-none"
                                    {...register("industry")}
                                >
                                    <option value="Technology">Technology</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Website URL */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Website URL</label>
                                <div className="flex rounded-xl overflow-hidden bg-[#242429] border border-white/10 focus-within:border-[#5C53FE]/70 h-11 transition-all">
                                    <span className="bg-[#1f1f23] text-zinc-500 px-3.5 flex items-center text-xs select-none border-r border-white/10">https://</span>
                                    <input
                                        type="text"
                                        placeholder="www.company.com"
                                        className="bg-transparent px-4 w-full text-sm focus:outline-none text-white placeholder-zinc-500"
                                        {...register("websiteUrl")}
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Location</label>
                                <div className="flex items-center rounded-xl bg-[#242429] border border-white/10 focus-within:border-[#5C53FE]/70 h-11 px-4 gap-2 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-zinc-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="City, Country"
                                        className="bg-transparent w-full text-sm focus:outline-none text-white placeholder-zinc-500"
                                        {...register("location", { required: "Location is required" })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Employee Count Range */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Employee Count Range</label>
                                <select
                                    className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-3 h-11 text-white transition-all appearance-none"
                                    {...register("employeeCount")}
                                >
                                    <option value="1-10 employees">1-10 employees</option>
                                    <option value="11-50 employees">11-50 employees</option>
                                    <option value="51-200 employees">51-200 employees</option>
                                    <option value="200+ employees">200+ employees</option>
                                </select>
                            </div>

                            {/* Company Logo Image Upload */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Company Logo</label>
                                <div className="flex gap-3 items-center">
                                    <label className="flex flex-col items-center justify-center w-12 h-12 bg-[#242429] border border-dashed border-white/20 hover:border-[#5C53FE] rounded-xl cursor-pointer overflow-hidden transition-all duration-300 relative">
                                        {logoPreview ? (
                                            <img src={logoPreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-zinc-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                            </svg>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                    <div className="text-left">
                                        <p className="text-xs font-semibold text-zinc-300">
                                            {isUploading ? "Uploading..." : watchLogo ? "Logo Uploaded!" : "Upload Logo"}
                                        </p>
                                        <p className="text-[10px] text-zinc-500">PNG, JPG up to 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brief Description */}
                        <div className="form-control w-full">
                            <label className="label-text text-xs text-zinc-400 font-semibold mb-1.5">Brief Description</label>
                            <textarea
                                rows="3"
                                placeholder="Tell us about your company's mission and culture..."
                                className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl p-4 text-white placeholder-zinc-500 resize-none transition-all"
                                {...register("description")}
                            />
                        </div>

                        {/* Form Footer Buttons */}
                        <div className="flex justify-end gap-3 pt-5 border-t border-white/5 mt-6">
                            <button
                                type="button"
                                className="bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white px-6 py-2.5 rounded-xl font-medium transition-all"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isUploading || isSubmitting}
                                className="bg-[#5C53FE] hover:bg-[#4b42e2] text-white font-semibold px-8 py-2.5 rounded-xl transition-all duration-300 shadow-xl shadow-[#5C53FE]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Registering..." : "Register Company"}
                            </button>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    );
}