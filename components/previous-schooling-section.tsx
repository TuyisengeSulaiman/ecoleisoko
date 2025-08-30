"use client";

import React from "react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { EnrollmentFormData } from "@/lib/validations";

interface PreviousSchoolingSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function PreviousSchoolingSection({ form }: PreviousSchoolingSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "previousSchooling"
  });

  const addSchoolYear = () => {
    append({
      academicYear: "",
      classLevel: "",
      schoolName: "",
      schoolAddress: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Scolarité antérieure</h3>
        <Button type="button" onClick={addSchoolYear} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une année
        </Button>
      </div>

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">Année scolaire {index + 1}</h4>
              {fields.length > 1 && (
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  variant="outline"
                  size="sm"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name={`previousSchooling.${index}.academicYear`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Années scolaires *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: 2024-2025"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`previousSchooling.${index}.classLevel`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Classes *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: M2, P1, S1..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-4">
              <FormField
                control={form.control}
                name={`previousSchooling.${index}.schoolName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de l'école *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nom complet de l'établissement"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-4">
              <FormField
                control={form.control}
                name={`previousSchooling.${index}.schoolAddress`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse de l'école *</FormLabel>
                    <FormControl>
                      <textarea
                        className="w-full min-h-[60px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Adresse complète de l'école..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Documents requis:</strong> Attestation de fréquentation scolaire et bulletin de la classe précédente pour les nouveaux venus.
        </p>
      </div>
    </div>
  );
}