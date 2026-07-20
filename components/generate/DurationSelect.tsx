"use client";

const durations = [
  5,
  10,
  15,
  30,
];

interface DurationSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export default function DurationSelect({
  value,
  onChange,
}: DurationSelectProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-white">
        Duration
      </label>

      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900/50
          px-4
          py-3
          text-sm
          text-white
          outline-none
          focus:border-zinc-600
        "
      >
        {durations.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item} seconds
          </option>
        ))}
      </select>
    </div>
  );
}