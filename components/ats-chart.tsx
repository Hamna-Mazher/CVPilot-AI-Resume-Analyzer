"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    score: 62,
  },
  {
    name: "Feb",
    score: 68,
  },
  {
    name: "Mar",
    score: 74,
  },
  {
    name: "Apr",
    score: 79,
  },
  {
    name: "May",
    score: 84,
  },
  {
    name: "Jun",
    score: 86,
  },
];

export default function ATSChart() {
  return (
    <div className="h-80 w-full">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="colorScore"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#22d3ee"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#22d3ee"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid stroke="#222" />

          <XAxis
            dataKey="name"
            stroke="#888"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="score"
            stroke="#22d3ee"
            fillOpacity={1}
            fill="url(#colorScore)"
            strokeWidth={3}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}