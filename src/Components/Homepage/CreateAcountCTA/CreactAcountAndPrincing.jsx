import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CreactAcountAndPrincing = () => {
    return (
        <div>
            <section className="relative overflow-hidden bg-[#1F252D] py-28">

                {/* Background Image */}
                <Image
                    src="/Img/cta-bg.png"
                    alt="CTA Background"
                    width={1800}
                    height={900}
                    className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-top
                    pointer-events-none
                    select-none
                "
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1F252D]/20 via-[#1F252D]/40 to-[#1F252D]" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-5">

                    <div className="mx-auto max-w-3xl text-center">

                        <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Your next role is
                            <br />
                            already looking for you
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                            Build a profile in three minutes.
                            The matches start arriving tomorrow morning.
                        </p>

                        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

                            <Link
                                href="/register"
                                className="btn rounded-xl border-0 bg-white px-8 text-black hover:bg-gray-200"
                            >
                                Create a Free Account
                            </Link>

                            <Link
                                href="/pricing"
                                className="btn rounded-xl border border-white/10 bg-[#2B333D]/80 px-8 text-white backdrop-blur-md hover:bg-[#353F4C]"
                            >
                                View Pricing
                            </Link>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default CreactAcountAndPrincing;