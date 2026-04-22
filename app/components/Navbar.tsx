// components/Navbar.tsx (Simplified example)
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
      <Link href="/">
        <Image
          src="/images/fitnofat-logo.png" // image_3.png
          alt="FitNoFat Logo"
          width={150} // Aspect ratio based on vector design
          height={50}
          priority
          unoptimized={true}
        />
      </Link>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Link
          href="/about"
          style={{
            padding: '0.5rem 0.9rem',
            borderRadius: '999px',
            border: '1px solid #d0d7de',
            textDecoration: 'none',
            color: '#1f2937',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{
            padding: '0.5rem 0.9rem',
            borderRadius: '999px',
            background: '#25D366',
            textDecoration: 'none',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}