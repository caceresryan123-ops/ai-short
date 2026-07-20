"use client";

import { useState } from "react";


const resolutions = [
  "720p",
];


export default function ResolutionSelect() {

  const [resolution, setResolution] = useState("1080p");


  return (
    <div className="flex flex-col gap-3">

      <label className="text-sm font-medium text-white">
        Resolution
      </label>


      <select
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
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

        {resolutions.map((item) => (
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