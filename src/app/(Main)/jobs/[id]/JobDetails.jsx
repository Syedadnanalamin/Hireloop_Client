"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function JobDetails({ jobData }) {


    const params = useParams();


    return (
        <div className="min-h-screen bg-[#0B0F19] text-[#94A3B8] pb-24 antialiased selection:bg-blue-500/30">
            {/* Top Glow Decorative Header */}
            <div className="relative overflow-hidden bg-gradient-to-b from-[#111726] via-[#0D1220] to-[#0B0F19] pt-20 pb-16">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[350px] w-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
                    {/* Tiny Category Tag matching "Trusted Worldwide" */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-blue-400 mb-6 uppercase tracking-wider">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        {jobData.jobCategory}
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                {jobData.jobTitle}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                                    <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    Corporate Office
                                </span>
                                <span className="text-slate-700">•</span>
                                <span className="capitalize">{jobData.jobType} Role</span>
                                <span className="text-slate-700">•</span>
                                <span>Posted on {jobData.createdAt}</span>
                            </div>
                        </div>

                        {/* Top action layout buttons */}
                        <div className="flex items-center gap-3 self-end md:self-start">

                            <Link href={`/jobs/${params.id}/apply`}>
                                <button className="btn border-none bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-95 px-8 font-bold tracking-wide rounded-xl shadow-lg shadow-blue-500/20">
                                    Apply Job
                                </button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Application Matrix Grid */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* LEFT CONTAINER: Details & Scope */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Responsibilities */}
                        <div className="rounded-2xl border border-slate-900 bg-[#121826] p-6 sm:p-8 shadow-2xl">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                                <span className="h-5 w-1 bg-blue-500 rounded-full" />
                                Core Responsibilities
                            </h2>
                            <p className="text-slate-300 text-[15px] leading-8 whitespace-pre-line">
                                {jobData.responsibilities}
                            </p>
                        </div>

                        {/* Requirements */}
                        <div className="rounded-2xl border border-slate-900 bg-[#121826] p-6 sm:p-8 shadow-2xl">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                                <span className="h-5 w-1 bg-purple-500 rounded-full" />
                                Requirements & Qualifications
                            </h2>
                            <p className="text-slate-300 text-[15px] leading-8 whitespace-pre-line">
                                {jobData.requirements}
                            </p>
                        </div>

                        {/* Benefits */}
                        {jobData.benefits && (
                            <div className="rounded-2xl border border-slate-900 bg-[#121826] p-6 sm:p-8 shadow-2xl">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                                    <span className="h-5 w-1 bg-emerald-500 rounded-full" />
                                    Compensation & Perks
                                </h2>
                                <p className="text-slate-300 text-[15px] leading-8 whitespace-pre-line">
                                    {jobData.benefits}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT CONTAINER: Sidebar Dashboard Widgets */}
                    <div className="space-y-5 lg:sticky lg:top-6">

                        {/* Summary Block */}
                        <div className="rounded-2xl border border-slate-900 bg-[#121826] p-6 shadow-2xl space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                Job Metrics Overview
                            </h3>

                            {/* Dashboard Stats Panel Layout */}
                            <div className="grid grid-cols-1 gap-4">

                                {/* Salary Component Item */}
                                <div className="rounded-xl bg-[#0B0F19] border border-slate-900/60 p-4 relative overflow-hidden group">
                                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Offered Compensation</span>
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-2xl font-black text-white tracking-tight">
                                            {Number(jobData.minSalary).toLocaleString()} - {Number(jobData.maxSalary).toLocaleString()}
                                        </span>
                                        <span className="text-xs font-bold text-blue-400 uppercase">{jobData.currency}</span>
                                    </div>
                                    <span className="text-[11px] text-slate-500 block mt-1">Estimated Base Salary / Gross monthly</span>
                                </div>

                                {/* Location Component Item */}
                                <div className="rounded-xl bg-[#0B0F19] border border-slate-900/60 p-4">
                                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Primary HQ Location</span>
                                    <span className="text-lg font-bold text-white block">{jobData.location}</span>
                                </div>

                                {/* Schedule Component Item */}
                                <div className="rounded-xl bg-[#0B0F19] border border-slate-900/60 p-4">
                                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Workplace Type</span>
                                    <span className="text-lg font-bold text-indigo-400 capitalize block">{jobData.jobType} Arrangement</span>
                                </div>

                                {/* Application Deadline Item */}
                                <div className="rounded-xl bg-[#0B0F19] border border-slate-900/60 p-4 border-l-2 border-l-rose-500/50">
                                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Application Closing</span>
                                    <span className="text-lg font-bold text-rose-400 block">{jobData.deadline}</span>
                                    <span className="text-[11px] text-rose-500/80 font-medium block mt-0.5">Applications close automatically</span>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}