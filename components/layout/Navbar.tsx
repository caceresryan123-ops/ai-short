"use client";

import { Bell, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { signOut } from "@/lib/auth";

export default function Navbar() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut();

      router.replace("/auth/login");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        border-zinc-800
        bg-zinc-950/50
        px-8
        backdrop-blur
      "
    >
      <h2 className="text-lg font-semibold text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-zinc-400
            transition
            hover:bg-zinc-900
            hover:text-white
          "
        >
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white
              text-sm
              font-bold
              text-black
            "
          >
            A
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-medium text-white">
              Account
            </span>

            <span className="text-xs text-zinc-400">
              Creator
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="
              ml-4
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-zinc-800
              px-3
              py-2
              text-sm
              text-zinc-300
              transition
              hover:border-red-500
              hover:text-red-400
            "
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}