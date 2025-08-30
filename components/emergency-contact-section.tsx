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

interface EmergencyContactSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function EmergencyContactSection({ form }: EmergencyContactSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "emergencyContacts"
  });

  const addContact = () => {
    append({
      name: "",
      firstName: "",
      relationship: "",
      profession: "",
      phone: "",
      emergencyContact: false,
      pickupAuthorized: false
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Personnes à appeler en cas d'urgence</h3>
          <p className="text-sm text-gray-600">et/ou autorisées à prendre l'élève à la sortie</p>
        </div>
        <Button type="button" onClick={addContact} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un contact
        </Button>
      </div>

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">Contact {index + 1}</h4>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nom de famille"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.firstName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Prénom"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.relationship`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lien avec l'élève *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: Grand-mère, Oncle, Ami de la famille..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.profession`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Profession"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4">
              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.phone`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+250 xxx xxx xxx"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.emergencyContact`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4"
                        />
                        <FormLabel className="text-sm font-normal">
                          À appeler en cas d'urgence
                        </FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`emergencyContacts.${index}.pickupAuthorized`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4"
                        />
                        <FormLabel className="text-sm font-normal">
                          Autorisé à prendre l'élève
                        </FormLabel>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-sm text-red-800">
          <strong>Important:</strong> Au moins un contact d'urgence est obligatoire. Assurez-vous que les numéros de téléphone sont corrects et à jour.
        </p>
      </div>
    </div>
  );
}