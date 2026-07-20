"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const PLAN_LIMITS = {
  basic: 13,
  starter: 40,
  pro: 90,
  business: 200,
};

export default function CreditsCard() {
  const [plan, setPlan] = useState("basic");
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        console.log("SESSION:", session);

        const user = session?.user;

        if (!user) {
          console.log("NO HAY USUARIO");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("plan, credits")
          .eq("id", user.id)
          .maybeSingle();

        if (error) {
          console.error(error);
          return;
        }

        if (data) {
          setPlan(data.plan ?? "basic");
          setCredits(Number(data.credits ?? 0));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  const maxVideos =
    PLAN_LIMITS[plan as keyof typeof PLAN_LIMITS] ?? 13;

  const percentage = Math.min(
    (credits / maxVideos) * 100,
    100
  );

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-zinc-400">
            Current Plan
          </p>

          <h3 className="mt-1 text-xl font-semibold capitalize text-white">
            {loading ? "Loading..." : `${plan} Plan`}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
          <Zap size={20} />
        </div>

      </div>

      <div className="mt-6">

        <div className="flex items-center justify-between">

          <p className="text-sm text-zinc-400">
            AI Videos Remaining
          </p>

          <p className="text-sm font-medium text-white">
            {loading ? "..." : `${credits} / ${maxVideos}`}
          </p>

        </div>


        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-800">

          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>


      <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/50 p-3">

        <p className="text-xs text-zinc-500">
          1 AI Video = 1 Credit
        </p>

      </div>


      <button
        className="
          mt-6
          w-full
          rounded-xl
          bg-white
          py-3
          text-sm
          font-semibold
          text-black
          transition
          hover:bg-zinc-200
        "
      >
        Upgrade Plan
      </button>

    </section>
  );
}