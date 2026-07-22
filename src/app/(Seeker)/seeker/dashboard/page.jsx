"use client";

import { Avatar, Button, Progress } from "@heroui/react";
import Image from "next/image";
import {
    FiBookmark,
    FiFileText,
    FiBriefcase,
    FiGift,
    FiUser,
    FiClock,
    FiMessageSquare,
} from "react-icons/fi";

export default function SeekerDashboard() {
    // ===========================
    // Replace these with API data
    // ===========================

    const stats = [
        {
            title: "Saved Jobs",
            value: 12,
            icon: FiBookmark,
            color: "text-primary",
        },
        {
            title: "Applications Submitted",
            value: 24,
            icon: FiFileText,
            color: "text-info",
        },
        {
            title: "Interviews Scheduled",
            value: 3,
            icon: FiBriefcase,
            color: "text-warning",
        },
        {
            title: "Offers Received",
            value: 1,
            icon: FiGift,
            color: "text-success",
        },
    ];

    const applicationStatus = [
        { label: "Applied", value: 10, color: "progress" },
        { label: "Under Review", value: 6, color: "progress progress-warning" },
        { label: "Shortlisted", value: 5, color: "progress progress-info" },
        { label: "Rejected", value: 2, color: "progress progress-error" },
        { label: "Hired", value: 1, color: "progress progress-success" },
    ];

    const recentActivity = [
        {
            icon: FiClock,
            text: "Application for Senior Product Designer at TechFlow updated to Under Review.",
            time: "2 hours ago",
        },
        {
            icon: FiBriefcase,
            text: "New Job Alert: Lead Frontend Engineer at FinGrid matches your profile.",
            time: "5 hours ago",
        },
        {
            icon: FiMessageSquare,
            text: "You have a new message from Sarah Jenkins (Hiring Manager at CloudSpot).",
            time: "1 day ago",
        },
    ];

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="mx-auto max-w-7xl space-y-6">

                {/* ================= Stats ================= */}

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="card bg-base-100 border border-base-300"
                            >
                                <div className="card-body">

                                    <div className="flex justify-between">

                                        <div>
                                            <p className="text-sm text-base-content/70">
                                                {item.title}
                                            </p>

                                            <h2 className="mt-2 text-3xl font-bold">
                                                {item.value}
                                            </h2>
                                        </div>

                                        <Icon className={`text-2xl ${item.color}`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ================= Profile & Status ================= */}

                <div className="grid gap-6 lg:grid-cols-2">

                    {/* Profile */}

                    <div className="card bg-base-100 border border-base-300">

                        <div className="card-body justify-between ">

                            <div className="flex items-center gap-4 ml-10 mt-10">


                                <Image
                                    src="/Img/Avatar.png"
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        Alex Rivera
                                    </h2>

                                    <p className="text-sm text-base-content/60">
                                        alex.rivera@example.com
                                    </p>
                                </div>

                            </div>

                            <Button
                                className="mt-8 bg-green-700 w-full mb-10"
                                variant="bordered"
                            >
                                Edit Profile
                            </Button>

                        </div>
                    </div>

                    {/* Application Status */}

                    <div className="card bg-base-100 border border-base-300">

                        <div className="card-body">

                            <h2 className="font-semibold text-lg mb-5">
                                Application Status
                            </h2>

                            <div className="space-y-5">

                                {applicationStatus.map((item) => (

                                    <div key={item.label}>

                                        <div className="mb-2 flex justify-between text-sm">

                                            <span>{item.label}</span>

                                            <span>{item.value}</span>

                                        </div>

                                        <progress
                                            className={`progress w-full ${item.color}`}
                                            value={item.value}
                                            max="10"
                                        ></progress>

                                    </div>

                                ))}

                            </div>

                        </div>
                    </div>
                </div>

                {/* ================= Recent Activity ================= */}

                <div>

                    <div className="mb-5 flex items-center justify-between">

                        <h2 className="text-xl font-semibold">
                            Recent Activity
                        </h2>

                        <button className="link link-hover text-primary">
                            View All Activity
                        </button>

                    </div>

                    <div className="space-y-4">

                        {recentActivity.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="card bg-base-100 border border-base-300"
                                >
                                    <div className="card-body flex-row items-center justify-between">

                                        <div className="flex items-center gap-4">

                                            <div className="rounded-full bg-base-200 p-3">
                                                <Icon className="text-lg" />
                                            </div>

                                            <p className="text-sm">
                                                {item.text}
                                            </p>

                                        </div>

                                        <span className="text-xs text-base-content/60 whitespace-nowrap">
                                            {item.time}
                                        </span>

                                    </div>
                                </div>

                            );
                        })}

                    </div>

                </div>

            </div>
        </div>
    );
}