import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold">ReadWrite</h1>
      </div>

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

      {/* PASSWORD */}
      <div className="space-y-2">
        <label className="font-medium">Password</label>
        <Input type="password" placeholder="Masukkan password" />
      </div>

      {/* REMEMBER */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Checkbox />
          <span>Ingat saya</span>
        </div>

        <span className="text-gray-500 cursor-pointer">
          Lupa password?
        </span>
      </div>

      {/* BUTTON */}
      <Button variant="cta" className="w-full">
        Login
      </Button>

      {/* REGISTER */}
      <p className="text-center text-sm">
        Belum punya akun?{" "}
        <Link href="/register" className="font-semibold">
          Register
        </Link>
      </p>

    </div>
  );
}