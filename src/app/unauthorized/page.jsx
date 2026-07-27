"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FiShield, FiArrowLeft, FiHome } from "react-icons/fi";

export default function Unauthorized() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-base-200 px-6">
            <div className="max-w-lg text-center">

                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-error/10">
                    <FiShield className="text-5xl text-error" />
                </div>

                {/* Error Code */}
                <h1 className="mt-8 text-6xl font-extrabold text-error">
                    403
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-3xl font-bold">
                    Access Denied
                </h2>

                {/* Description */}
                <p className="mt-4 text-base-content/70 leading-7">
                    Sorry, you don't have permission to access this page.
                    If you believe this is a mistake, please contact the administrator
                    or return to a page you have access to.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link href="/">
                        <Button
                            color="primary"
                            className="w-full sm:w-auto"
                            startContent={<FiHome />}
                        >
                            Go Home
                        </Button>
                    </Link>

                    <Button
                        variant="bordered"
                        className="w-full sm:w-auto"
                        startContent={<FiArrowLeft />}
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </Button>

                </div>

                {/* Extra Info */}
                <div className="mt-10 rounded-xl border border-base-300 bg-base-100 p-5 text-left">
                    <h3 className="font-semibold">
                        Why am I seeing this?
                    </h3>

                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-base-content/70">
                        <li>You are not signed in.</li>
                        <li>Your account doesn't have the required role.</li>
                        <li>The page is restricted to authorized users only.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}