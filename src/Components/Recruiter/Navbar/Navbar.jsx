"use client";

import { Input, Avatar, Badge, Button } from "@heroui/react";
import { Magnifier, Bell } from "@gravity-ui/icons";


export default function Navbar() {



    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#171717]/90 backdrop-blur-xl">

            <div className="flex h-20 items-center justify-between ">

                {/* Search */}

                <div className="w-full flex-1 flex justify-center items-center">

                    <Input
                        placeholder="Search applications, jobs, or talent..."
                        className={"w-[70%]"}
                    />

                </div>

                {/* Right Side */}

                <div className="ml-8 flex items-center gap-5">

                    {/* Notification */}

                    <div className="p-2 bg-gray-600 cursor-pointer rounded-full">
                        <Bell></Bell>
                    </div>

                    {/* Profile */}

                    <button className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-white/5">

                        <div className="text-right">

                            <h3 className="text-sm font-semibold text-white">
                                Alex Sterling
                            </h3>

                            <p className="text-xs text-zinc-500">
                                Recruiter
                            </p>

                        </div>

                        <Avatar
                            src="https://i.pravatar.cc/150?img=12"
                            className="h-10 w-10"
                        />

                    </button>

                </div>

            </div>

        </header>
    );
}