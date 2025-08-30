"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { updateRegistrationStatus, markPaymentReceived } from "@/actions/enrollment";
import { toast } from "sonner";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertCircle, 
  User, 
  School, 
  Users, 
  Phone, 
  Heart, 
  Shield,
  CreditCard,
  Edit
} from "lucide-react";

interface RegistrationDetailProps {
  registration: any;
  previousSchooling: any[];
  siblings: any[];
  emergencyContacts: any[];
  documents: any[];
}

const statusConfig = {
  pending: { label: "En attente", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  approved: { label: "Approuvée", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejetée", color: "bg-red-100 text-red-800", icon: XCircle },
  incomplete: { label: "Incomplète", color: "bg-orange-100 text-orange-800", icon: AlertCircle }
};

export function RegistrationDetail({ 
  registration, 
  previousSchooling, 
  siblings, 
  emergencyContacts,
  documents 
}: RegistrationDetailProps) {
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isUpdatingPayment, setIsUpdatingPayment] = useState(false);
  const [paymentReference, setPaymentReference] = useState(registration.paymentReference || "");

  const handleStatusUpdate = async (newStatus: string) => {
    setIsUpdatingStatus(true);
    try {
      const result = await updateRegistrationStatus(registration.id.toString(), newStatus);
      if (result.success) {
        toast.success("Statut mis à jour avec succès");
        window.location.reload();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Erreur lors de la mise à jour");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handlePaymentUpdate = async () => {
    setIsUpdatingPayment(true);
    try {
      const result = await markPaymentReceived(registration.id.toString(), paymentReference);
      if (result.success) {
        toast.success("Paiement confirmé avec succès");
        window.location.reload();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Erreur lors de la confirmation du paiement");
    } finally {
      setIsUpdatingPayment(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const IconComponent = config.icon;

    return (
      <Badge className={`${config.color} border-0`}>
        <IconComponent className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Status and Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Statut et Actions</span>
            {getStatusBadge(registration.status)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Changer le statut
            </label>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant={registration.status === 'approved' ? 'default' : 'outline'}
                onClick={() => handleStatusUpdate('approved')}
                disabled={isUpdatingStatus}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Approuver
              </Button>
              <Button
                size="sm"
                variant={registration.status === 'rejected' ? 'destructive' : 'outline'}
                onClick={() => handleStatusUpdate('rejected')}
                disabled={isUpdatingStatus}
              >
                <XCircle className="w-4 h-4 mr-1" />
                Rejeter
              </Button>
              <Button
                size="sm"
                variant={registration.status === 'incomplete' ? 'default' : 'outline'}
                onClick={() => handleStatusUpdate('incomplete')}
                disabled={isUpdatingStatus}
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                Marquer incomplet
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gestion du paiement
            </label>
            <div className="flex items-center space-x-2">
              {registration.inscriptionFeesPaid ? (
                <Badge className="bg-green-100 text-green-800 border-0">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Frais d'inscription payés
                </Badge>
              ) : (
                <>
                  <Input
                    placeholder="Référence de paiement"
                    value={paymentReference}
                    onChange={(e) => setPaymentReference(e.target.value)}
                    className="max-w-xs"
                  />
                  <Button
                    size="sm"
                    onClick={handlePaymentUpdate}
                    disabled={isUpdatingPayment}
                  >
                    <CreditCard className="w-4 h-4 mr-1" />
                    Confirmer paiement
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Student Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            Informations sur l'élève
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <p className="text-sm text-gray-900">{registration.studentName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Prénom(s)</label>
              <p className="text-sm text-gray-900">{registration.studentFirstNames}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sexe</label>
              <p className="text-sm text-gray-900">{registration.studentGender}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
              <p className="text-sm text-gray-900">{formatDate(registration.studentBirthDate)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lieu de naissance</label>
              <p className="text-sm text-gray-900">{registration.studentBirthPlace}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Niveau d'inscription</label>
              <p className="text-sm text-gray-900">{registration.enrollmentGrade}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Nationalité(s)</label>
              <p className="text-sm text-gray-900">
                {registration.studentNationality1}
                {registration.studentNationality2 && `, ${registration.studentNationality2}`}
              </p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Adresse</label>
              <p className="text-sm text-gray-900">{registration.studentAddress}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Previous Schooling */}
      {previousSchooling.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <School className="w-5 h-5 mr-2" />
              Scolarité antérieure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previousSchooling.map((school, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Année scolaire</label>
                      <p className="text-sm text-gray-900">{school.academicYear}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Classe</label>
                      <p className="text-sm text-gray-900">{school.classLevel}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">École</label>
                      <p className="text-sm text-gray-900">{school.schoolName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Adresse</label>
                      <p className="text-sm text-gray-900">{school.schoolAddress}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Parent Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Responsables légaux
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Responsable légal</label>
              <p className="text-sm text-gray-900">{registration.legalGuardian}</p>
            </div>
            
            {/* Mother */}
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Mère</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <p className="text-sm text-gray-900">{registration.motherName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <p className="text-sm text-gray-900">{registration.motherFirstName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Situation familiale</label>
                  <p className="text-sm text-gray-900">{registration.motherMaritalStatus}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Profession</label>
                  <p className="text-sm text-gray-900">{registration.motherProfession}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <p className="text-sm text-gray-900">{registration.motherPhone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-sm text-gray-900">{registration.motherEmail}</p>
                </div>
                {registration.motherAddress && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Adresse</label>
                    <p className="text-sm text-gray-900">{registration.motherAddress}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Father */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Père</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <p className="text-sm text-gray-900">{registration.fatherName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <p className="text-sm text-gray-900">{registration.fatherFirstName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Situation familiale</label>
                  <p className="text-sm text-gray-900">{registration.fatherMaritalStatus}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Profession</label>
                  <p className="text-sm text-gray-900">{registration.fatherProfession}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <p className="text-sm text-gray-900">{registration.fatherPhone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-sm text-gray-900">{registration.fatherEmail}</p>
                </div>
                {registration.fatherAddress && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Adresse</label>
                    <p className="text-sm text-gray-900">{registration.fatherAddress}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contacts */}
      {emergencyContacts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contacts d'urgence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nom</label>
                      <p className="text-sm text-gray-900">{contact.name} {contact.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Lien avec l'élève</label>
                      <p className="text-sm text-gray-900">{contact.relationship}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                      <p className="text-sm text-gray-900">{contact.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Profession</label>
                      <p className="text-sm text-gray-900">{contact.profession}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex space-x-4">
                        {contact.emergencyContact && (
                          <Badge className="bg-red-100 text-red-800 border-0">Contact d'urgence</Badge>
                        )}
                        {contact.pickupAuthorized && (
                          <Badge className="bg-green-100 text-green-800 border-0">Autorisé à récupérer</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Health Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Informations de santé
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vaccinations à jour</label>
              <p className="text-sm text-gray-900">
                {registration.vaccinationUpToDate ? "Oui" : "Non"}
              </p>
            </div>
            {registration.medicationAllergies && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Allergies médicamenteuses</label>
                <p className="text-sm text-gray-900">{registration.medicationAllergies}</p>
              </div>
            )}
            {registration.foodAllergies && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Allergies alimentaires</label>
                <p className="text-sm text-gray-900">{registration.foodAllergies}</p>
              </div>
            )}
            {registration.otherAllergies && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Autres allergies</label>
                <p className="text-sm text-gray-900">{registration.otherAllergies}</p>
              </div>
            )}
            {registration.dietaryRequirements && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Régime alimentaire</label>
                <p className="text-sm text-gray-900">{registration.dietaryRequirements}</p>
              </div>
            )}
            {registration.chronicConditions && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Conditions médicales chroniques</label>
                <p className="text-sm text-gray-900">{registration.chronicConditions}</p>
              </div>
            )}
            {registration.learningDifficulties && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Difficultés d'apprentissage</label>
                <p className="text-sm text-gray-900">{registration.learningDifficulties}</p>
              </div>
            )}
            {registration.specialistFollowUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Suivi par un spécialiste</label>
                <p className="text-sm text-gray-900">{registration.specialistFollowUp}</p>
              </div>
            )}
            {registration.recentDifficultEvents && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Événements difficiles récents</label>
                <p className="text-sm text-gray-900">{registration.recentDifficultEvents}</p>
              </div>
            )}
            {registration.counselorSupport && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Suivi psychologique</label>
                <p className="text-sm text-gray-900">{registration.counselorSupport}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Authorizations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Autorisations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              {registration.contactSharingAuthorized ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="text-sm">
                Partage des coordonnées avec autres parents
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {registration.imageUsageAuthorized ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="text-sm">
                Utilisation d'images pour communication
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {registration.rulesAccepted ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="text-sm">
                Règlement de l'école accepté
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents */}
      {documents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Documents téléchargés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((document, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{document.fileName}</p>
                      <p className="text-sm text-gray-600">
                        Type: {document.documentType} | Taille: {document.fileSize ? `${Math.round(document.fileSize / 1024)} KB` : 'N/A'}
                      </p>
                      <p className="text-xs text-gray-500">
                        Téléchargé le: {formatDate(document.uploadDate)}
                      </p>
                    </div>
                    <div>
                      <a 
                        href={document.fileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Voir le fichier
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Siblings */}
      {siblings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Fratrie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {siblings.map((sibling, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nom</label>
                      <p className="text-sm text-gray-900">{sibling.name} {sibling.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
                      <p className="text-sm text-gray-900">{formatDate(sibling.birthDate)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Classe actuelle</label>
                      <p className="text-sm text-gray-900">{sibling.currentClass}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">École actuelle</label>
                      <p className="text-sm text-gray-900">{sibling.currentSchool}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submission Details */}
      <Card>
        <CardHeader>
          <CardTitle>Détails de soumission</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date de soumission</label>
              <p className="text-sm text-gray-900">{formatDate(registration.submissionDate)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Année académique</label>
              <p className="text-sm text-gray-900">{registration.academicYear}</p>
            </div>
            {registration.paymentReference && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Référence de paiement</label>
                <p className="text-sm text-gray-900">{registration.paymentReference}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}