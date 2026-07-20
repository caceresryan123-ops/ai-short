import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6">
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to continue generating AI videos."
      >
        <LoginForm />
      </AuthCard>
    </main>
  );
}