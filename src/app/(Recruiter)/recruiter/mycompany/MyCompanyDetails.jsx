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
        <div className="pb-16 text-white space-y-10">

            {/* ================= Hero ================= */}
            <div className="relative h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Background */}
                <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                    alt=""
                    fill
                    priority
                    className="object-cover opacity-35 filter blur-[2px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-end p-8 md:p-10 z-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                        {/* Logo */}
                        <div className="relative shrink-0">
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-[#1b1b1f] border border-white/15 overflow-hidden flex items-center justify-center p-3 shadow-2xl">
                                <Image
                                    src={
                                        companyLogo ||
                                        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400"
                                    }
                                    alt={companyName}
                                    width={120}
                                    height={120}
                                    className="object-contain max-h-full max-w-full rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Company Intro */}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight truncate">
                                    {companyName}
                                </h1>
                                <div className="inline-flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                                    <CircleCheckFill width={12} height={12} className="shrink-0" />
                                    Verified
                                </div>
                            </div>

                            <p className="text-zinc-400 mt-3 max-w-2xl text-sm leading-relaxed">
                                Build amazing careers with {companyName}. Discover opportunities,
                                culture, innovation, and everything candidates need to know before
                                joining your organization.
                            </p>

                            <div className="flex flex-wrap gap-2.5 mt-5">
                                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-xl font-medium">
                                    <House width={14} className="text-[#5C53FE]" />
                                    {industry}
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-xl font-medium">
                                    <MapPin width={14} className="text-[#5C53FE]" />
                                    {location}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-row md:flex-col lg:flex-row gap-3 self-start md:self-center shrink-0">
                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 bg-[#5C53FE] hover:bg-[#4b42e2] text-white font-semibold px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-[#5C53FE]/20 hover:scale-[1.02] text-sm shrink-0"
                            >
                                <Globe width={16} />
                                Visit Website
                            </Link>

                            <button className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold px-5 py-3 rounded-2xl transition-all duration-300 text-sm">
                                <Pencil width={16} />
                                Edit Company
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Content ================= */}
            <div className="space-y-8">

                {/* Stats */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-[#18181b]/50 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300 group">
                        <Persons className="text-[#5C53FE] group-hover:scale-110 transition-transform duration-300" width={26} />
                        <p className="text-2xl font-black text-white mt-4">
                            {employeeCount}
                        </p>
                        <span className="text-xs text-zinc-500 mt-1 block uppercase font-bold tracking-wider">
                            Employees
                        </span>
                    </div>

                    <div className="bg-[#18181b]/50 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300 group">
                        <House className="text-[#5C53FE] group-hover:scale-110 transition-transform duration-300" width={26} />
                        <p className="text-xl font-bold text-white mt-4 truncate">
                            {industry}
                        </p>
                        <span className="text-xs text-zinc-500 mt-1 block uppercase font-bold tracking-wider">
                            Industry
                        </span>
                    </div>

                    <div className="bg-[#18181b]/50 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300 group">
                        <MapPin className="text-[#5C53FE] group-hover:scale-110 transition-transform duration-300" width={26} />
                        <p className="text-xl font-bold text-white mt-4 truncate">
                            {location}
                        </p>
                        <span className="text-xs text-zinc-500 mt-1 block uppercase font-bold tracking-wider">
                            Headquarters
                        </span>
                    </div>

                    <div className="bg-gradient-to-tr from-[#5C53FE]/15 to-[#5C53FE]/5 border border-[#5C53FE]/30 rounded-2xl p-6 shadow-xl hover:border-[#5C53FE]/50 transition-all duration-300 group flex flex-col justify-between">
                        <Globe className="text-[#5C53FE] group-hover:rotate-12 transition-transform duration-300" width={26} />
                        <div>
                            <p className="text-lg font-bold text-white mt-4">
                                Company Web
                            </p>
                            <Link
                                href={websiteUrl}
                                target="_blank"
                                className="inline-flex items-center gap-1.5 text-xs text-[#827bfd] hover:text-white underline mt-2 transition-colors"
                            >
                                Open URL
                                <ArrowUpRight width={14} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ================= Main Grid ================= */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <div className="bg-[#18181b]/60 border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-white/15 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-white">
                                About {companyName}
                            </h2>
                            <div className="h-px bg-white/5 my-4" />
                            <p className="leading-relaxed text-zinc-400 text-sm whitespace-pre-line">
                                {description}
                            </p>
                        </div>

                        {/* Gallery */}
                        <div className="bg-[#18181b]/60 border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-white/15 transition-all duration-300">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Workplace Gallery
                                </h2>
                                <button className="text-xs text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl transition-all font-semibold">
                                    View All
                                </button>
                            </div>
                            <div className="h-px bg-white/5 my-4" />

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="relative h-[300px] md:col-span-2 rounded-2xl overflow-hidden border border-white/10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop"
                                        alt=""
                                        fill
                                        className="object-cover hover:scale-105 duration-500 transition-all"
                                    />
                                </div>

                                <div className="grid gap-4">
                                    <div className="relative h-[142px] rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
                                            alt=""
                                            fill
                                            className="object-cover hover:scale-105 duration-500 transition-all"
                                        />
                                    </div>
                                    <div className="relative h-[142px] rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                                            alt=""
                                            fill
                                            className="object-cover hover:scale-105 duration-500 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Join */}
                        <div className="bg-[#18181b]/60 border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-white/15 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-white">
                                Why Candidates Love {companyName}
                            </h2>
                            <div className="h-px bg-white/5 my-4" />

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 rounded-2xl p-6 transition-all duration-300">
                                    <h3 className="font-semibold text-white text-base">
                                        Innovative Environment
                                    </h3>
                                    <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
                                        Work with talented people, modern technologies,
                                        and solve real-world engineering challenges.
                                    </p>
                                </div>

                                <div className="border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 rounded-2xl p-6 transition-all duration-300">
                                    <h3 className="font-semibold text-white text-base">
                                        Career Growth
                                    </h3>
                                    <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
                                        Continuous learning, mentorship programs,
                                        certifications and promotion opportunities.
                                    </p>
                                </div>

                                <div className="border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 rounded-2xl p-6 transition-all duration-300">
                                    <h3 className="font-semibold text-white text-base">
                                        Flexible Culture
                                    </h3>
                                    <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
                                        Hybrid work, flexible schedules and
                                        employee-first policies.
                                    </p>
                                </div>

                                <div className="border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 rounded-2xl p-6 transition-all duration-300">
                                    <h3 className="font-semibold text-white text-base">
                                        Competitive Benefits
                                    </h3>
                                    <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
                                        Attractive compensation, bonuses,
                                        healthcare and paid leave.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-6">
                        <div className="bg-[#18181b]/60 border border-white/10 rounded-3xl p-8 shadow-2xl sticky top-24 space-y-6">
                            <h3 className="text-xl font-bold text-white">
                                Company Information
                            </h3>
                            <div className="h-px bg-white/5 my-4" />

                            <div className="space-y-5">
                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                                        Company Name
                                    </p>
                                    <p className="font-semibold mt-1 text-sm text-zinc-200">
                                        {companyName}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                                        Industry
                                    </p>
                                    <p className="font-semibold mt-1 text-sm text-zinc-200">
                                        {industry}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                                        Headquarters
                                    </p>
                                    <p className="font-semibold mt-1 text-sm text-zinc-200">
                                        {location}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                                        Employees
                                    </p>
                                    <p className="font-semibold mt-1 text-sm text-zinc-200">
                                        {employeeCount}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                                        Website
                                    </p>
                                    <Link
                                        href={websiteUrl}
                                        target="_blank"
                                        className="text-[#827bfd] hover:text-white transition-colors break-all mt-1 block text-sm font-medium"
                                    >
                                        {websiteUrl}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ================= CTA ================= */}
                <div className="mt-12">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5C53FE] to-[#3a32cc] text-white shadow-2xl p-12 lg:p-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)]" />
                        <div className="max-w-3xl text-center relative z-10 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                                Keep Your Company Profile Updated
                            </h2>
                            <p className="opacity-90 leading-relaxed text-sm max-w-2xl mx-auto">
                                A complete company profile helps candidates trust your
                                organization and increases job application rates.
                                Update your branding, description, website and company
                                information regularly to attract top talents.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-2">
                                <button className="bg-white hover:bg-zinc-100 text-black font-semibold px-8 py-3 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] text-sm">
                                    Update Profile
                                </button>
                                <Link
                                    href={websiteUrl}
                                    target="_blank"
                                    className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 text-sm"
                                >
                                    Visit Website
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
