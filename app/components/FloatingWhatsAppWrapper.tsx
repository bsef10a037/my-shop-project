'use client'; // 👈 This makes this specific file a Client Component

import FloatingWhatsApp from './FloatingWhatsApp';

export default function FloatingWhatsAppWrapper() {
  return (
    <FloatingWhatsApp phoneNumber="+923717011639" accountName="Fitnofat" />
  );
}
