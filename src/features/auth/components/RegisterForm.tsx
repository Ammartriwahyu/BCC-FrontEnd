"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { register, login } from "@/features/auth/api/mutation";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";

export default function RegisterForm() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    console.log("🔥 CLICK REGISTER");
    console.log({ email, username, name, password });
    try {
      setLoading(true);

      await register({
        email,
        username,
        password,
        name,
      });

      const res = await login({
        email,
        password,
      });

      setUser(res.user);

      router.push("/home");
    } catch (err: any) {
      alert(err.message || "Register gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">RumahBaca</h1>

      <div>
        <h2 className="text-3xl font-bold">Selamat Datang!</h2>
        <p className="text-gray-600">
          Masuk dan lanjutkan petualanganmu di dunia buku.
        </p>
      </div>

      {/* NAME */}
      <div className="space-y-2">
        <label className="font-medium">Nama</label>
        <Input
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* USERNAME */}
      <div className="space-y-2">
        <label className="font-medium">Username</label>
        <Input
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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

      <p className="text-xs text-gray-500">
        Dengan mendaftar, kamu menyetujui Terms & Conditions serta kebijakan penggunaan platform ini.
      </p>

      <Button
        variant="cta"
        className="w-full"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? "Loading..." : "Register"}
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