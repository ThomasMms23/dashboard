"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 border rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Connexion</h1>
        <p className="mb-8">Connectez-vous pour accéder à votre dashboard.</p>
        <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
          Se connecter avec Google
        </Button>
      </div>
    </div>
  );
}
