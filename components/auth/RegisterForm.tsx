"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import { signUp } from "@/lib/auth";

export default function RegisterForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!acceptedTerms) {
      setError(
        "You must accept the Terms of Service and Privacy Policy."
      );
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password);

      alert("Account created successfully!");

      router.push("/auth/login");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

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


      <label className="flex items-start gap-3 text-sm text-zinc-400">

        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="mt-1"
        />

        <span>
          I agree to the{" "}
          <Link
            href="/terms"
            className="text-white hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-white hover:underline"
          >
            Privacy Policy
          </Link>.
        </span>

      </label>


      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}


      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create account"}
      </button>


      <p className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-white hover:underline"
        >
          Sign in
        </Link>
      </p>

    </form>
  );
}