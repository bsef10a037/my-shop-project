import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Send us your order details or any questions. We will get back quickly.
        </p>
        <form
          className={styles.form}
          action="https://formspree.io/f/your-id"
          method="POST"
        >
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Your Order or Inquiry"
          />
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}