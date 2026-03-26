import AuthLayout from "@/features/auth/AuthLayout";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      illustration={
        <div className="w-[350px] h-[350px] bg-white/20 rounded-xl">
          {/*buat gambar ilustrasi login */}
        </div>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}