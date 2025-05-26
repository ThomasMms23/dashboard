// src/app/(dashboard)/dashboard/page.tsx
import { auth } from "@/lib/auth";
// On aura besoin d'un bouton de déconnexion, créons-le ou assurons-nous qu'il existe
import LogoutButton from "@/components/shared/LogoutButton";

// Crée ce composant s'il n'existe pas :
// src/components/shared/LogoutButton.tsx
/*
'use client';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
export default function LogoutButton() {
  return <Button variant="outline" onClick={() => signOut({ callbackUrl: '/' })}>Se déconnecter</Button>;
}
*/

export default async function DashboardPage() {
  const session = await auth(); // Récupère la session côté serveur

  if (!session) {
    // Normalement le middleware devrait gérer ça, mais c'est une sécurité
    return <p>Vous devez être connecté pour voir cette page.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mon Dashboard Vinted</h1>
      <p className="mb-6">
        Bienvenue, {session?.user?.name || "Utilisateur"} !
      </p>
      <p>Cest ici que le dashboard saffichera.</p>
      <div className="mt-8">
        <LogoutButton />
      </div>
    </div>
  );
}
