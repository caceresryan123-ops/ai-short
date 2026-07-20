import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function AuthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950">
      <AuthCard
        title="Welcome back"
        subtitle="Login to your AI Short account"
      >
        <LoginForm />
      </AuthCard>
    </main>
  );
}