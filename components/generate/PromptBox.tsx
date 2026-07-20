"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const MAX_CHARACTERS = 1500;

export default function PromptBox({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4">

      <div className="flex items-center justify-between">

        <label className="text-sm font-semibold text-white">
          Describe your AI Video
        </label>

        <span className="text-xs text-zinc-500">
          {value.length} / {MAX_CHARACTERS}
        </span>

      </div>

      <textarea
        value={value}
        maxLength={MAX_CHARACTERS}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Example: A cinematic drone shot flying over futuristic Tokyo at sunset, ultra realistic, dramatic lighting..."
        className="
          min-h-[220px]
          resize-none
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/50
          p-5
          text-sm
          leading-7
          text-white
          outline-none
          transition
          placeholder:text-zinc-600
          focus:border-white
        "
      />

      <div className="space-y-2 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">

        <p className="text-sm text-zinc-300">
          💡 Write a detailed prompt to obtain better AI video results.
        </p>

        <p className="text-xs text-zinc-500">
          • Maximum 1,500 characters.
        </p>

        <p className="text-xs text-zinc-500">
          • Each generation consumes 1 AI Video.
        </p>

        <p className="text-xs text-zinc-500">
          • Generated videos are up to 5 seconds long.
        </p>

        <p className="text-xs font-medium text-yellow-400">
          ⚠️ Click <strong>Generate Video</strong> only once. Multiple clicks may interrupt the generation process.
        </p>

      </div>

    </div>
  );
}