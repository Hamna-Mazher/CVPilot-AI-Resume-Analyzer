import { NextResponse } from "next/server";

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json({
    atsScore: 86,
    recruiterMatch: 92,
    keywordMatch: 89,

    skills: [
      {
        name: "React",
        value: 95,
      },
      {
        name: "Next.js",
        value: 91,
      },
      {
        name: "TypeScript",
        value: 88,
      },
      {
        name: "Tailwind CSS",
        value: 97,
      },
    ],

    missing: [
      "Docker",
      "AWS",
      "Testing",
      "CI/CD",
    ],
  });
}