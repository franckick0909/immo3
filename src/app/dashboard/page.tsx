"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "@/lib/auth-client";
import { Home, LogOut, Settings, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Vous devez être connecté pour accéder à cette page");
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!session) {
    return null; // Le useEffect redirigera l'utilisateur
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Connecté en tant que {session.user.name}
          </span>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Retour au site
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profil</CardTitle>
            <CardDescription>Informations de votre compte</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    className="h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                    priority
                  />
                ) : (
                  <User className="h-6 w-6 text-orange-500" />
                )}
              </div>
              <div>
                <p className="font-medium">{session.user.name}</p>
                <p className="text-sm text-gray-500">{session.user.email}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/profile">
                <Settings className="h-4 w-4 mr-2" />
                Modifier le profil
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Mes favoris</CardTitle>
            <CardDescription>Biens immobiliers sauvegardés</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">
              Aucun bien favori pour le moment
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/properties">
                <Home className="h-4 w-4 mr-2" />
                Découvrir des biens
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Mes recherches</CardTitle>
            <CardDescription>Recherches sauvegardées</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">
              Aucune recherche sauvegardée
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/properties">
                <Home className="h-4 w-4 mr-2" />
                Nouvelle recherche
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Vos dernières actions sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <UserPlus className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium">Création de compte</p>
                  <p className="text-sm text-gray-500">
                    {new Date(session.user.createdAt).toLocaleDateString(
                      "fr-FR",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <LogOut className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium">Dernière connexion</p>
                  <p className="text-sm text-gray-500">
                    {new Date(session.user.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistiques</CardTitle>
            <CardDescription>Aperçu de votre activité</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Visites de profils</span>
                <span className="text-sm font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Recherches effectuées
                </span>
                <span className="text-sm font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Biens consultés</span>
                <span className="text-sm font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Messages envoyés</span>
                <span className="text-sm font-medium">0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
