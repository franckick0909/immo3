import { createAuthClient } from "better-auth/react";

// Créer le client d'authentification avec la configuration correcte
const client = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
});

// Exporter les méthodes spécifiques pour une utilisation plus simple
export const { signIn, signUp, signOut, useSession } = client;

// Exporter le client pour une utilisation directe si nécessaire
export const authClient = client;
