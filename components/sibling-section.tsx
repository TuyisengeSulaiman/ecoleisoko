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

interface SiblingSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function SiblingSection({ form }: SiblingSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "siblings"
  });

  const addSibling = () => {
    append({
      name: "",
      firstName: "",
      birthDate: undefined,
      currentClass: "",
      currentSchool: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Fratrie (frères et sœurs)</h3>
        <Button type="button" onClick={addSibling} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un frère/une sœur
        </Button>
      </div>

      {fields.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Aucun frère ou sœur ajouté</p>
          <p className="text-sm">Cliquez sur "Ajouter" pour ajouter des informations sur la fratrie</p>
        </div>
      )}

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium">Frère/Sœur {index + 1}</h4>
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="outline"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name={`siblings.${index}.name`}
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
                name={`siblings.${index}.firstName`}
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

              <FormField
                control={form.control}
                name={`siblings.${index}.birthDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date de naissance *</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        value={field.value ? field.value.toISOString().split('T')[0] : ''}
                        onChange={(e) => {
                          const date = e.target.value ? new Date(e.target.value) : undefined;
                          field.onChange(date);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <FormField
                control={form.control}
                name={`siblings.${index}.currentClass`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Classe fréquentée</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: P3, M2, S1..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`siblings.${index}.currentSchool`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>École</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nom de l'école"
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

      {fields.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Information:</strong> Les informations sur la fratrie aident l'école à mieux comprendre le contexte familial de l'élève.
          </p>
        </div>
      )}
    </div>
  );
}