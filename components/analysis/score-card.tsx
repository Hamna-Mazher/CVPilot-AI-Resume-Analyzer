interface ScoreCardProps {
  title: string;
  score: string;
  color?: string;
}

export default function ScoreCard({
  title,
  score,
  color = "text-cyan-400",
}: ScoreCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/20 hover:scale-[1.02]">

      <p className="text-gray-400">{title}</p>

      <h2 className={`mt-4 text-5xl font-bold ${color}`}>
        {score}
      </h2>

    </div>
  );
}