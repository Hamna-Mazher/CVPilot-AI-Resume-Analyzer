"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "React",
    value: 35,
  },
  {
    name: "Next.js",
    value: 25,
  },
  {
    name: "TypeScript",
    value: 20,
  },
  {
    name: "Tailwind",
    value: 20,
  },
];

const COLORS = [
  "#22d3ee",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
];

export default function SkillsChart() {
  return (
    <div className="h-80 w-full">

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={95}
            dataKey="value"
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}