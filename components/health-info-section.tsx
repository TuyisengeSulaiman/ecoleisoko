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
import { EnrollmentFormData, dietaryOptions } from "@/lib/validations";

interface HealthInfoSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function HealthInfoSection({ form }: HealthInfoSectionProps) {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Fiche sanitaire et de renseignements</h3>
        <p className="text-sm text-blue-800 mb-6">
          Ce document sera conservé dans le dossier de l'élève et sa copie sera remise au titulaire de votre enfant
        </p>

        {/* Vaccination Status */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Les informations médicales:</h4>
          <p className="text-sm text-red-600 mb-3">(Les vaccinations à jour sont obligatoires.)</p>
          
          <FormField
            control={form.control}
            name="healthInfo.vaccinationUpToDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>L'enfant est-il à jour de sa vaccination? *</FormLabel>
                <FormControl>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                        className="w-4 h-4"
                      />
                      <span>Oui</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
                        className="w-4 h-4"
                      />
                      <span>Non</span>
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Allergies */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">L'enfant est-il allergique?</h4>
          <p className="text-sm text-gray-600 mb-3">*En cas d'accident et s'il faut amener l'enfant chez le docteur.</p>
          
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="healthInfo.medicationAllergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>À un médicament</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Si oui, lequel?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="healthInfo.foodAllergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>À un aliment</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Si oui, lequel?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="healthInfo.otherAllergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>À autre chose</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Si oui, quoi?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Dietary Requirements */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Régime alimentaire</h4>
          
          <FormField
            control={form.control}
            name="healthInfo.dietaryRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Régime spécial</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    {dietaryOptions.map((option) => (
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
        </div>

        {/* Chronic Conditions */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Les maladies</h4>
          <p className="text-sm text-gray-600 mb-3">L'enfant est-il sujet à des maladies chroniques:</p>
          
          <FormField
            control={form.control}
            name="healthInfo.chronicConditions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Angine, Asthme, Épilepsie, autres difficultés de santé éventuelles</FormLabel>
                <FormControl>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Indiquez les conditions médicales connues..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Learning Difficulties */}
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h4 className="font-medium mb-4">Autres questions</h4>
        
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="healthInfo.learningDifficulties"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre enfant a-t-il des difficultés particulières?</FormLabel>
                <p className="text-sm text-gray-600 mb-2">
                  Dyslexie, Dyscalculie, Hyperactivité, Trouble de l'attention, Autre...
                </p>
                <FormControl>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Précisez les difficultés d'apprentissage connues..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="healthInfo.specialistFollowUp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>A-t-il déjà été suivi par un logopède ou un spécialiste?</FormLabel>
                <p className="text-sm text-gray-600 mb-2">
                  Pouvez-vous nous donner quelques précisions utiles afin d'encadrer au mieux votre enfant?
                </p>
                <FormControl>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Détails sur le suivi par des spécialistes..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="healthInfo.recentDifficultEvents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre enfant a-t-il vécu des évènements difficiles dans sa vie?</FormLabel>
                <p className="text-sm text-gray-600 mb-2">
                  En particulier récemment (par exemple: deuil, séparation des parents, déménagement)
                </p>
                <FormControl>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Événements difficiles récents..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="healthInfo.counselorSupport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>A-t-il pu bénéficier de l'aide d'un(e) conseiller(ère) d'éducation?</FormLabel>
                <p className="text-sm text-gray-600 mb-2">
                  Ou assistant(e) sociale ou psychologue pour cela, ou pour d'autres raisons?
                </p>
                <FormControl>
                  <textarea
                    className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Suivi psychologique ou social..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}