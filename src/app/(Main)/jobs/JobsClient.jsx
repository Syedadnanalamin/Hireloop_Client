"use client";

import { useState } from "react";
import JobsCard from "@/Components/Shared/jobsCard/JobsCard";
import { FiSearch, FiSliders, FiBriefcase, FiDatabase } from "react-icons/fi";

export default function JobsClient({ initialJobs }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");

    // Filter logic
    const filteredJobs = initialJobs.filter((job) => {
        const matchesSearch =
            job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.requirements?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.jobCategory?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" || job.jobCategory === selectedCategory;

        const matchesType =
            selectedType === "All" || job.jobType === selectedType;

        return matchesSearch && matchesCategory && matchesType;
    });

    const categories = ["All", "Technology", "Design", "Marketing", "Business"];
    const jobTypes = ["All", "Remote", "Hybrid", "On-site"];

    return (
        <section className="relative overflow-hidden bg-[#1F252D] py-24 min-h-screen">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-5">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-[5px] text-violet-400 text-sm mb-4">
                        Discover Roles
                    </p>
                    <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl text-white">
                        All Available <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Jobs</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-gray-400 text-sm md:text-base">
                        Explore opportunities that match your interests. Browse and apply to curated positions.
                    </p>
                </div>

                {/* Filter and Search Controls */}
                <div className="bg-[#18181b]/60 border border-white/5 rounded-2xl p-6 mb-12 shadow-2xl backdrop-blur-xl">
                    <div className="flex flex-col gap-6">
                        {/* Search Input */}
                        <div className="relative flex items-center w-full">
                            <FiSearch className="absolute left-4 text-gray-400 text-xl" />
                            <input
                                type="text"
                                placeholder="Search by job title, category, or requirements..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-[#111113]/80 border border-white/5 focus:border-violet-500/50 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Filters Row */}
                        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between border-t border-white/5 pt-6">
                            {/* Category Filters */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mr-2 flex items-center gap-1.5">
                                    <FiSliders className="text-violet-400" /> Category:
                                </span>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                            selectedCategory === category
                                                ? "bg-[#5C53FE] text-white shadow-lg shadow-indigo-500/30"
                                                : "bg-[#222226]/80 text-gray-300 hover:text-white border border-white/5 hover:bg-[#2c2c32]"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Job Type Filters */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mr-2 flex items-center gap-1.5">
                                    <FiBriefcase className="text-violet-400" /> Job Type:
                                </span>
                                {jobTypes.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedType(type)}
                                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                            selectedType === type
                                                ? "bg-[#5C53FE] text-white shadow-lg shadow-indigo-500/30"
                                                : "bg-[#222226]/80 text-gray-300 hover:text-white border border-white/5 hover:bg-[#2c2c32]"
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Jobs Grid */}
                {filteredJobs.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredJobs.map((job) => (
                            <JobsCard key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#18181b]/20 border border-dashed border-white/5 rounded-2xl">
                        <FiDatabase className="mx-auto text-4xl text-gray-500 mb-3" />
                        <h3 className="text-lg font-bold text-gray-400">No jobs found</h3>
                        <p className="text-sm text-gray-500 mt-1">Try modifying your search queries or active filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
