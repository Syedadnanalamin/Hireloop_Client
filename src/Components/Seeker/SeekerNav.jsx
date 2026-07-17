"use client";

import Link from "next/link";
import {
    FiSearch,
    FiMail,
    FiBell,
    FiMenu,
} from "react-icons/fi";

export default function SeekerNav() {
    return (
        <nav className="navbar bg-base-100 border-b border-base-300 px-4 lg:px-8 h-20 rounded-2xl">
            {/* Mobile Menu */}
            <div className="lg:hidden">
                <button className="btn btn-ghost btn-square">
                    <FiMenu className="text-xl" />
                </button>
            </div>

            {/* Search */}
            <div className="flex-1 flex justify-center lg:justify-start">
                <label className="input input-bordered rounded-full bg-base-200 border-base-300 w-full max-w-md flex items-center gap-2">
                    <FiSearch className="text-base-content/60 text-lg" />
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search for opportunities..."
                    />
                </label>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 md:gap-4 ml-4">
                {/* Messages */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FiMail className="text-xl" />
                        <span className="indicator-item w-2.5 h-2.5 bg-error rounded-full"></span>
                    </div>
                </button>

                {/* Notifications */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FiBell className="text-xl" />
                        <span className="indicator-item w-2.5 h-2.5 bg-success rounded-full"></span>
                    </div>
                </button>

                {/* Avatar Dropdown */}
                <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src="https://i.pravatar.cc/150?img=8"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}