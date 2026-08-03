"use client";

import React, { useState } from "react";

import {
    Form,
    TextField,
    Label,
    Input,
    FieldError,
    Select,
    ListBox,
    TextArea,
    Button
} from "@heroui/react";
import Link from "next/link";
import { postJob } from "@/lib/actions/recruiter/postjob";
import { authClient } from "@/lib/auth-client";

export default function JobPostForm() {
    const [isRemote, setIsRemote] = useState(false);
    const { data: session } = authClient.useSession();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        // Core logic requirement fulfillment: 
        // If remote button is active, ensure the output object has location: "remote"
        if (isRemote) {
            data["location"] = "remote";
        }

        const createdAt = new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        
        const recruiterId = session?.user?.id;
        const updatedData = {
            ...data,
            status: "active",
            createdAt,
            recruiterId
        }

        alert(`job placed successfully`);
        console.log(updatedData)

        const res = await postJob(updatedData);
    };

    return (

        <div>

            <h1 className="mt-2"><Link href={"/recruiter/managejobs"}><Button className={"bg-gray-300 text-black"}>Go Previous Page</Button></Link></h1>
            <div className="w-full max-w-3xl mx-auto p-8 bg-[#18181b]/60 border border-white/10 backdrop-blur-xl rounded-3xl text-white shadow-2xl">

                {/* Form Header */}
                <div className="mb-8 border-b border-white/5 pb-5">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Create a Job Post</h2>
                    <p className="text-xs text-zinc-400 mt-1">
                        Provide the details and requirements to find the best candidate on HireLoop.
                    </p>
                </div>

                <Form
                    className="flex flex-col gap-6"
                    onSubmit={onSubmit}
                >
                    {/* ==================== SECTION 1: JOB INFO ==================== */}
                    <div className="space-y-5">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            1. Job Info
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Job Title */}
                            <TextField isRequired name="jobTitle" type="text" className="w-full flex flex-col">
                                <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">Job Title</Label>
                                <Input placeholder="e.g. Senior Software Engineer" className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-4 h-11 text-white placeholder-zinc-500 transition-all" />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Job Category */}
                            <div className="w-full flex flex-col">
                                <label className="text-zinc-400 font-semibold text-xs mb-1.5 block">
                                    Job Category <span className="text-red-500">*</span>
                                </label>
                                <div className="relative w-full">
                                    <select
                                        name="jobCategory"
                                        required
                                        className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl pl-4 pr-10 h-11 text-white placeholder-zinc-500 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled selected>Select a category</option>
                                        <option value="technology">Technology</option>
                                        <option value="design">Design / Creative</option>
                                        <option value="marketing">Marketing / Sales</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Job Type */}
                            <div className="w-full flex flex-col">
                                <label className="text-zinc-400 font-semibold text-xs mb-1.5 block">
                                    Job Type <span className="text-red-500">*</span>
                                </label>
                                <div className="relative w-full">
                                    <select
                                        name="jobType"
                                        required
                                        className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl pl-4 pr-10 h-11 text-white placeholder-zinc-500 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled selected>Select job type</option>
                                        <option value="full-time">Full-time</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="remote">Remote</option>
                                        <option value="contract">Contract</option>
                                        <option value="internship">Internship</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Application Deadline */}
                            <TextField isRequired name="deadline" type="date" className="w-full flex flex-col">
                                <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">Application Deadline</Label>
                                <Input className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-4 h-11 text-white placeholder-zinc-500 transition-all" />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Salary Range & Currency Fields */}
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                                <TextField isRequired name="minSalary" type="number" className="w-full flex flex-col">
                                    <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">Min Salary</Label>
                                    <Input placeholder="0" className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-4 h-11 text-white placeholder-zinc-500 transition-all" />
                                    <FieldError className="text-danger text-xs mt-1" />
                                </TextField>

                                <TextField isRequired name="maxSalary" type="number" className="w-full flex flex-col">
                                    <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">Max Salary</Label>
                                    <Input placeholder="0" className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-4 h-11 text-white placeholder-zinc-500 transition-all" />
                                    <FieldError className="text-danger text-xs mt-1" />
                                </TextField>

                                <div className="w-full flex flex-col">
                                    <label className="text-zinc-400 font-semibold text-xs mb-1.5 block">
                                        Currency <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative w-full">
                                        <select
                                            name="currency"
                                            required
                                            defaultValue="USD"
                                            className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl pl-4 pr-10 h-11 text-white placeholder-zinc-500 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                            <option value="GBP">GBP (£)</option>
                                            <option value="BDT">BDT (৳)</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location Entry Section with integrated Remote Mode Action Button */}
                            <div className="md:col-span-2 flex flex-col gap-1">
                                <div className="flex items-center justify-between mb-1">
                                    <label className="text-zinc-400 font-semibold text-xs block">Location</label>
                                    <Button
                                        type="button"
                                        size="sm"
                                        onPress={() => setIsRemote(!isRemote)}
                                        className={`text-xs font-semibold h-8 px-4 rounded-xl transition-all duration-300 ${isRemote
                                            ? "bg-white text-black hover:bg-zinc-200"
                                            : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                                            }`}
                                    >
                                        {isRemote ? "✓ Remote Active" : "Set as Remote Job"}
                                    </Button>
                                </div>

                                <TextField
                                    isRequired={!isRemote}
                                    isDisabled={isRemote}
                                    name="location"
                                    type="text"
                                    className="w-full flex flex-col"
                                >
                                    <Input
                                        placeholder={isRemote ? "Remote Position (Field Disabled)" : "e.g. City, Country"}
                                        value={isRemote ? "Remote" : undefined}
                                        className={`transition-all duration-200 bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl px-4 h-11 text-white placeholder-zinc-500 ${isRemote ? "opacity-50 pointer-events-none" : ""}`}
                                    />
                                    <FieldError className="text-danger text-xs mt-1" />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* ==================== SECTION 2: JOB DESCRIPTION ==================== */}
                    <div className="space-y-5">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            2. Job Description
                        </h3>

                        <div className="flex flex-col gap-4">
                            {/* Responsibilities */}
                            <TextField isRequired name="responsibilities" className="w-full flex flex-col">
                                <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">Responsibilities</Label>
                                <TextArea
                                    placeholder="List core responsibilities and day-to-day tasks..."
                                    rows={4}
                                    className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl p-4 text-white placeholder-zinc-500 resize-none transition-all"
                                />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Requirements */}
                            <TextField isRequired name="requirements" className="w-full flex flex-col">
                                <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">Requirements</Label>
                                <TextArea
                                    placeholder="Specify skills, experience levels, educational prerequisites..."
                                    rows={4}
                                    className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl p-4 text-white placeholder-zinc-500 resize-none transition-all"
                                />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Benefits (Optional) */}
                            <TextField name="benefits" className="w-full flex flex-col">
                                <Label className="text-zinc-400 font-semibold text-xs mb-1.5 block">
                                    Benefits <span className="text-zinc-500 font-normal">(Optional)</span>
                                </Label>
                                <TextArea
                                    placeholder="What perks/benefits come with this position? (e.g., Health insurance, Stock options, PTO)"
                                    rows={3}
                                    className="bg-[#242429] border border-white/10 focus:border-[#5C53FE]/70 focus:outline-none w-full text-sm rounded-xl p-4 text-white placeholder-zinc-500 resize-none transition-all"
                                />
                            </TextField>
                        </div>
                    </div>

                    {/* ==================== FORM ACTIONS ==================== */}
                    <div className="flex justify-end gap-3 mt-4 border-t border-white/5 pt-5">
                        <Button type="reset" variant="flat" className="bg-transparent hover:bg-white/5 border border-white/10 text-zinc-300 hover:text-white px-6 py-2.5 rounded-xl font-medium transition-all" onPress={() => setIsRemote(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" className="bg-[#5C53FE] hover:bg-[#4b42e2] text-white font-semibold px-8 py-2.5 rounded-xl transition-all duration-300 shadow-xl shadow-[#5C53FE]/20">
                            Publish Job Post
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
}