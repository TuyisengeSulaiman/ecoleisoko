import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  studentDocuments: f({
    image: { maxFileSize: "4MB", maxFileCount: 10 },
    pdf: { maxFileSize: "8MB", maxFileCount: 10 }
  })
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      // You can add authentication checks here
      
      // Return metadata to be stored with the file
      return { uploadedBy: "enrollment-system" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for enrollment documents:", file.url);
      console.log("file url", file.url);

      // Return data to be sent to clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.uploadedBy, fileUrl: file.url };
    }),

  studentPhoto: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      return { uploadedBy: "enrollment-system", documentType: "photo" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Student photo upload complete:", file.url);
      return { uploadedBy: metadata.uploadedBy, fileUrl: file.url };
    }),

  identityDocuments: f({ 
    image: { maxFileSize: "4MB", maxFileCount: 5 },
    pdf: { maxFileSize: "8MB", maxFileCount: 5 }
  })
    .middleware(async ({ req }) => {
      return { uploadedBy: "enrollment-system", documentType: "identity" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Identity document upload complete:", file.url);
      return { uploadedBy: metadata.uploadedBy, fileUrl: file.url };
    }),

  schoolRecords: f({ 
    image: { maxFileSize: "4MB", maxFileCount: 10 },
    pdf: { maxFileSize: "8MB", maxFileCount: 10 }
  })
    .middleware(async ({ req }) => {
      return { uploadedBy: "enrollment-system", documentType: "records" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("School records upload complete:", file.url);
      return { uploadedBy: metadata.uploadedBy, fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;