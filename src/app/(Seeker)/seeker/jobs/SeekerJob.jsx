"use client";

import { useState } from "react";
import JobsCard from "@/Components/Shared/jobsCard/JobsCard";
import { FiSearch, FiSliders, FiBriefcase, FiDatabase } from "react-icons/fi";

export default function SeekerJob({ jobs }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");



    // Filter logic
    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.requirements.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.jobCategory.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" || job.jobCategory === selectedCategory;

        const matchesType =
            selectedType === "All" || job.jobType === selectedType;

        return matchesSearch && matchesCategory && matchesType;
    });

    const categories = ["All", "Technology", "Design", "Marketing", "Business"];
    const jobTypes = ["All", "Remote", "Hybrid", "On-site"];

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 md:py-12">
            {/* Header Banner - Glassmorphic Hero */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#18181b]/60 p-8 md:p-12 shadow-2xl backdrop-blur-xl mb-10">
                {/* Glow Effects */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#222226] text-blue-400 border border-white/5 mb-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
                            Live Opportunities
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Find Latest Jobs Here
                        </h1>
                        <p className="mt-3 text-sm md:text-base text-gray-400 max-w-xl">
                            Discover high-quality, verified opportunities that perfectly match your skills and professional experience.
                        </p>
                    </div>

                    {/* Compact stats */}
                    <div className="flex gap-4 self-start md:self-auto">
                        <div className="bg-[#222226] border border-white/5 px-4 py-3 rounded-2xl min-w-[100px] text-center">
                            <span className="block text-2xl font-extrabold text-white">{jobs.length}</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Available</span>
                        </div>
                        <div className="bg-[#222226] border border-white/5 px-4 py-3 rounded-2xl min-w-[100px] text-center">
                            <span className="block text-2xl font-extrabold text-emerald-400">{filteredJobs.length}</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Filtered</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter and Search Controls */}
            <div className="bg-[#18181b]/40 border border-white/5 rounded-2xl p-6 mb-8 shadow-lg backdrop-blur-md">
                <div className="flex flex-col gap-6">
                    {/* Search row */}
                    <div className="relative flex items-center w-full">
                        <FiSearch className="absolute left-4 text-gray-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Search by job title, requirements, or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-[#111113] border border-white/5 focus:border-indigo-500/50 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200"
                        />
                    </div>

                    {/* Filter categories/types row */}
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        {/* Category filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wide mr-2 flex items-center gap-1">
                                <FiSliders /> Category:
                            </span>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${selectedCategory === category
                                        ? "bg-[#5C53FE] text-white shadow-md shadow-indigo-500/20"
                                        : "bg-[#222226] text-gray-400 hover:text-white border border-white/5 hover:bg-[#2c2c32]"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Job type filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wide mr-2 flex items-center gap-1">
                                <FiBriefcase /> Job Type:
                            </span>
                            {jobTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${selectedType === type
                                        ? "bg-[#5C53FE] text-white shadow-md shadow-indigo-500/20"
                                        : "bg-[#222226] text-gray-400 hover:text-white border border-white/5 hover:bg-[#2c2c32]"
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {filteredJobs.map((job) => (
                        <JobsCard key={job._id} job={job} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-[#18181b]/20 border border-dashed border-white/5 rounded-2xl">
                    <FiDatabase className="mx-auto text-4xl text-gray-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-400">No jobs found</h3>
                    <p className="text-sm text-gray-500 mt-1">Try modifying your search queries or active filters.</p>
                </div>
            )}
        </section>
    );
}