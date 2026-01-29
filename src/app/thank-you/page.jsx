"use client";

import Link from "next/link";
import styles from "./ThankYou.module.css";

export default function ThankYouPage() {
  return (
    <main className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>✓</div>

        <h1 className={styles.title}>Дякую за повідомлення 💌</h1>

        <p className={styles.text}>
          Я отримала ваш запит і відповім найближчим часом.
        </p>

        <Link href="/" className={styles.button}>
          Повернутися назад
        </Link>
      </div>
    </main>
  );
}
