import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface EnrollmentConfirmationEmailProps {
  studentName: string;
  registrationId: string;
  parentEmail: string;
  enrollmentGrade: string;
  submissionDate: string;
}

export const EnrollmentConfirmationEmail = ({
  studentName,
  registrationId,
  parentEmail,
  enrollmentGrade,
  submissionDate,
}: EnrollmentConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Confirmation d'inscription - École Isoko</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>École Isoko</Heading>
            <Text style={subtitle}>Confirmation d'inscription 2025-2026</Text>
          </Section>

          <Section style={content}>
            <Text style={greeting}>Cher(e) parent/tuteur,</Text>
            
            <Text style={paragraph}>
              Nous avons bien reçu votre demande d'inscription pour <strong>{studentName}</strong> en classe <strong>{enrollmentGrade}</strong> pour l'année scolaire 2025-2026.
            </Text>

            <Section style={infoBox}>
              <Text style={infoTitle}>Détails de votre inscription :</Text>
              <Text style={infoItem}><strong>Numéro de dossier :</strong> #{registrationId}</Text>
              <Text style={infoItem}><strong>Élève :</strong> {studentName}</Text>
              <Text style={infoItem}><strong>Niveau :</strong> {enrollmentGrade}</Text>
              <Text style={infoItem}><strong>Date de soumission :</strong> {submissionDate}</Text>
              <Text style={infoItem}><strong>Email de contact :</strong> {parentEmail}</Text>
            </Section>

            <Text style={paragraph}>
              <strong>Prochaines étapes :</strong>
            </Text>
            
            <Text style={stepsList}>
              1. <strong>Vérification du dossier</strong> - Notre équipe vérifiera votre dossier dans les 3-5 jours ouvrables.<br /><br />
              
              2. <strong>Paiement des frais d'inscription</strong> - Si ce n'est pas encore fait, veuillez effectuer le paiement de 50 USD sur notre compte bancaire :<br />
              • LEOTAURUS UNIVERS LTD<br />
              • FRW: 10014-4936099 / BKFRW<br />
              • USD: 10014-4936927 / BKUSD<br />
              • SWIFT: BKIGRWRW<br />
              • Communication: INSCRIPTION + {studentName}<br /><br />
              
              3. <strong>Documents originaux</strong> - Apportez les documents originaux lors de votre visite à l'école.<br /><br />
              
              4. <strong>Confirmation finale</strong> - Vous recevrez une confirmation officielle d'acceptation par email.
            </Text>

            <Section style={documentsBox}>
              <Text style={documentsTitle}>Documents requis à apporter :</Text>
              <Text style={documentsList}>
                • Photo passeport de l'enfant<br />
                • Photocopie de la carte d'identité ou passeport de l'enfant<br />
                • Photocopie du visa de résidence (si applicable)<br />
                • Attestation de fréquentation scolaire (nouveaux venus)<br />
                • Bulletin de la classe précédente (nouveaux venus)<br />
                • Dernière page du ROI signée
              </Text>
            </Section>

            <Text style={paragraph}>
              Pour toute question, n'hésitez pas à nous contacter :
            </Text>
            
            <Text style={contactInfo}>
              <strong>Email :</strong> isokolasource@gmail.com<br />
              <strong>Téléphone :</strong> 0783552105
            </Text>

            <Text style={signature}>
              Cordialement,<br />
              L'équipe administrative<br />
              École Isoko
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Ce message a été envoyé automatiquement. Veuillez ne pas répondre à cet email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const header = {
  backgroundColor: "#2563eb",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 8px",
  padding: "0",
};

const subtitle = {
  color: "#e5e7eb",
  fontSize: "16px",
  margin: "0",
  padding: "0",
};

const content = {
  padding: "24px",
};

const greeting = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const paragraph = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const infoBox = {
  backgroundColor: "#f3f4f6",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px 0",
};

const infoTitle = {
  color: "#1f2937",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 12px",
};

const infoItem = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 8px",
};

const stepsList = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0 0 16px",
  paddingLeft: "16px",
};

const documentsBox = {
  backgroundColor: "#fef3c7",
  border: "1px solid #f59e0b",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px 0",
};

const documentsTitle = {
  color: "#92400e",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 12px",
};

const documentsList = {
  color: "#92400e",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
};

const contactInfo = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 16px",
  backgroundColor: "#f9fafb",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
};

const signature = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "24px 0 0",
  fontStyle: "italic",
};

const footer = {
  borderTop: "1px solid #e5e7eb",
  padding: "16px 24px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0",
};

export default EnrollmentConfirmationEmail;