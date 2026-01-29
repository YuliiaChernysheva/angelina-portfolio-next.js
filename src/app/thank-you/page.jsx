"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./ThankYou.module.css";

export default function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>✓</div>

        <h1 className={styles.title}>Дякую за повідомлення 💌</h1>

        <p className={styles.text}>
          Я отримала ваш запит і відповім найближчим часом.
        </p>

        <p className={styles.redirect}>
          Повернення на головну через 3 секунди…
        </p>

        <Link href="/" className={styles.button}>
          Повернутися зараз
        </Link>
      </div>
    </main>
  );
}
