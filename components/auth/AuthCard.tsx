interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}