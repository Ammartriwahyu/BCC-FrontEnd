"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    //disini lu masukin logic auth (API)

    // sementara dummy dulu
    router.push("/home");
  };

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
        <label htmlFor="login-username" className="font-medium">
          Username
        </label>
        <Input id="login-username" placeholder="Masukkan username" />
      </div>

      {/* PASSWORD */}
      <div className="space-y-2">
        <label htmlFor="login-password" className="font-medium">
          Password
        </label>
        <Input
          id="login-password"
          type="password"
          placeholder="Masukkan password"
        />
      </div>

      {/* REMEMBER */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Checkbox />
          <span>Ingat saya</span>
        </div>

        <span className="text-gray-500 cursor-pointer">Lupa password?</span>
      </div>

      {/* BUTTON */}
      <Button variant="cta" className="w-full" onClick={handleLogin}>
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
