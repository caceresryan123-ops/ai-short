export default function SidebarPlan() {
  return (
    <div className="mx-3 mb-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">

      <div className="mb-3">
        <p className="text-sm font-semibold text-white">
          PRO PLAN
        </p>

        <p className="mt-1 text-xs text-zinc-400">
          Unlimited AI video generation
        </p>
      </div>


      <button
        className="
          w-full rounded-xl
          bg-white
          px-3 py-2
          text-sm
          font-medium
          text-black
          transition
          hover:bg-zinc-200
        "
      >
        Manage Plan
      </button>

    </div>
  );
}