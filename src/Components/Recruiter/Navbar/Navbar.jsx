"use client";

import { Avatar } from "@heroui/react";
import { Bell } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
    const { data: session } = authClient.useSession();

    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#171717]/90 backdrop-blur-xl w-full rounded-2xl mb-6">
            
            <div className="flex h-20 items-center justify-end px-6 gap-4">

                {/* Notifications */}
                <button 
                    type="button" 
                    className="relative p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
                >
                    <Bell className="w-5 h-5" />
                    {/* Pulsing indicator dot */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#5C53FE] rounded-full animate-pulse" />
                </button>

                {/* Profile Card */}
                <button 
                    type="button" 
                    className="flex items-center gap-3 rounded-xl border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10 px-3.5 py-2 transition-all duration-200 shadow-sm text-left hover:scale-[1.02]"
                >
                    <div className="hidden sm:block text-right">
                        
                        <h3 className="text-sm font-semibold text-white leading-none mb-1.5">
                            {session?.user?.name || "Loading..."}
                        </h3>

                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold leading-none">
                            {session?.user?.plan || "Free"} Account
                        </p>

                    </div>

                    <Avatar
                        src={session?.user?.image || "https://randomuser.me/api/portraits/men/1.jpg"}
                        className="h-9 w-9 border border-white/10 shadow-inner"
                        name={session?.user?.name || "R"}
                    />

                </button>

            </div>

        </header>
    );
}