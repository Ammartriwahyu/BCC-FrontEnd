"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useUserStore } from "@/lib/userStore";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { updateUser } = useUserStore();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    updateUser({
      username: username,
      name: name,
      email: email,
    });

    router.push("/home");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
      className="space-y-6"
    >
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
        <Input
          placeholder="Masukkan username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      {/* NAME */}
      <div className="space-y-2">
        <label className="font-medium">Name</label>
        <Input
          placeholder="Masukkan nama panggilan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>


      {/* EMAIL */}
      <div className="space-y-2">
        <label className="font-medium">Email</label>
        <Input
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      <p className="text-xs text-gray-500">
        Dengan mendaftar, kamu menyetujui Terms & Conditions serta kebijakan penggunaan platform ini.
      </p>

      <Button type="submit" variant="cta" className="w-full">
        Register
      </Button>

      <p className="text-center text-sm">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-semibold">
          Login
        </Link>
      </p>
    </form>
  );
}