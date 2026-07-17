"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import { Avatar, Button } from "@heroui/react";

import {
    Bars,
    Xmark,
    House,
    Briefcase,
    Persons,
    Gear,
    Passport,
    ArrowRightFromSquare,

    Magnifier,
    Bookmark,
    FileText,
    CreditCard,

} from "@gravity-ui/icons";
import Skelaton from "./Skelaton";


export default function Sidebar() {
    const { data: session, isPending } = authClient.useSession()

    const pathname = usePathname();

    const [open, setOpen] = useState(false);


    const LogOut = async () => {

        await authClient.signOut();
    }

    const recruiterMenu = [
        {
            title: "Dashboard",
            href: "/recruiter/dashboard",
            icon: House,
        },
        {
            title: "Manage Jobs",
            href: "/recruiter/managejobs",
            icon: Briefcase,
        },
        {
            title: "My Company",
            href: "/recruiter/mycompany",
            icon: Passport,
        },
        {
            title: "Applications",
            href: "/dashboard/applications",
            icon: Persons,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Gear,
        },
    ];


    const seekerMenu = [
        {
            title: "Dashboard",
            href: "/seeker/dashboard",
            icon: House,
        },
        {
            title: "Jobs",
            href: "/seeker/jobs",
            icon: Magnifier,
        },
        {
            title: "Saved Jobs",
            href: "/seeker/saved-jobs",
            icon: Bookmark,
        },
        {
            title: "Applications",
            href: "/seeker/applications",
            icon: FileText,
        },
        {
            title: "Billing",
            href: "/seeker/billing",
            icon: CreditCard,
        },
        {
            title: "Settings",
            href: "/seeker/settings",
            icon: Gear,
        },
    ];

    if (isPending) {

        return <Skelaton></Skelaton>
    }

    const userRole = session?.user?.role;

    const menuItems = userRole == "seeker" ? seekerMenu : recruiterMenu;


    return (
        <>
            {/* Mobile Toggle */}

            <button
                onClick={() => setOpen(true)}
                className="fixed left-5 top-5 z-40 rounded-xl bg-[#5C53FE] p-3 text-white shadow-lg lg:hidden"
            >
                <Bars />
            </button>

            {/* Overlay */}

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                />
            )}

            {/* Sidebar */}

            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-[285px]
        flex-col border-r border-white/10 bg-[#171717]
        transition-all duration-300

        ${open
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-7 py-6">

                    <Link href="/">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={135}
                            height={40}
                            priority
                        />
                    </Link>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white lg:hidden"
                    >
                        <Xmark />
                    </button>

                </div>

                {/* Profile */}

                <div className="px-5 pt-6">

                    <div className="rounded-2xl border border-white/10 bg-[#222222] p-4 shadow-lg">

                        <div className="flex items-center gap-3">

                            <Avatar
                                src="https://i.pravatar.cc/150?img=12"
                                className="h-12 w-12"
                            />

                            <div>

                                <h2 className="font-semibold text-white">
                                    Alex Sterling
                                </h2>

                                <p className="text-xs text-zinc-400">
                                    Premium Recruiter
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Menu */}

                <nav className="mt-8 flex-1 px-4">

                    <ul className="space-y-2">

                        {menuItems.map((item) => {

                            const Icon = item.icon;

                            const active =
                                pathname === item.href ||
                                pathname.startsWith(item.href + "/");

                            return (
                                <li key={item.href}>

                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300

                    ${active
                                                ? "bg-[#5C53FE] text-white shadow-lg"
                                                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <Icon className="h-5 w-5 transition group-hover:scale-110" />

                                        <span className="font-medium">
                                            {item.title}
                                        </span>

                                    </Link>

                                </li>
                            );

                        })}
                    </ul>
                </nav>

                {/* Footer */}

                <div className="border-t border-white/10 p-5">

                    <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#202020] p-3">

                        <Avatar
                            src="https://i.pravatar.cc/150?img=32"
                            className="h-10 w-10"
                        />

                        <div className="flex-1">

                            <h4 className="text-sm font-semibold text-white">
                                Alex Sterling
                            </h4>

                            <p className="text-xs text-zinc-400">
                                alex@email.com
                            </p>

                        </div>

                    </div>

                    <Button
                        variant="light"
                        className="flex h-12 w-full justify-start gap-3 rounded-xl text-zinc-400 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400"
                        onClick={() => LogOut()}
                    >
                        <ArrowRightFromSquare />

                        Logout
                    </Button>

                </div>

            </aside>
        </>
    );
}