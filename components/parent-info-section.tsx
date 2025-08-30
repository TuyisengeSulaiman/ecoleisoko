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
import { EnrollmentFormData, legalGuardianOptions, maritalStatusOptions } from "@/lib/validations";

interface ParentInfoSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function ParentInfoSection({ form }: ParentInfoSectionProps) {
  return (
    <div className="space-y-8">
      {/* Legal Guardian Selection */}
      <FormField
        control={form.control}
        name="parents.legalGuardian"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qui a la charge juridique de l'élève? *</FormLabel>
            <FormControl>
              <div className="space-y-2">
                {legalGuardianOptions.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={() => field.onChange(option.value)}
                      className="w-4 h-4"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Mother Information */}
      <div className="bg-pink-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Mère</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            control={form.control}
            name="parents.motherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NOM</FormLabel>
                <FormControl>
                  <Input placeholder="Nom de famille" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parents.motherFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4">
          <FormField
            control={form.control}
            name="parents.motherMaritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Situation familiale</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-4">
                    {maritalStatusOptions.mother.map((status) => (
                      <label key={status.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={status.value}
                          checked={field.value === status.value}
                          onChange={() => field.onChange(status.value)}
                          className="w-4 h-4"
                        />
                        <span>{status.label}</span>
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4">
          <FormField
            control={form.control}
            name="parents.motherAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse (si différente de celle de l'élève)</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full min-h-[60px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Adresse complète..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="parents.motherProfession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Input placeholder="Profession" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parents.motherPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="+250 xxx xxx xxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parents.motherEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail (EN MAJUSCULES SVP)</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="EMAIL@EXEMPLE.COM"
                    {...field}
                    className="uppercase"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Father Information */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Père</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            control={form.control}
            name="parents.fatherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NOM</FormLabel>
                <FormControl>
                  <Input placeholder="Nom de famille" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parents.fatherFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4">
          <FormField
            control={form.control}
            name="parents.fatherMaritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Situation familiale</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-4">
                    {maritalStatusOptions.father.map((status) => (
                      <label key={status.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={status.value}
                          checked={field.value === status.value}
                          onChange={() => field.onChange(status.value)}
                          className="w-4 h-4"
                        />
                        <span>{status.label}</span>
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4">
          <FormField
            control={form.control}
            name="parents.fatherAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse (si différente de celle de l'élève)</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full min-h-[60px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Adresse complète..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="parents.fatherProfession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Input placeholder="Profession" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parents.fatherPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="+250 xxx xxx xxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="parents.fatherEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail (EN MAJUSCULES SVP)</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="EMAIL@EXEMPLE.COM"
                    {...field}
                    className="uppercase"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Important:</strong> Au moins un email parent est requis pour la communication avec l'école.
        </p>
      </div>
    </div>
  );
}