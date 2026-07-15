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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0d0d] text-white p-4">

            {/* --- Step 1: Empty State View --- */}
            <CreateYourCompany></CreateYourCompany>

            {/* --- Step 2: Modal Registration Form --- */}
            <dialog id="register_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
                <div className="modal-box bg-[#121212] border border-gray-800 text-white max-w-2xl rounded-2xl p-6 relative">

                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400 hover:text-white"
                        onClick={() => router.back()}
                    >
                        ✕
                    </button>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Register New Company</h3>
                        <p className="text-xs text-gray-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Company Name */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-gray-400 mb-1.5">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Acme Corp"
                                    className={`input input-bordered bg-[#1a1a1a] border-gray-800 focus:border-gray-600 focus:outline-none w-full text-sm rounded-xl h-11 ${errors.companyName ? 'border-red-500' : ''}`}
                                    {...register("companyName", { required: "Company name is required" })}
                                />
                            </div>

                            {/* Industry / Category */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-gray-400 mb-1.5">Industry / Category</label>
                                <select
                                    className="select select-bordered bg-[#1a1a1a] border-gray-800 focus:border-gray-600 focus:outline-none w-full text-sm rounded-xl h-11 min-h-[44px] flex flex-col items-center justify-center"
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
                                <label className="label-text text-xs text-gray-400 mb-1.5">Website URL</label>
                                <div className="flex rounded-xl overflow-hidden bg-[#1a1a1a] border border-gray-800 focus-within:border-gray-600 h-11">
                                    <span className="bg-[#222222] text-gray-500 px-3 flex items-center text-xs select-none border-r border-gray-800">https://</span>
                                    <input
                                        type="text"
                                        placeholder="www.company.com"
                                        className="bg-transparent px-3 w-full text-sm focus:outline-none text-white"
                                        {...register("websiteUrl")}
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-gray-400 mb-1.5">Location</label>
                                <div className="flex items-center rounded-xl bg-[#1a1a1a] border border-gray-800 focus-within:border-gray-600 h-11 px-3 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="City, Country"
                                        className="bg-transparent w-full text-sm focus:outline-none text-white"
                                        {...register("location", { required: "Location is required" })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Employee Count Range */}
                            <div className="form-control w-full">
                                <label className="label-text text-xs text-gray-400 mb-1.5">Employee Count Range</label>
                                <select
                                    className="select select-bordered bg-[#1a1a1a] border-gray-800 focus:border-gray-600 focus:outline-none w-full text-sm rounded-xl h-11 min-h-[44px] flex flex-col items-center justify-center"
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
                                <label className="label-text text-xs text-gray-400 mb-1.5">Company Logo</label>
                                <div className="flex gap-3 items-center">
                                    <label className="flex flex-col items-center justify-center w-12 h-12 bg-[#1a1a1a] border border-dashed border-gray-700 hover:border-gray-500 rounded-xl cursor-pointer overflow-hidden transition relative">
                                        {logoPreview ? (
                                            <img src={logoPreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
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
                                        <p className="text-xs font-medium text-gray-300">
                                            {isUploading ? "Uploading to ImgBB..." : watchLogo ? "Image uploaded successfully!" : "Upload Image"}
                                        </p>
                                        <p className="text-[10px] text-gray-500">PNG, JPG up to 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brief Description */}
                        <div className="form-control w-full">
                            <label className="label-text text-xs text-gray-400 mb-1.5">Brief Description</label>
                            <textarea
                                rows="3"
                                placeholder="Tell us about your company's mission and culture..."
                                className="textarea textarea-bordered bg-[#1a1a1a] border-gray-800 focus:border-gray-600 focus:outline-none w-full text-sm rounded-xl p-3 resize-none"
                                {...register("description")}
                            />
                        </div>

                        {/* Form Footer Buttons */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-900 mt-6">
                            <button
                                type="button"
                                className="btn btn-ghost text-gray-400 hover:bg-gray-900 normal-case rounded-xl font-medium"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isUploading || isSubmitting}
                                className="btn bg-white hover:bg-gray-200 text-black border-none normal-case px-6 font-medium rounded-xl disabled:bg-gray-700 disabled:text-gray-400"
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