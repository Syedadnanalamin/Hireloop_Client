import { Briefcase } from "@gravity-ui/icons";

export default function StatisticCard() {
    return (
        <div
            className="
        rounded-3xl
        border border-white/10
        bg-black/50
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/50
        hover:shadow-[0_20px_60px_rgba(124,58,237,.25)]
        cursor-pointer
      "
        >
            <Briefcase className="w-6 h-6 text-white mb-12" />

            <h2 className="text-5xl font-bold text-white">
                50K
            </h2>

            <p className="mt-4 text-gray-300">
                Active Jobs
            </p>
        </div>
    );
}