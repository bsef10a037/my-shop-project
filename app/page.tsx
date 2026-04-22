import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* The Next.js Image component, optimized for static export */}
        <Image
          src="/images/hero-vibrant-bowl.jpg" // image_0.png
          alt="FitNoFat Vibrant Healthy Bowl"
          fill // Tells image to fill the parent container
          className={styles.heroImage}
          priority // Loads this image first (critical for LCP)
          unoptimized={true} // Crucial for static export
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>FitNoFat</h1>
          <p className={styles.heroSubtitle}>Fuel Your Body. Zero Compromise.</p>
          <Link href="/contact" className={styles.heroCta}>
            Write to us
          </Link>
        </div>
      </section>

      {/* Featured Item Section */}
      <section className={styles.featureSection}>
        <div className={styles.featureImageWrap}>
          <Image
            src="/images/menu-protein-wrap.jpg" // image_2.png
            alt="FitNoFat Grilled Protein Wrap"
            fill
            className={styles.featureImage}
            unoptimized={true}
          />
        </div>
        <div className={styles.featureContent}>
          <h2 className={styles.featureTitle}>Signature Protein Wrap</h2>
          <p className={styles.featureDescription}>
            Packed with lean grilled chicken, fresh spinach, hummus, and feta.
            Perfect macro-friendly fuel on the go.
          </p>
          <span className={styles.featurePrice}>$12.99</span>
        </div>
      </section>
    </main>
  );
}