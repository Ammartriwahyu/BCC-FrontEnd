"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/userStore";

export default function LoginForm() {
  const router = useRouter();
  const { updateUser } = useUserStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    updateUser({
      username: username,
      name: username,
      password: password,
    });

    router.push("/home");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold">RumahBaca</h1>
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
        <Input
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
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
          required
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
      <Button type="submit" variant="cta" className="w-full">
        Login
      </Button>

      {/* REGISTER */}
      <p className="text-center text-sm">
        Belum punya akun?{" "}
        <Link href="/register" className="font-semibold">
          Register
        </Link>
      </p>
    </form>
  );
}