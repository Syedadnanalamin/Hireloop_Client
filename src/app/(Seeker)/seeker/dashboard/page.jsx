    "use client";

    import { Button } from "@heroui/react";
    import Image from "next/image";
    import {
        FiBookmark,
        FiFileText,
        FiBriefcase,
        FiGift,
        FiUser,
        FiClock,
        FiMessageSquare,
        FiCheckCircle,
        FiXCircle,
        FiAlertCircle
    } from "react-icons/fi";

    export default function SeekerDashboard() {
        // Stats overview
        const stats = [
            {
                title: "Saved Jobs",
                value: 12,
                icon: FiBookmark,
                color: "text-indigo-400",
                bgColor: "bg-indigo-500/10",
                borderColor: "hover:border-indigo-500/20"
            },
            {
                title: "Applications",
                value: 24,
                icon: FiFileText,
                color: "text-blue-400",
                bgColor: "bg-blue-500/10",
                borderColor: "hover:border-blue-500/20"
            },
            {
                title: "Interviews",
                value: 3,
                icon: FiBriefcase,
                color: "text-amber-400",
                bgColor: "bg-amber-500/10",
                borderColor: "hover:border-amber-500/20"
            },
            {
                title: "Offers",
                value: 1,
                icon: FiGift,
                color: "text-emerald-400",
                bgColor: "bg-emerald-500/10",
                borderColor: "hover:border-emerald-500/20"
            },
        ];

        // Status distributions
        const applicationStatus = [
            { label: "Applied", value: 10, max: 24, percent: "42%", color: "bg-blue-500" },
            { label: "Under Review", value: 6, max: 24, percent: "25%", color: "bg-amber-500" },
            { label: "Shortlisted", value: 5, max: 24, percent: "21%", color: "bg-purple-500" },
            { label: "Rejected", value: 2, max: 24, percent: "8%", color: "bg-rose-500" },
            { label: "Hired", value: 1, max: 24, percent: "4%", color: "bg-emerald-500" },
        ];

        // Activity Feed
        const recentActivity = [
            {
                icon: FiAlertCircle,
                iconColor: "text-amber-400 bg-amber-500/10",
                text: "Application for Senior Product Designer at TechFlow updated to Under Review.",
                time: "2 hours ago",
            },
            {
                icon: FiBriefcase,
                iconColor: "text-blue-400 bg-blue-500/10",
                text: "New Job Alert: Lead Frontend Engineer at FinGrid matches your profile.",
                time: "5 hours ago",
            },
            {
                icon: FiMessageSquare,
                iconColor: "text-indigo-400 bg-indigo-500/10",
                text: "You have a new message from Sarah Jenkins (Hiring Manager at CloudSpot).",
                time: "1 day ago",
            },
        ];

        return (
            <div className="min-h-screen bg-[#111111] px-4 py-8 md:px-8">
                <div className="mx-auto max-w-7xl space-y-8">

                    {/* Header Welcome banner */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#18181b]/40 p-6 md:p-8 backdrop-blur-md">
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                                    Welcome back, Alex!
                                </h1>
                                <p className="text-sm text-gray-400 mt-1.5">
                                    You have <span className="text-indigo-400 font-bold">3 active interviews</span> scheduled this week. Keep up the momentum!
                                </p>
                            </div>
                            <Button className="bg-[#5C53FE] text-white font-bold text-xs px-5 py-2.5 rounded-xl self-start md:self-auto shadow-lg shadow-indigo-500/20">
                                Find Jobs
                            </Button>
                        </div>
                    </div>

                    {/* Grid Stats */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-[#18181b]/50 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e1e22]/70 ${item.borderColor}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                                {item.title}
                                            </p>
                                            <h2 className="text-3xl font-black text-white">
                                                {item.value}
                                            </h2>
                                        </div>
                                        <div className={`rounded-xl p-3 ${item.bgColor} ${item.color}`}>
                                            <Icon className="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Profile and Application Status */}
                    <div className="grid gap-6 lg:grid-cols-12">

                        {/* Profile Card */}
                        <div className="lg:col-span-5 rounded-2xl border border-white/5 bg-[#18181b]/50 p-6 shadow-lg backdrop-blur-md flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#5C53FE]/5 blur-3xl" />

                            <div className="relative z-10 flex flex-col items-center text-center py-6">
                                <div className="relative mb-4">
                                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60 blur-sm animate-pulse" />
                                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/10 bg-[#222226]">
                                        <Image
                                            src="/Img/Avatar.png"
                                            alt="Alex Rivera"
                                            fill
                                            sizes="96px"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-white">
                                    Alex Rivera
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    alex.rivera@example.com
                                </p>

                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mt-4 uppercase tracking-wider">
                                    Active Seeker
                                </span>
                            </div>

                            <Button
                                className="relative z-10 w-full bg-[#222226] border border-white/5 hover:border-white/10 text-white font-semibold text-xs py-2.5 rounded-xl transition duration-200"
                            >
                                Edit Profile
                            </Button>
                        </div>

                        {/* Application Status Grid */}
                        <div className="lg:col-span-7 rounded-2xl border border-white/5 bg-[#18181b]/50 p-6 shadow-lg backdrop-blur-md">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-extrabold text-lg text-white">
                                    Application Status
                                </h2>
                                <span className="text-xs text-gray-400 bg-[#222226] border border-white/5 px-2.5 py-1 rounded-lg">
                                    Total: 24 applications
                                </span>
                            </div>

                            <div className="space-y-4">
                                {applicationStatus.map((item) => (
                                    <div key={item.label} className="space-y-1.5">
                                        <div className="flex justify-between text-xs font-semibold text-gray-400">
                                            <span>{item.label}</span>
                                            <span className="text-white">{item.value} <span className="text-[10px] text-gray-500">({item.percent})</span></span>
                                        </div>
                                        {/* Premium progress bar replacement */}
                                        <div className="h-2 w-full rounded-full bg-[#222226] overflow-hidden border border-white/5">
                                            <div
                                                className={`h-full rounded-full ${item.color} transition-all duration-500`}
                                                style={{ width: `${(item.value / item.max) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity List */}
                    <div className="rounded-2xl border border-white/5 bg-[#18181b]/50 p-6 shadow-lg backdrop-blur-md">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg font-extrabold text-white">
                                Recent Activity
                            </h2>
                            <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition duration-200">
                                View All Activity
                            </button>
                        </div>

                        <div className="space-y-4 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
                            {recentActivity.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-white/[0.02] transition duration-200 relative z-10"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`rounded-xl p-2.5 shrink-0 ${item.iconColor}`}>
                                                <Icon className="text-base" />
                                            </div>
                                            <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1.5 whitespace-nowrap">
                                            {item.time}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        );
}