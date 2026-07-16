"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const { data: session } = authClient.useSession();



    const [open, setOpen] = useState(false);

    const navItems = [
        {
            name: "Browse Jobs",
            href: "/jobs",
        },
        {
            name: "Company",
            href: "/company",
        },
        {
            name: "Pricing",
            href: "/pricing",
        },
    ];


    const clearSession = async () => {

        await authClient.signOut();


    }
    return (
        <header className="w-full px-4 my-2 ">
            <div className="mx-auto flex h-20 w-full items-center justify-between  bg-[#222222] px-10 shadow-sm md:max-w-[90%] my-3 rounded-full lg:max-w-[90%]">

                {/* Left */}
                <div className="flex items-center gap-3">

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="btn btn-ghost btn-sm lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {open ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <Link href="/">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={120}
                            height={40}
                            priority
                            className="h-10 w-auto cursor-pointer object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right */}
                <div className="hidden items-center justify-center h-full  gap-3 lg:flex">
                    {session?.user ? <button className="btn btn-primary rounded-full" onClick={() => clearSession()}>Logout</button> : <Link
                        href="/login"
                        className="cursor-pointer text-blue-500 transition hover:text-white"
                    >
                        Sign In
                    </Link>
                    }
                    <Link href="/register">
                        <Button className="mt-3 bg-[#5C53FE]">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="mx-auto mt-2 w-full rounded-md bg-[#222222] p-4 shadow-lg md:w-[80%] lg:hidden">
                    <ul className="menu gap-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        <div className="divider my-2"></div>

                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="text-blue-500"
                        >
                            Sign In
                        </Link>

                        <Link href="/register">
                            <Button className="mt-3 bg-[#5C53FE]">
                                Get Started
                            </Button>
                        </Link>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;