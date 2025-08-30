"use client";

import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UploadDropzone } from "@/lib/uploadthing";
import { EnrollmentFormData } from "@/lib/validations";
import { 
  Upload, 
  File, 
  Image, 
  Trash2, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Camera
} from "lucide-react";
import { toast } from "sonner";

interface DocumentUploadSectionProps {
  form: UseFormReturn<EnrollmentFormData>;
}

interface UploadedFile {
  key: string;
  name: string;
  size: number;
  url: string;
  type: string;
  documentType: string;
}

export function DocumentUploadSection({ form }: DocumentUploadSectionProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState<{ [key: string]: boolean }>({});

  const handleUploadComplete = (files: any[], documentType: string) => {
    const newFiles = files.map(file => ({
      key: file.key,
      name: file.name,
      size: file.size,
      url: file.url,
      type: file.type,
      documentType
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Update form data
    const currentDocuments = form.getValues("documents") || [];
    const updatedDocuments = [
      ...currentDocuments,
      ...newFiles.map(file => ({
        documentType: file.documentType as any,
        fileName: file.name,
        fileUrl: file.url,
        fileSize: file.size
      }))
    ];
    
    form.setValue("documents", updatedDocuments);
    toast.success(`${files.length} document(s) téléchargé(s) avec succès`);
  };

  const handleUploadError = (error: Error) => {
    toast.error(`Erreur de téléchargement: ${error.message}`);
  };

  const removeFile = (fileKey: string) => {
    setUploadedFiles(prev => prev.filter(file => file.key !== fileKey));
    
    // Update form data
    const currentDocuments = form.getValues("documents") || [];
    const updatedDocuments = currentDocuments.filter(doc => 
      !uploadedFiles.find(file => file.key === fileKey && file.url === doc.fileUrl)
    );
    form.setValue("documents", updatedDocuments);
    
    toast.success("Document supprimé");
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <Image className="w-4 h-4" />;
    if (type === "application/pdf") return <FileText className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const getDocumentTypeLabel = (type: string) => {
    switch (type) {
      case "photo": return "Photo passeport";
      case "identity": return "Pièce d'identité";
      case "records": return "Bulletins scolaires";
      default: return "Document";
    }
  };

  const requiredDocuments = [
    { 
      type: "photo", 
      label: "Photo passeport de l'enfant", 
      description: "Format photo d'identité, fond blanc de préférence",
      required: true,
      endpoint: "studentPhoto" as const
    },
    { 
      type: "identity", 
      label: "Pièce d'identité", 
      description: "Carte d'identité ou passeport de l'enfant + visa si nécessaire",
      required: true,
      endpoint: "identityDocuments" as const
    },
    { 
      type: "records", 
      label: "Bulletins scolaires", 
      description: "Attestation de fréquentation et bulletin de la classe précédente (nouveaux élèves)",
      required: false,
      endpoint: "schoolRecords" as const
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2">Documents requis</h3>
        <p className="text-sm text-gray-600">
          Téléchargez les documents requis pour finaliser l'inscription
        </p>
      </div>

      {/* Upload Sections */}
      <div className="space-y-6">
        {requiredDocuments.map((docType) => {
          const hasFiles = uploadedFiles.filter(f => f.documentType === docType.type).length > 0;
          
          return (
            <Card key={docType.type} className={hasFiles ? "border-green-200 bg-green-50" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>{docType.label}</span>
                    {docType.required && (
                      <Badge variant="destructive" className="text-xs">Requis</Badge>
                    )}
                  </div>
                  {hasFiles && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </CardTitle>
                <p className="text-sm text-gray-600">{docType.description}</p>
              </CardHeader>
              
              <CardContent>
                {/* Show uploaded files for this document type */}
                {uploadedFiles
                  .filter(file => file.documentType === docType.type)
                  .map((file) => (
                    <div key={file.key} className="flex items-center justify-between p-3 bg-white rounded-lg border mb-3">
                      <div className="flex items-center space-x-3">
                        {getFileIcon(file.type)}
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800 border-0">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Téléchargé
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFile(file.key)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                {/* Upload area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <UploadDropzone
                    endpoint={docType.endpoint}
                    onClientUploadComplete={(res) => {
                      handleUploadComplete(res, docType.type);
                    }}
                    onUploadError={handleUploadError}
                    appearance={{
                      container: "border-none p-0",
                      uploadIcon: "text-gray-400",
                      label: "text-sm text-gray-600",
                      allowedContent: "text-xs text-gray-500"
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Upload Summary */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2 flex items-center">
          <AlertCircle className="w-4 h-4 mr-2 text-blue-600" />
          Récapitulatif des documents
        </h4>
        <div className="space-y-2 text-sm">
          {requiredDocuments.map((docType) => {
            const fileCount = uploadedFiles.filter(f => f.documentType === docType.type).length;
            const isComplete = fileCount > 0 || !docType.required;
            
            return (
              <div key={docType.type} className="flex items-center justify-between">
                <span className={isComplete ? "text-green-700" : "text-red-600"}>
                  {docType.label}
                </span>
                <div className="flex items-center space-x-2">
                  {fileCount > 0 && (
                    <Badge className="bg-blue-100 text-blue-800 border-0 text-xs">
                      {fileCount} fichier{fileCount > 1 ? 's' : ''}
                    </Badge>
                  )}
                  {isComplete ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-medium text-yellow-800 mb-2">Instructions importantes :</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Les fichiers doivent être clairs et lisibles</li>
          <li>• Formats acceptés : JPEG, PNG, PDF</li>
          <li>• Taille maximale : 4MB pour les images, 8MB pour les PDF</li>
          <li>• Vous pouvez télécharger plusieurs fichiers pour chaque type de document</li>
          <li>• Les documents originaux devront être présentés lors de votre visite à l'école</li>
        </ul>
      </div>
    </div>
  );
}