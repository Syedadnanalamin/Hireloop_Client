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

export default function JobPostForm() {
    const [isRemote, setIsRemote] = useState(false);

    const onSubmit = (e) => {
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
        const updatedData = {

            ...data,
            status: "active",
            createdAt
        }

        alert(`job placed successfully`);
        console.log(updatedData)

        postJob(updatedData);
    };

    return (

        <div>

            <h1 className="mt-2"><Link href={"/recruiter/managejobs"}><Button className={"bg-gray-300 text-black"}>Go Previous Page</Button></Link></h1>
            <div className="w-full max-w-3xl mx-auto p-6 bg-[#18181b] rounded-xl border border-[#27272a] text-white shadow-xl">


                {/* Form Header */}
                <div className="mb-6 border-b border-[#27272a] pb-4">
                    <h2 className="text-xl font-semibold tracking-tight">Create a Job Post</h2>
                    <p className="text-sm text-zinc-400 mt-1">
                        Provide the details and requirements to find the best candidate on HireLoop.
                    </p>
                </div>

                <Form
                    className="flex flex-col gap-6"
                    onSubmit={onSubmit}
                >
                    {/* ==================== SECTION 1: JOB INFO ==================== */}
                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-4">
                            1. Job Info
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Job Title */}
                            <TextField isRequired name="jobTitle" type="text" className="w-full">
                                <Label className="text-zinc-300 text-sm font-medium mb-1">Job Title</Label>
                                <Input placeholder="e.g. Senior Software Engineer" className="bg-[#27272a] border-zinc-700" />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Job Category */}
                            <div className="w-full">
                                <Label className="mb-2 block text-sm font-medium text-zinc-300">
                                    Job Category <span className="text-red-500">*</span>
                                </Label>

                                <Select name="jobCategory">
                                    <Select.Trigger className="h-11 rounded-lg border border-zinc-700 bg-[#27272a] px-3 text-white">
                                        <Select.Value placeholder="Select a category" />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover className="border border-zinc-700 bg-[#18181b]">
                                        <ListBox>
                                            <ListBox.Item id="technology" textValue="Technology">
                                                Technology
                                            </ListBox.Item>

                                            <ListBox.Item id="design" textValue="Design / Creative">
                                                Design / Creative
                                            </ListBox.Item>

                                            <ListBox.Item id="marketing" textValue="Marketing / Sales">
                                                Marketing / Sales
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Job Type */}
                            <Select isRequired name="jobType" placeholder="Select job type" className="w-full">
                                <Label className="text-zinc-300 text-sm font-medium mb-1">Job Type</Label>
                                <Select.Trigger className="bg-[#27272a] border border-zinc-700 text-white rounded-md h-[40px] px-3">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="bg-[#18181b] border border-[#27272a]">
                                    <ListBox className="text-white">
                                        <ListBox.Item id="full-time" textValue="Full-time">Full-time</ListBox.Item>
                                        <ListBox.Item id="part-time" textValue="Part-time">Part-time</ListBox.Item>
                                        <ListBox.Item id="remote" textValue="Remote">Remote</ListBox.Item>
                                        <ListBox.Item id="contract" textValue="Contract">Contract</ListBox.Item>
                                        <ListBox.Item id="internship" textValue="Internship">Internship</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            {/* Application Deadline */}
                            <TextField isRequired name="deadline" type="date" className="w-full">
                                <Label className="text-zinc-300 text-sm font-medium mb-1">Application Deadline</Label>
                                <Input className="bg-[#27272a] border-zinc-700 text-zinc-300" />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Salary Range & Currency Fields */}
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                                <TextField isRequired name="minSalary" type="number" className="w-full">
                                    <Label className="text-zinc-300 text-sm font-medium mb-1">Min Salary</Label>
                                    <Input placeholder="0" className="bg-[#27272a]" />
                                    <FieldError className="text-danger text-xs mt-1" />
                                </TextField>

                                <TextField isRequired name="maxSalary" type="number" className="w-full">
                                    <Label className="text-zinc-300 text-sm font-medium mb-1">Max Salary</Label>
                                    <Input placeholder="0" className="bg-[#27272a]" />
                                    <FieldError className="text-danger text-xs mt-1" />
                                </TextField>

                                <Select isRequired name="currency" defaultValue="USD" className="w-full">
                                    <Label className="text-zinc-300 text-sm font-medium mb-1">Currency</Label>
                                    <Select.Trigger className="bg-[#27272a] border border-zinc-700 text-white rounded-md h-[40px] px-3">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#18181b] border border-[#27272a]">
                                        <ListBox className="text-white">
                                            <ListBox.Item id="USD" textValue="USD ($)">USD ($)</ListBox.Item>
                                            <ListBox.Item id="EUR" textValue="EUR (€)">EUR (€)</ListBox.Item>
                                            <ListBox.Item id="GBP" textValue="GBP (£)">GBP (£)</ListBox.Item>
                                            <ListBox.Item id="BDT" textValue="BDT (৳)">BDT (৳)</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Location Entry Section with integrated Remote Mode Action Button */}
                            <div className="md:col-span-2 flex flex-col gap-1">
                                <div className="flex items-center justify-between mb-1">
                                    <Label className="text-zinc-300 text-sm font-medium">Location</Label>
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant={isRemote ? "solid" : "bordered"}
                                        onPress={() => setIsRemote(!isRemote)}
                                        className={`text-xs h-7 px-3 rounded ${isRemote
                                            ? "bg-white text-black font-semibold"
                                            : "border-zinc-700 text-zinc-400 hover:text-white"
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
                                    className="w-full"
                                >
                                    <Input
                                        placeholder={isRemote ? "Remote Position (Field Disabled)" : "e.g. City, Country"}
                                        value={isRemote ? "Remote" : undefined}
                                        className={`transition-all duration-200 ${isRemote ? "bg-[#202024] opacity-60 text-zinc-500 pointer-events-none" : "bg-[#27272a] text-white"
                                            }`}
                                    />
                                    <FieldError className="text-danger text-xs mt-1" />
                                </TextField>
                            </div>
                        </div>
                    </div>

                    <hr className="border-[#27272a]" />

                    {/* ==================== SECTION 2: JOB DESCRIPTION ==================== */}
                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400 mb-4">
                            2. Job Description
                        </h3>

                        <div className="flex flex-col gap-4">
                            {/* Responsibilities */}
                            <TextField isRequired name="responsibilities" className="w-full">
                                <Label className="text-zinc-300 text-sm font-medium mb-1">Responsibilities</Label>
                                <TextArea
                                    placeholder="List core responsibilities and day-to-day tasks..."
                                    rows={4}
                                    className="bg-[#27272a] text-white w-full"
                                />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Requirements */}
                            <TextField isRequired name="requirements" className="w-full">
                                <Label className="text-zinc-300 text-sm font-medium mb-1">Requirements</Label>
                                <TextArea
                                    placeholder="Specify skills, experience levels, educational prerequisites..."
                                    rows={4}
                                    className="bg-[#27272a] text-white w-full"
                                />
                                <FieldError className="text-danger text-xs mt-1" />
                            </TextField>

                            {/* Benefits (Optional) */}
                            <TextField name="benefits" className="w-full">
                                <Label className="text-zinc-300 text-sm font-medium mb-1">
                                    Benefits <span className="text-zinc-500 font-normal">(Optional)</span>
                                </Label>
                                <TextArea
                                    placeholder="What perks/benefits come with this position? (e.g., Health insurance, Stock options, PTO)"
                                    rows={3}
                                    className="bg-[#27272a] text-white w-full"
                                />
                            </TextField>
                        </div>
                    </div>

                    {/* ==================== FORM ACTIONS ==================== */}
                    <div className="flex justify-end gap-3 mt-4 border-t border-[#27272a] pt-4">
                        <Button type="reset" variant="flat" className="text-zinc-300 hover:bg-zinc-800" onPress={() => setIsRemote(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" className="font-semibold px-6 bg-white text-black hover:bg-zinc-200">
                            Publish Job Post
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
}