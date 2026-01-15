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
import { EnrollmentFormData } from "@/lib/validations";

interface AuthorizationSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

export function AuthorizationSection({ form }: AuthorizationSectionProps) {
  return (
    <div className="space-y-8">
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-6">Autorisations</h3>
        
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="authorizations.contactSharingAuthorized"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="w-5 h-5 mt-1"
                    />
                    <div>
                      <FormLabel className="text-base font-normal leading-relaxed">
                        J'accepte de communiquer mon adresse et mon numéro de téléphone à autres parents de l'école
                      </FormLabel>
                      <p className="text-sm text-gray-600 mt-1">
                        Cette autorisation permet aux autres familles de l'école de vous contacter pour des activités ou sorties communes.
                      </p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authorizations.imageUsageAuthorized"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="w-5 h-5 mt-1"
                    />
                    <div>
                      <FormLabel className="text-base font-normal leading-relaxed">
                        J'autorise l'Ecole Internationale Isoko la source à utiliser des images où on reconnaît mon enfant pour des supports de communication
                      </FormLabel>
                      <p className="text-sm text-gray-600 mt-1">
                        (journal de l'école, publication, reportage télévisé, site Internet, etc.)
                      </p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authorizations.rulesAccepted"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="w-5 h-5 mt-1"
                      required
                    />
                    <div>
                      <FormLabel className="text-base font-normal leading-relaxed">
                        J'ai pris connaissance des différentes valeurs et Règlements d'Ordre Intérieur de l'école et j'y adhère en marquant mon accord *
                      </FormLabel>
                      <p className="text-sm text-red-600 mt-1">
                        Cette acceptation est obligatoire pour finaliser l'inscription.
                      </p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-medium mb-4">Informations de paiement</h4>
        
        <FormField
          control={form.control}
          name="paymentReference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Référence de paiement (optionnel)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Référence du virement des frais d'inscription"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <p className="text-sm text-blue-800 mt-2">
                Si vous avez déjà payé les frais d'inscription (50 USD), indiquez la référence de votre virement.
              </p>
            </FormItem>
          )}
        />

        <div className="mt-6 p-4 bg-white rounded border">
          <h5 className="font-medium mb-3">Frais d'inscription</h5>
          <p className="text-sm text-gray-700 mb-2">
            Les frais d'inscription s'élèvent à <strong>50 $ ou en FRW au taux du jour</strong> et sont à verser sur le compte de l'école, au choix:
          </p>
          
          <div className="bg-gray-50 p-3 rounded text-sm">
            <p><strong>LEOTAURUS UNIVERS LTD</strong></p>
            <p><strong>FRW:</strong> 10014-4936099 / BKFRW - IBAN: RW 91040100144936099646</p>
            <p><strong>USD:</strong> 10014-4936927 / BKUSD - IBAN: RW 69040100144936927840</p>
            <p><strong>SWIFT:</strong> BKIGRWRW</p>
            <p><strong>Adresse de la banque:</strong> Banque de Kigali - Av du commerce 63 – Kgl RW</p>
          </div>
          
          <p className="text-sm text-gray-700 mt-3">
            <strong>En communication:</strong> INSCRIPTION + Nom(s) de(s) l'enfant(s)
          </p>
          
          <div className="mt-4 p-3 bg-yellow-50 rounded">
            <h6 className="font-medium mb-2">Frais de minerval</h6>
            <p className="text-sm text-gray-700">
              Les frais de minerval s'élèvent à <strong>220 USD/mois</strong> ou <strong>500 USD/mois</strong> si les frais sont pris en charge par une ONG.
            </p>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-medium mb-4">Signature et validation</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom prénom du signataire *
            </label>
            <Input
              placeholder="Nom et prénom du parent/tuteur"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lien de famille avec l'enfant *
            </label>
            <Input
              placeholder="ex: Père, Mère, Tuteur légal"
              required
            />
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          En soumettant ce formulaire, vous certifiez que toutes les informations fournies sont exactes et complètes. 
          La signature électronique a la même valeur légale qu'une signature manuscrite.
        </p>
        
        <p className="text-xs text-gray-500 mt-2">
          Date de soumission: {new Date().toLocaleDateString('fr-FR')}
        </p>
      </div>

      {/* Age/Grade Correspondence */}
      <div className="bg-purple-50 p-4 rounded-lg">
        <h5 className="font-medium mb-3">Correspondance année de naissance/classe</h5>
        <p className="text-sm text-purple-800 mb-2">
          La Communauté Française de Belgique prévoit pour l'année scolaire que:
        </p>
        <div className="text-sm text-purple-700 space-y-1">
          <p>• Les enfants de <strong>2 ans</strong> au début de l'année scolaire → <strong>Pré-M/PPS</strong></p>
          <p>• Les enfants de <strong>3 ans</strong> au début de l'année scolaire → <strong>M 1/PS</strong></p>
          <p>• Les enfants de <strong>4 ans</strong> au début de l'année scolaire → <strong>M 2/MS</strong></p>
          <p>• Les enfants de <strong>5 ans</strong> au début de l'année scolaire → <strong>M 3/GS</strong></p>
          <p>• Les enfants de <strong>6 ans</strong> au début de l'année scolaire → <strong>P 1/CP</strong></p>
        </div>
      </div>

      {/* Catering Service */}
      <div className="bg-orange-50 p-4 rounded-lg">
        <h5 className="font-medium mb-2">Service catering</h5>
        <p className="text-sm text-orange-800">
          <strong>Contact:</strong> 0789-33.96.72 (François Touré) – Le colibri
        </p>
      </div>
    </div>
  );
}