"use client"

import Image from "next/image";
import Link from "next/link";
import {
    Globe,
    MapPin,
    Persons,
    House,
    Pencil,
    ArrowShapeTurnUpRight,
    ArrowUpRight,
    CircleCheckFill,
} from "@gravity-ui/icons";

export default function MyCompanyDetails({ company }) {
    const {
        companyLogo,
        companyName,
        industry,
        websiteUrl,
        location,
        employeeCount,
        description,
    } = company;

    return (
        <div className="min-h-screen bg-base-200 pb-16">

            {/* ================= Hero ================= */}
            <div className="relative h-[340px] overflow-hidden">
                {/* Background */}
                <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-black/20 to-black/30" />

                <div className="max-w-7xl mx-auto h-full px-6 flex items-end pb-10 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 w-full">
                        {/* Logo */}
                        <div className="avatar">
                            <div className="w-32 h-32 rounded-3xl bg-base-100 shadow-2xl ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
                                <Image
                                    src={
                                        companyLogo ||
                                        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400"
                                    }
                                    alt={companyName}
                                    width={180}
                                    height={180}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Company Intro */}
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-4xl lg:text-5xl font-black text-white">
                                    {companyName}
                                </h1>
                                <div className="badge badge-success gap-2 px-4 py-4">
                                    <CircleCheckFill width={15} />
                                    Verified
                                </div>
                            </div>

                            <p className="text-white/80 mt-4 max-w-3xl">
                                Build amazing careers with {companyName}. Discover opportunities,
                                culture, innovation and everything candidates need to know before
                                joining your organization.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">
                                <div className="badge badge-outline badge-lg text-white border-white/30">
                                    <House width={15} />
                                    {industry}
                                </div>
                                <div className="badge badge-outline badge-lg text-white border-white/30">
                                    <MapPin width={15} />
                                    {location}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="btn btn-primary"
                            >
                                <Globe width={18} />
                                Visit Website
                            </Link>

                            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                                <Pencil width={18} />
                                Edit Company
                            </button>

                            <button className="btn btn-ghost text-white">
                                <ArrowShapeTurnUpRight width={18} />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Content ================= */}
            <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">

                {/* Stats */}
                <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Persons className="text-primary" width={28} />
                            <p className="text-3xl font-bold mt-2">
                                {employeeCount}
                            </p>
                            <span className="text-base-content/60">
                                Employees
                            </span>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <House className="text-primary" width={28} />
                            <p className="text-2xl font-bold mt-2">
                                {industry}
                            </p>
                            <span className="text-base-content/60">
                                Industry
                            </span>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <MapPin className="text-primary" width={28} />
                            <p className="text-2xl font-bold mt-2">
                                {location}
                            </p>
                            <span className="text-base-content/60">
                                Headquarters
                            </span>
                        </div>
                    </div>

                    <div className="card bg-primary text-primary-content shadow-xl">
                        <div className="card-body">
                            <Globe width={28} />
                            <p className="text-xl font-bold mt-2">
                                Official Website
                            </p>
                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="flex items-center gap-2 underline mt-2"
                            >
                                Open Website
                                <ArrowUpRight width={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ================= Main Grid ================= */}
                <div className="grid lg:grid-cols-3 gap-8 mt-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl">
                                    About {companyName}
                                </h2>
                                <div className="divider my-1" />
                                <p className="leading-8 text-base-content/70">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex justify-between items-center">
                                    <h2 className="card-title text-2xl">
                                        Workplace Gallery
                                    </h2>
                                    <button className="btn btn-sm btn-ghost">
                                        View All
                                    </button>
                                </div>
                                <div className="divider my-1" />

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative h-[420px] rounded-2xl overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop"
                                            alt=""
                                            fill
                                            className="object-cover hover:scale-105 duration-500"
                                        />
                                    </div>

                                    <div className="grid gap-4">
                                        <div className="relative h-[200px] rounded-2xl overflow-hidden">
                                            <Image
                                                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
                                                alt=""
                                                fill
                                                className="object-cover hover:scale-105 duration-500"
                                            />
                                        </div>
                                        <div className="relative h-[200px] rounded-2xl overflow-hidden">
                                            <Image
                                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                                                alt=""
                                                fill
                                                className="object-cover hover:scale-105 duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Join */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl">
                                    Why Candidates Love {companyName}
                                </h2>
                                <div className="divider my-1" />

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="border border-base-300 rounded-xl p-5">
                                        <h3 className="font-semibold text-lg">
                                            Innovative Environment
                                        </h3>
                                        <p className="mt-2 text-base-content/70 leading-7">
                                            Work with talented people, modern technologies,
                                            and solve real-world engineering challenges.
                                        </p>
                                    </div>

                                    <div className="border border-base-300 rounded-xl p-5">
                                        <h3 className="font-semibold text-lg">
                                            Career Growth
                                        </h3>
                                        <p className="mt-2 text-base-content/70 leading-7">
                                            Continuous learning, mentorship programs,
                                            certifications and promotion opportunities.
                                        </p>
                                    </div>

                                    <div className="border border-base-300 rounded-xl p-5">
                                        <h3 className="font-semibold text-lg">
                                            Flexible Culture
                                        </h3>
                                        <p className="mt-2 text-base-content/70 leading-7">
                                            Hybrid work, flexible schedules and
                                            employee-first policies.
                                        </p>
                                    </div>

                                    <div className="border border-base-300 rounded-xl p-5">
                                        <h3 className="font-semibold text-lg">
                                            Competitive Benefits
                                        </h3>
                                        <p className="mt-2 text-base-content/70 leading-7">
                                            Attractive compensation, bonuses,
                                            healthcare and paid leave.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-6">
                        <div className="card bg-base-100 shadow-xl sticky top-24">
                            <div className="card-body">
                                <h2 className="card-title">
                                    Company Information
                                </h2>
                                <div className="divider my-1" />

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs uppercase text-base-content/50">
                                            Company Name
                                        </p>
                                        <p className="font-semibold mt-1">
                                            {companyName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-base-content/50">
                                            Industry
                                        </p>
                                        <p className="font-semibold mt-1">
                                            {industry}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-base-content/50">
                                            Headquarters
                                        </p>
                                        <p className="font-semibold mt-1">
                                            {location}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-base-content/50">
                                            Employees
                                        </p>
                                        <p className="font-semibold mt-1">
                                            {employeeCount}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase text-base-content/50">
                                            Website
                                        </p>
                                        <Link
                                            href={websiteUrl}
                                            target="_blank"
                                            className="link link-primary break-all mt-1 block"
                                        >
                                            {websiteUrl}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="btn btn-primary w-full">
                                <Pencil width={18} />
                                Edit Company Profile
                            </button>

                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="btn btn-outline w-full"
                            >
                                <Globe width={18} />
                                Visit Website
                            </Link>

                            <button className="btn btn-ghost w-full">
                                <ArrowShapeTurnUpRight width={18} />
                                Share Company
                            </button>
                        </div>
                    </div>

                </div>

                {/* ================= CTA ================= */}
                <div className="mt-12">
                    <div className="hero rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent text-primary-content shadow-2xl">
                        <div className="hero-content text-center py-16">
                            <div className="max-w-3xl">
                                <h2 className="text-4xl font-black">
                                    Keep Your Company Profile Updated
                                </h2>
                                <p className="py-6 opacity-90 leading-8">
                                    A complete company profile helps candidates trust your
                                    organization and increases job application rates.
                                    Update your branding, description, website and company
                                    information regularly to attract top talents.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <button className="btn btn-neutral">
                                        <Pencil width={18} />
                                        Update Profile
                                    </button>
                                    <Link
                                        href={websiteUrl}
                                        target="_blank"
                                        className="btn btn-outline border-white text-white hover:bg-white hover:text-primary"
                                    >
                                        <ArrowUpRight width={18} />
                                        Visit Website
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

