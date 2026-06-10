import { ArrowUpRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{title}</p>

        <ArrowUpRight
          size={18}
          className="text-cyan-400"
        />
      </div>

      <h2 className="mt-5 text-5xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-3 text-sm text-cyan-400">
        {subtitle}
      </p>
    </div>
  );
}