const tips = [
  "Add measurable internship achievements",
  "Mention Docker and CI/CD experience",
  "Include testing libraries",
  "Improve professional summary",
];

export default function AITips() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-semibold">
        🤖 AI Recommendations
      </h2>

      <div className="space-y-4">
        {tips.map((tip) => (
          <div
            key={tip}
            className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-4 transition hover:border-cyan-400/30"
          >
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}