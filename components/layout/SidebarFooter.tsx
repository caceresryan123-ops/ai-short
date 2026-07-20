export default function SidebarFooter() {
  return (
    <div className="border-t border-zinc-800 px-4 py-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
          <span className="text-sm font-semibold text-white">
            A
          </span>
        </div>


        <div className="flex flex-col">

          <p className="text-sm font-medium text-white">
            Account
          </p>

          <p className="text-xs text-zinc-400">
            Creator
          </p>

        </div>

      </div>

    </div>
  );
}