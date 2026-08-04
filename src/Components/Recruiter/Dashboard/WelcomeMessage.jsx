"use client";

import React from 'react';
import { authClient } from '@/lib/auth-client';

export default function WelcomeMessage() {
    const { data: session, isPending } = authClient.useSession();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <h1 className='text-2xl font-bold text-white flex items-center gap-2'>
            Welcome back,{" "}
            {!mounted || isPending ? (
                <span className="loading loading-dots loading-xs text-[#5C53FE]"></span>
            ) : (
                session?.user?.name || "Recruiter"
            )}
        </h1>
    );
}
