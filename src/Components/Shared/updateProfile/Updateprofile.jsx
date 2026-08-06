"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";
import { CircleCheckFill, CircleXmarkFill, Persons } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { UpdateRecruiterProfile } from "@/lib/actions/recruiter/UpdateRecruiterProfile";

export default function Updateprofile() {
    // 💡 Fetch live session using the authClient hook directly (no useEffect needed!)
    const { data: session, isPending } = authClient.useSession();

    if (isPending || !session?.user) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="w-8 h-8 border-4 border-[#5C53FE] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // Pass the active session data to the form component
    return <UpdateProfileForm session={session} />;
}

function UpdateProfileForm({ session }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "success" });

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const updatedProfile = Object.fromEntries(formData.entries());

        try {
            const res = await UpdateRecruiterProfile(session?.user?.id, updatedProfile);
            console.log("API call finished. Response object received:", res);

            if (res && res.success) {
                setToast({ show: true, message: "Profile updated successfully!", type: "success" });
                await authClient.getSession();

                // Force a clean browser reload after 1 second so they see the success toast first
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                setToast({ show: true, message: res?.message || "Failed to update profile.", type: "error" });
            }
            setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
        } catch (err) {
            console.error("Profile update error caught in form component:", err);
            setToast({ show: true, message: err.message || "An error occurred while saving.", type: "error" });
            setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Persons className="w-8 h-8 text-[#5C53FE]" />
                    Profile Settings
                </h1>
                <p className="mt-2 text-zinc-400 text-sm">
                    Manage your personal account details, email address, and avatar.
                </p>
            </div>

            {/* Profile Update Card */}
            <form key={session.user.name + (session.user.image || "") + session.user.email} onSubmit={handleUpdate} className="overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B]/60 backdrop-blur-xl p-6 md:p-8 shadow-2xl space-y-6">

                {/* Avatar Preview & URL */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/5">
                    <Avatar
                        src={session.user.image || null}
                        className="w-24 h-24 text-2xl border-2 border-white/10 shadow-xl"
                        name={session.user.name}
                    />
                    <div className="flex-1 w-full space-y-2">
                        <label className="text-sm font-semibold text-white">Profile Image URL</label>
                        <input
                            type="url"
                            name="image"
                            defaultValue={session.user.image || " "}
                            placeholder="https://example.com/avatar.jpg"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#5C53FE]/50 transition-all duration-200 text-sm"
                        />
                        <p className="text-[11px] text-zinc-500">
                            Paste an image URL (PNG, JPG, SVG) to update your profile photo.
                        </p>
                    </div>
                </div>

                {/* Grid Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-white">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={session.user.name}
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#5C53FE]/50 transition-all duration-200 text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-white">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={session.user.email}
                            placeholder="example@domain.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#5C53FE]/50 transition-all duration-200 text-sm"
                        />
                    </div>

                    {/* Role (Read Only) */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-400">Account Type</label>
                        <div className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-zinc-500 text-sm capitalize">
                            {session.user.role || "seeker"}
                        </div>
                    </div>

                    {/* Plan (Read Only) */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-400">Subscription Plan</label>
                        <div className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-zinc-500 text-sm capitalize flex items-center justify-between">
                            <span>{session.user.plan || "Free"}</span>
                            <span className="text-[10px] bg-white/5 text-zinc-400 px-2 py-0.5 rounded-md font-bold uppercase">
                                Active
                            </span>
                        </div>
                    </div>
                </div>

                {/* Submit Action */}
                <div className="flex justify-end pt-4 border-t border-white/5">
                    <button
                        type="submit"
                        disabled={loading}
                        className="relative bg-[#5C53FE] hover:bg-[#4b42e2] disabled:bg-[#5C53FE]/60 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#5C53FE]/20 hover:scale-[1.01] active:scale-[0.99] flex items-center gap-2 cursor-pointer"
                    >
                        {loading && (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        )}
                        Save Changes
                    </button>
                </div>
            </form>

            {/* Custom Premium Toast */}
            {toast.show && (
                <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-[#121212]/95 border-white/10 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-5 duration-300">
                    {toast.type === "success" ? (
                        <CircleCheckFill className="text-emerald-500 w-5 h-5" />
                    ) : (
                        <CircleXmarkFill className="text-rose-500 w-5 h-5" />
                    )}
                    <span className="text-sm font-semibold">{toast.message}</span>
                </div>
            )}
        </div>
    );
}