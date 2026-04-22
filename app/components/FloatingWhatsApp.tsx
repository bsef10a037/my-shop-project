'use client';

type FloatingWhatsAppProps = {
  phoneNumber: string;
  accountName: string;
};

export default function FloatingWhatsApp({
  phoneNumber,
  accountName,
}: FloatingWhatsAppProps) {
  const sanitizedNumber = phoneNumber.replace(/[^\d]/g, "");

  return (
    <a
      href={`https://wa.me/${sanitizedNumber}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order ${accountName} on WhatsApp`}
    >
      Chat with {accountName}
    </a>
  );
}