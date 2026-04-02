"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/features/auth/api/mutation";
import { useAuthStore } from "@/lib/auth-store";

export default function LoginForm() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("CLICK LOGIN");
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);
    try {
      setLoading(true);

      const res = await login({
        email,
        password,
      });

      setUser(res.user);

      router.push("/home");
    } catch (err: any) {
      alert(err.message || "Login gagal");
    } finally {
      setLoading(false);
    }
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

      {/* EMAIL */}
      <div className="space-y-2">
        <label className="font-medium">Email</label>
        <Input
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* PASSWORD */}
      <div className="space-y-2">
        <label className="font-medium">Password</label>
        <Input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
      <Button
        variant="cta"
        className="w-full"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}
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