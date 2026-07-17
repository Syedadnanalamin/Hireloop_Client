import React from 'react';

const Skelaton = () => {
    return (
        <div>
            <aside className="fixed left-0 top-0 z-50 flex h-screen w-[285px] flex-col border-r border-white/10 bg-[#171717]">
                {/* Header */}
                <div className="border-b border-white/10 px-7 py-6">
                    <div className="skeleton h-9 w-32 rounded-lg"></div>
                </div>

                {/* Profile Card */}
                <div className="px-5 pt-6">
                    <div className="rounded-2xl border border-white/10 bg-[#222222] p-4">
                        <div className="flex items-center gap-3">
                            <div className="skeleton h-12 w-12 rounded-full"></div>

                            <div className="flex-1 space-y-2">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-3 w-20"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className="mt-8 flex-1 px-4">
                    <div className="space-y-2">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 rounded-xl px-4 py-3"
                            >
                                <div className="skeleton h-5 w-5 rounded-md"></div>
                                <div className="skeleton h-4 w-28"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 p-5">
                    <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#202020] p-3">
                        <div className="skeleton h-10 w-10 rounded-full"></div>

                        <div className="flex-1 space-y-2">
                            <div className="skeleton h-4 w-24"></div>
                            <div className="skeleton h-3 w-36"></div>
                        </div>
                    </div>

                    <div className="skeleton h-12 w-full rounded-xl"></div>
                </div>
            </aside>
        </div>
    );
};

export default Skelaton;