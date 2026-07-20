"use client";

interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({
  onClick,
}: GenerateButtonProps) {

  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-xl
        bg-white
        py-4
        font-semibold
        text-black
        transition
        hover:bg-zinc-200
      "
    >
      Generate Video
    </button>
  );
}