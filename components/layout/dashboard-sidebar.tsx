"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  BarChart3,
  Settings,
  Home,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "Analysis",
    href: "/analysis",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ================= MOBILE TOP NAV ================= */}

      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl lg:hidden">

        <div className="flex items-center justify-between px-5 py-4">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            CV<span className="text-cyan-400">Pilot</span>
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Home
          </Link>

        </div>

      </div>

      {/* ================= MOBILE BOTTOM NAV ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#050816]/95 px-3 py-3 backdrop-blur-xl lg:hidden">

        <div className="flex items-center justify-around">

          {items.map((item) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition

                ${
                  active
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }

                `}
              >

                <Icon size={20} />

                <span className="text-[11px]">

                  {item.name}

                </span>

              </Link>

            );

          })}

        </div>

      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}

      <aside className="hidden lg:flex lg:w-72 lg:min-w-[288px] lg:h-screen lg:sticky lg:top-0 flex-col border-r border-white/10 bg-black/40 backdrop-blur-2xl">

        <div className="border-b border-white/10 p-8">

          <Link href="/">

            <h1 className="text-3xl font-bold tracking-tight">

              CV<span className="text-cyan-400">Pilot</span>

            </h1>

          </Link>

          <p className="mt-2 text-sm text-gray-500">

            AI Resume Intelligence

          </p>

        </div>

        <nav className="flex-1 space-y-3 p-5">

          {items.map((item) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (

              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

                ${
                  active
                    ? "border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/10"
                    : "text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-1"
                }

                `}
              >

                <Icon
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />

                <span className="font-medium">

                  {item.name}

                </span>

              </Link>

            );

          })}

        </nav>
                {/* ================= USER CARD ================= */}

        <div className="px-5 pb-5">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-black">

                H

              </div>

              <div>

                <h3 className="font-semibold text-white">

                  Hamna

                </h3>

                <p className="text-sm text-gray-400">

                  Frontend Developer

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BACK BUTTON ================= */}

        <div className="border-t border-white/10 p-5">

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400"
          >

            <Home size={18} />

            Back to Home

          </Link>

        </div>

      </aside>

    </>
  );

}