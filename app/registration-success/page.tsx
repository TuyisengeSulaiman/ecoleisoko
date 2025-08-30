import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, Download, Phone, Mail } from "lucide-react";

interface PageProps {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function RegistrationSuccessPage({ searchParams }: PageProps) {
  const { id } = await searchParams
  const registrationId = id;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">
            Inscription soumise avec succès !
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {registrationId && (
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-sm text-blue-800">Numéro de dossier</p>
              <p className="text-2xl font-bold text-blue-900">#{registrationId}</p>
              <p className="text-xs text-blue-600 mt-1">
                Conservez ce numéro pour le suivi de votre dossier
              </p>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Prochaines étapes :</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">1</span>
                </div>
                <div>
                  <p className="font-medium">Vérification du dossier</p>
                  <p className="text-sm text-gray-600">
                    L'école vérifiera votre dossier dans les 3-5 jours ouvrables.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">2</span>
                </div>
                <div>
                  <p className="font-medium">Paiement des frais d'inscription</p>
                  <p className="text-sm text-gray-600">
                    Si ce n'est pas encore fait, effectuez le paiement des frais d'inscription (50 USD).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">3</span>
                </div>
                <div>
                  <p className="font-medium">Documents complémentaires</p>
                  <p className="text-sm text-gray-600">
                    Apportez les documents originaux lors de votre visite à l'école.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">4</span>
                </div>
                <div>
                  <p className="font-medium">Confirmation d'inscription</p>
                  <p className="text-sm text-gray-600">
                    Vous recevrez une confirmation officielle par email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Documents requis :</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Photo passeport de l'enfant</li>
              <li>• Photocopie de la carte d'identité ou passeport de l'enfant</li>
              <li>• Photocopie du visa de résidence (si applicable)</li>
              <li>• Attestation de fréquentation scolaire (nouveaux venus)</li>
              <li>• Bulletin de la classe précédente (nouveaux venus)</li>
              <li>• Dernière page du ROI signée</li>
            </ul>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Informations de paiement :</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>LEOTAURUS UNIVERS LTD</strong></p>
              <p><strong>FRW:</strong> 10014-4936099 / BKFRW</p>
              <p><strong>USD:</strong> 10014-4936927 / BKUSD</p>
              <p><strong>SWIFT:</strong> BKIGRWRW</p>
              <p><strong>Communication:</strong> INSCRIPTION + Nom de l'enfant</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-800 mb-3">Contact :</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm">isokolasource@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm">0783552105</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/" className="flex-1">
              <Button variant="outline" className="w-full">
                Retour à l'accueil
              </Button>
            </Link>
            <Button 
              onClick={() => window.print()} 
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Imprimer cette page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}