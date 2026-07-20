"use client";

import { useState } from "react";


const ratios = [
  "9:16 Vertical",
];


export default function AspectRatioSelect() {

  const [ratio, setRatio] = useState("9:16 Vertical");


  return (
    <div className="flex flex-col gap-3">

      <label className="text-sm font-medium text-white">
        Aspect Ratio
      </label>


      <select
        value={ratio}
        onChange={(e) => setRatio(e.target.value)}
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

        {ratios.map((item) => (
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