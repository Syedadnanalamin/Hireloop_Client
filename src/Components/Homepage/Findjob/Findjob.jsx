'use client';
import { Magnifier, LocationArrow, Briefcase } from "@gravity-ui/icons";
import React from 'react';

const Findjob = () => {
    return (

        <section className="relative overflow-hidden bg-base-100 py-10">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Badge */}

                <div className="mb-10 flex justify-center">
                    <div className="badge badge-lg gap-2 rounded-full border border-base-300 bg-base-200 px-6 py-5 text-sm shadow-lg">
                        <Briefcase width={18} />
                        <span className="font-semibold">50,000+</span>
                        <span className="opacity-70">
                            NEW JOBS THIS MONTH
                        </span>
                    </div>
                </div>

                {/* Heading */}

                <div className="mx-auto max-w-4xl text-center">

                    <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
                        Find Your Dream
                        <span className="text-primary"> Job </span>
                        Today
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-base-content/70">
                        HireLoop connects top talent with world-class companies.
                        Browse thousands of curated opportunities and land your
                        next role faster.
                    </p>
                </div>

                {/* Search Box */}

                <div className="mx-auto mt-14 max-w-5xl">

                    <div className="flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-2xl lg:flex-row">

                        {/* Job */}

                        <div className="flex flex-1 items-center gap-3 px-6 py-5">

                            <Magnifier
                                width={22}
                                className="opacity-60"
                            />

                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="w-full bg-transparent outline-none"
                            />
                        </div>

                        <div className="hidden w-px bg-base-300 lg:block" />

                        {/* Location */}

                        <div className="flex flex-1 items-center gap-3 px-6 py-5">

                            <LocationArrow
                                width={22}
                                className="opacity-60"
                            />

                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full bg-transparent outline-none"
                            />
                        </div>

                        {/* Button */}

                        <button className="btn btn-primary m-3 rounded-xl px-8">
                            <Magnifier width={22} />
                        </button>
                    </div>
                </div>

                {/* Trending */}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                    <span className="text-sm text-base-content/60">
                        Trending Position
                    </span>

                    <button className="btn btn-sm rounded-full">
                        Product Designer
                    </button>

                    <button className="btn btn-sm rounded-full">
                        AI Engineering
                    </button>

                    <button className="btn btn-sm rounded-full">
                        DevOps Engineer
                    </button>

                </div>
            </div>
        </section>
    );
}




export default Findjob;