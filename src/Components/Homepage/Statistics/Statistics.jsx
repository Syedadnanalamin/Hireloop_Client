import StatisticsCard from "./StatisticsCard";

export default function Statistics() {
    return (
        <section className="relative overflow-hidden bg-[#1F252D] py-32">

            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

                <div className="absolute right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[150px]" />
            </div>

            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 container mx-auto px-5">

                {/* Badge */}
                <div className="flex justify-center">
                    <span className="rounded-full border border-blue-400/20 bg-white/5 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
                        Trusted Worldwide
                    </span>
                </div>

                {/* Heading */}
                <div className="mx-auto mt-8 max-w-4xl text-center">

                    <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">

                        Assisting over{" "}

                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            15,000
                        </span>{" "}
                        <br />
                        job seekers

                        <br />

                        <p className="text-2xl font-bold leading-tight text-white md:text-5xl lg:text-6x">  find their dream positions.</p>

                    </h2>


                </div>

                {/* Cards */}
                <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

                    <StatisticsCard />
                    <StatisticsCard />
                    <StatisticsCard />
                    <StatisticsCard />

                </div>

            </div>
        </section>
    );
}