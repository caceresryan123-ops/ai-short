"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import { signIn } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signIn(email, password);

      router.refresh();
      router.replace("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <AuthInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthInput
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-white
          py-3
          font-semibold
          text-black
          transition
          hover:bg-zinc-200
          disabled:opacity-50
        "
      >
        {loading
          ? "Signing in..."
          : "Continue"}
      </button>

      <p className="text-center text-sm text-zinc-400">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="text-white hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}