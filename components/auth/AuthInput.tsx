interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthInput({
  label,
  ...props
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        {...props}
        className="
          rounded-xl
          border
          border-zinc-800
          bg-zinc-950
          px-4
          py-3
          text-white
          outline-none
          transition
          placeholder:text-zinc-600
          focus:border-white
        "
      />

    </div>
  );
}