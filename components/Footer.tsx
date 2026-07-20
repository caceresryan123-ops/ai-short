import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <p className="text-sm text-zinc-500">
          © 2026 ClipForge. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-zinc-400">

          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>

          <Link href="/refund" className="hover:text-white">
            Refund Policy
          </Link>

        </div>

      </div>
    </footer>
  );
}