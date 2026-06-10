interface SkillProps {
  name: string;
  value: number;
}

export default function SkillProgress({
  name,
  value,
}: SkillProps) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <span>{name}</span>

        <span className="text-cyan-400">
          {value}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-white/10 overflow-hidden">

        <div
          className="h-full rounded-full bg-cyan-400 transition-all"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}