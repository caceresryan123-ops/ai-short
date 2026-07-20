"use client";

const styles = [
  "cinematic",
  "realistic",
  "anime",
  "3d-animation",
  "fantasy",
];


interface Props {
  value: string;
  onChange: (value: string) => void;
}


export default function StyleSelect({
  value,
  onChange
}: Props) {


  return (
    <div className="flex flex-col gap-3">

      <label className="text-sm font-medium text-white">
        Video Style
      </label>


      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

        {styles.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}

      </select>

    </div>
  );
}