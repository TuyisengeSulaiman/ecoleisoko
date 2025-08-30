import { getAllEnrollmentRegistrations } from "@/actions/enrollment";
import { RegistrationsList } from "@/components/registrations-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, FileText } from "lucide-react";

export default async function RegistrationsPage() {
  const result = await getAllEnrollmentRegistrations();

  if (!result.success) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Erreur: {result.error}</p>
      </div>
    );
  }

  const registrations = result.data || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inscriptions 2025-2026</h1>
          <p className="text-gray-600">
            {registrations.length} inscription{registrations.length !== 1 ? 's' : ''} enregistrée{registrations.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exporter CSV
          </Button>
          <Link href="/fiche-inscription">
            <Button size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Nouvelle inscription
            </Button>
          </Link>
        </div>
      </div>

      <RegistrationsList registrations={registrations} />
    </div>
  );
}