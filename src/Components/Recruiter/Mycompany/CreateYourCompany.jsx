import { useRouter } from 'next/navigation';
import React from 'react';

const CreateYourCompany = () => {
    const router = useRouter();
    return (
        <div className="max-w-xl w-full text-center space-y-8 bg-[#18181b]/60 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">
            <div className="relative inline-block">
                <div className="w-28 h-28 bg-gradient-to-tr from-[#1b1b22] to-[#272730] border border-white/10 rounded-3xl flex items-center justify-center mx-auto shadow-xl transition-all duration-500 hover:scale-105 hover:border-[#5C53FE]/50 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12 text-zinc-400 group-hover:text-[#5C53FE] transition-colors duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                <span className="absolute -top-2 -right-2 bg-[#5C53FE] text-white p-2 rounded-2xl shadow-lg shadow-[#5C53FE]/30 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                </span>
            </div>

            <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight text-white">Company Not Registered Yet</h2>
                <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                    Set up your business profile to start posting high-performance job listings and manage your talent loop.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <button
                    className="w-full sm:w-auto bg-[#5C53FE] hover:bg-[#4b42e2] text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 shadow-xl shadow-[#5C53FE]/20 hover:scale-[1.02]"
                    onClick={() => router.push("/recruiter/mycompany?modal=new")}
                >
                    Register Your Company
                </button>
                <button className="w-full sm:w-auto bg-transparent border border-white/10 text-zinc-300 hover:bg-white/5 font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300">
                    View FAQ
                </button>
            </div>

            <p className="text-xs text-zinc-600 pt-6">
                Need specialized assistance? <span className="text-[#5C53FE] hover:underline cursor-pointer font-medium">Contact our enterprise support team.</span>
            </p>
        </div>
    );
};

export default CreateYourCompany;