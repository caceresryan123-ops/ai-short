"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Sparkles,
  Clapperboard,
  CreditCard,
  Settings,
} from "lucide-react";


const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Generate",
    href: "/dashboard/create",
    icon: Sparkles,
  },
  {
    name: "My Videos",
    href: "/dashboard/videos",
    icon: Clapperboard,
  },
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];


export default function SidebarNav() {

  const pathname = usePathname();


  return (
    <nav className="flex flex-1 flex-col gap-2 px-3 py-6">

      {navigation.map((item) => {

        const Icon = item.icon;

        const active = pathname === item.href;


        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              flex items-center gap-3 rounded-xl px-4 py-3
              text-sm font-medium transition-all duration-200

              ${
                active
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }
            `}
          >

            <Icon size={18} />

            {item.name}

          </Link>
        );

      })}

    </nav>
  );
}