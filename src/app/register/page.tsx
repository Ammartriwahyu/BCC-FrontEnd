import AuthLayout from "@/features/auth/AuthLayout";
import RegisterForm from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      illustration={
        <div className="w-[350px] h-[350px] bg-white/20 rounded-xl">
          {/*buat gambar ilustrasi register */}
        </div>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}