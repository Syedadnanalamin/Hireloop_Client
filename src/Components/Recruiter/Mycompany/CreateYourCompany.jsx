import { useRouter } from 'next/navigation';
import React from 'react';


const CreateYourCompany = () => {
    const router = useRouter()
    return (
        <div className="max-w-md w-full text-center space-y-6">
            <div className="relative inline-block">
                <div className="w-24 h-24 bg-[#1a1a1a] border border-gray-800 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                <span className="absolute -top-2 -right-2 bg-white text-black p-1.5 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                </span>
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Company not registered yet</h2>
                <p className="text-gray-400 text-sm max-w-sm mx-auto">
                    Set up your business profile to start posting high-performance job listings and manage your talent loop.
                </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
                <button
                    className="btn bg-white hover:bg-gray-200 text-black border-none normal-case px-6 font-medium rounded-xl"
                    onClick={() => router.push("/recruiter/mycompany?modal=new")}
                >
                    Register your company
                </button>
                <button className="btn btn-ghost border border-gray-800 text-gray-300 hover:bg-gray-900 normal-case px-6 rounded-xl">
                    View FAQ
                </button>
            </div>

            <p className="text-xs text-gray-500 pt-6">
                Need specialized assistance? <span className="text-gray-400 underline cursor-pointer">Contact our enterprise support team.</span>
            </p>
        </div>
    );
};

export default CreateYourCompany;