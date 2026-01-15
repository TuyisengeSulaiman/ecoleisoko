"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Lock, School, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Identifiants invalides. Veuillez réessayer.");
      } else {
        // Check if user is actually logged in and has admin role
        const session = await getSession();
        if(session){
          router.push("/admin/registrations");
        }
      }
    } catch (error) {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-blue-600 rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <School className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Ecole Internationale Isoko la source
          </CardTitle>
          <p className="text-gray-600">Connexion Administrateur</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ecoleisoko.com"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Connexion..."
              ) : (
                <>
                  <Lock className="h-4 w-4 mr-2" />
                  Se connecter
                </>
              )}
            </Button>
          </form>
          
          {/* <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="text-sm font-semibold text-yellow-800 mb-2">
              Identifiants par défaut :
            </h4>
            <p className="text-xs text-yellow-700">
              <strong>Email:</strong> admin@ecoleisoko.com<br />
              <strong>Mot de passe:</strong> EcoleIsoko2025!
            </p>
            <p className="text-xs text-yellow-600 mt-2">
              ⚠️ Changez ces identifiants en production
            </p>
          </div> */}
          
          <div className="mt-4 text-center">
            <a 
              href="/" 
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← Retour au site
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}