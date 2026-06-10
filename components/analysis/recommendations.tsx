const recommendations = [
  "Add Docker experience",
  "Mention CI/CD pipelines",
  "Highlight internship achievements with numbers",
  "Include testing libraries",
];

export default function Recommendations() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-semibold">

        AI Recommendations

      </h2>

      <div className="space-y-4">

        {recommendations.map((item) => (

          <div
            key={item}
            className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 p-4"
          >
            ✓ {item}
          </div>

        ))}

      </div>

    </div>
  );
}