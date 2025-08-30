import { getEnrollmentRegistrationById } from "@/actions/enrollment";
import { RegistrationDetail } from "@/components/registration-detail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function RegistrationDetailPage({ params }: PageProps) {
  const { id } = await params
  const result = await getEnrollmentRegistrationById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  const { registration, previousSchooling, siblings, emergencyContacts, documents } = result.data;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/admin/registrations">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Inscription #{registration.id}
            </h1>
            <p className="text-gray-600">
              {registration.studentName} {registration.studentFirstNames}
            </p>
          </div>
        </div>
      </div>

      <RegistrationDetail
        registration={registration}
        previousSchooling={previousSchooling}
        siblings={siblings}
        emergencyContacts={emergencyContacts}
        documents={documents}
      />
    </div>
  );
}