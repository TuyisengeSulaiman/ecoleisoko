"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { EnrollmentFormData, gradeOptions } from "@/lib/validations";

interface StudentInfoSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function StudentInfoSection({ form }: StudentInfoSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="student.studentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NOM *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nom de famille"
                  {...field}
                  className="uppercase"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="student.studentFirstNames"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom(s) *</FormLabel>
              <FormControl>
                <Input placeholder="Prénom(s)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          control={form.control}
          name="student.studentGender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sexe *</FormLabel>
              <FormControl>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="M"
                      checked={field.value === "M"}
                      onChange={() => field.onChange("M")}
                      className="w-4 h-4"
                    />
                    <span>M</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="F"
                      checked={field.value === "F"}
                      onChange={() => field.onChange("F")}
                      className="w-4 h-4"
                    />
                    <span>F</span>
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="student.studentBirthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Né(e) le *</FormLabel>
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

        <FormField
          control={form.control}
          name="student.studentBirthPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lieu de naissance *</FormLabel>
              <FormControl>
                <Input placeholder="Ville, Pays" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="student.studentNationality1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationalité 1 *</FormLabel>
              <FormControl>
                <Input placeholder="Nationalité principale" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="student.studentNationality2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationalité 2</FormLabel>
              <FormControl>
                <Input placeholder="Nationalité secondaire (optionnel)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="student.studentAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Adresse actuelle de l'élève (en majuscule) *</FormLabel>
            <FormControl>
              <textarea
                className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                placeholder="Adresse complète..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="student.enrollmentGrade"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Inscription en (Entourer le niveau) *</FormLabel>
            <FormControl>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Maternelle:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {gradeOptions.slice(0, 4).map((grade) => (
                      <label key={grade.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={grade.value}
                          checked={field.value === grade.value}
                          onChange={() => field.onChange(grade.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{grade.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Primaire:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {gradeOptions.slice(4, 10).map((grade) => (
                      <label key={grade.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={grade.value}
                          checked={field.value === grade.value}
                          onChange={() => field.onChange(grade.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{grade.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Secondaire:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {gradeOptions.slice(10).map((grade) => (
                      <label key={grade.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={grade.value}
                          checked={field.value === grade.value}
                          onChange={() => field.onChange(grade.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{grade.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Veuillez ajouter une photo passeport de l'enfant dans la section documents.
        </p>
      </div>
    </div>
  );
}