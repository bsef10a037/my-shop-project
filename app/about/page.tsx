import Image from 'next/image';
import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Our Fresh Philosophy</h1>
      
      <div className={styles.grid}>
        <div>
          <p className={styles.paragraph}>
            At FitNoFat, we believe that "healthy" should never mean boring. We're obsessing over flavor profiles so you don't have to choose between your fitness goals and tasting something amazing.
          </p>
          <p className={styles.paragraph}>
            We source every avocado, every chicken breast, and every grain of quinoa with care, ensuring they meet our strict standards for freshness and nutritional density. We serve real food, made simple.
          </p>
        </div>
        
        <div className={styles.imageWrap}>
          {/* Using the About Page specific image */}
          <Image
            src="/images/about-fresh-ingredients.jpg" // image_1.png
            alt="Selection of raw, fresh ingredients used at FitNoFat"
            fill
            className={styles.image}
            unoptimized={true}
          />
        </div>
      </div>
    </main>
  );
}