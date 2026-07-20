import Link from "next/link";
import { Sparkles } from "lucide-react";


export default function CreateCard() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        p-8
      "
    >

      <div
        className="
          absolute
          -right-20
          -top-20
          h-60
          w-60
          rounded-full
          bg-white/5
          blur-3xl
        "
      />


      <div className="relative z-10 flex flex-col gap-5">


        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white
            text-black
          "
        >
          <Sparkles size={24} />
        </div>


        <div>

          <h2 className="text-2xl font-semibold text-white">
            Create AI Video
          </h2>


          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Describe your idea and let AI transform
            it into a professional short video.
          </p>

        </div>


        <Link
          href="/dashboard/create"
          className="
            mt-2
            flex
            w-fit
            items-center
            gap-2
            rounded-xl
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-black
            transition
            hover:bg-zinc-200
          "
        >

          <Sparkles size={18} />

          Generate Video

        </Link>


      </div>

    </section>
  );
}