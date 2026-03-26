import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">ReadWrite</h1>

      <div>
        <h2 className="text-3xl font-bold">Selamat Datang!</h2>
        <p className="text-gray-600">
          Masuk dan lanjutkan petualanganmu di dunia buku.
        </p>
      </div>

      {/* USERNAME */}
      <div className="space-y-2">
        <label className="font-medium">Username</label>
        <Input placeholder="Masukkan username" />
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <label className="font-medium">Email</label>
        <Input placeholder="Masukkan email" />
      </div>

      {/* PASSWORD */}
      <div className="space-y-2">
        <label className="font-medium">Password</label>
        <Input type="password" placeholder="Masukkan password" />
      </div>

      <p className="text-xs text-gray-500">
        Dengan mendaftar, kamu menyetujui Terms & Conditions serta kebijakan penggunaan platform ini.
      </p>

      <Button variant="cta" className="w-full">
        Register
      </Button>

      <p className="text-center text-sm">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-semibold">
          Login
        </Link>
      </p>

    </div>
  );
}