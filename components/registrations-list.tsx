"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Eye, Search, Filter, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

interface Registration {
  id: number;
  submissionDate: Date | null;
  academicYear: string | null;
  status: string | null;
  studentName: string;
  studentFirstNames: string | null;
  enrollmentGrade: string;
  motherEmail: string | null;
  fatherEmail: string | null;
  inscriptionFeesPaid: boolean | null;
  paymentReference: string | null;
}

interface RegistrationsListProps {
  registrations: Registration[];
}

const statusConfig = {
  pending: { label: "En attente", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  approved: { label: "Approuvée", color: "bg-green-100 text-green-800", icon: CheckCircle },
  rejected: { label: "Rejetée", color: "bg-red-100 text-red-800", icon: XCircle },
  incomplete: { label: "Incomplète", color: "bg-orange-100 text-orange-800", icon: AlertCircle }
};

export function RegistrationsList({ registrations }: RegistrationsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [gradeFilter, setGradeFilter] = useState<string>("all");

  const filteredRegistrations = registrations.filter(registration => {
    const matchesSearch = 
      registration.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.studentFirstNames?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.motherEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      registration.fatherEmail?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || registration.status === statusFilter;
    const matchesGrade = gradeFilter === "all" || registration.enrollmentGrade === gradeFilter;

    return matchesSearch && matchesStatus && matchesGrade;
  });

  const getUniqueGrades = () => {
    const grades = registrations.map(r => r.enrollmentGrade).filter(Boolean);
    return [...new Set(grades)].sort();
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string | null) => {
    const statusKey = status || "pending";
    const config = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
    const IconComponent = config.icon;

    return (
      <Badge className={`${config.color} border-0`}>
        <IconComponent className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher par nom, prénom ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Tous les statuts</option>
              <option value="pending">En attente</option>
              <option value="approved">Approuvées</option>
              <option value="rejected">Rejetées</option>
              <option value="incomplete">Incomplètes</option>
            </select>
            
            <select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Tous les niveaux</option>
              {getUniqueGrades().map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Élève
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Niveau
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date soumission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Paiement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRegistrations.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                  {searchTerm || statusFilter !== "all" || gradeFilter !== "all" 
                    ? "Aucune inscription ne correspond aux critères de recherche."
                    : "Aucune inscription enregistrée."}
                </td>
              </tr>
            ) : (
              filteredRegistrations.map((registration) => (
                <tr key={registration.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {registration.studentName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {registration.studentFirstNames}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {registration.enrollmentGrade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {registration.motherEmail || registration.fatherEmail || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(registration.submissionDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(registration.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {registration.inscriptionFeesPaid ? (
                      <Badge className="bg-green-100 text-green-800 border-0">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Payé
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 border-0">
                        <XCircle className="w-3 h-3 mr-1" />
                        Non payé
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/admin/registrations/${registration.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Voir
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      {filteredRegistrations.length > 0 && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-700">
            {filteredRegistrations.length} inscription{filteredRegistrations.length !== 1 ? 's' : ''} affichée{filteredRegistrations.length !== 1 ? 's' : ''} sur {registrations.length} au total
          </p>
        </div>
      )}
    </div>
  );
}