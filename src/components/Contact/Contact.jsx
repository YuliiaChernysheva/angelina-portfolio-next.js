"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={styles.contactTitle}>Зв&apos;язатися зі мною</h2>
        <p className={styles.contactSubtitle}>
          Шукаєте дизайнера для свого проєкту? Давайте обговоримо, як я можу
          допомогти!
        </p>

        <div className={styles.contactLayout}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.contactFormField}>
              <span className={styles.contactFormLabel}>Ім&apos;я</span>
              <input
                className={styles.contactFormInput}
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                required
              />
            </label>

            <label className={styles.contactFormField}>
              <span className={styles.contactFormLabel}>Email</span>
              <input
                className={styles.contactFormInput}
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </label>

            <label className={styles.contactFormField}>
              <span className={styles.contactFormLabel}>Повідомлення</span>
              <textarea
                className={styles.contactFormTextarea}
                name="message"
                placeholder="Розкажіть про ваш проєкт..."
                required
              ></textarea>
            </label>

            <button
              className={styles.contactFormBtn}
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Відправляю..."
                : "Відправити повідомлення"}
              <svg
                className={`${styles.icon} ${styles.iconSend}`}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/icons/symbol-defs.svg#icon_telegram"></use>
              </svg>
            </button>

            {status === "success" && (
              <p className={styles.formNote}>✅ Повідомлення надіслано!</p>
            )}
            {status === "error" && (
              <p className={styles.formNote}>❌ Помилка. Спробуйте ще раз.</p>
            )}
          </form>

          <aside className={styles.contactSide}>
            <h3 className={styles.contactSideTitle}>Соціальні мережі</h3>

            <ul className={styles.contactSocial}>
              <li className={styles.contactSocialItem}>
                <a
                  className={styles.contactSocialLink}
                  href="mailto:angelinagrinkevic663@gmail.com"
                >
                  <svg
                    className={styles.icon}
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="/icons/symbol-defs.svg#icon_email"></use>
                  </svg>
                  Email
                </a>
              </li>

              <li className={styles.contactSocialItem}>
                <a
                  className={styles.contactSocialLink}
                  href="https://www.behance.net/angelina_designer_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className={styles.icon}
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="/icons/symbol-defs.svg#icon_behance"></use>
                  </svg>
                  Behance
                </a>
              </li>

              <li className={styles.contactSocialItem}>
                <a
                  className={styles.contactSocialLink}
                  href="https://www.instagram.com/angielpixels?igsh=azFjaXBpdWw0ODdy&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className={styles.icon}
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="/icons/symbol-defs.svg#instagram"></use>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>

            <div className={styles.contactSideContainer}>
              <h3 className={styles.contactSideTitleMe}>
                Відкрита до співпраці
              </h3>
              <p className={styles.contactSideText}>
                Шукаю можливості для стажування або джуніор позиції UX/UI
                дизайнера. Готова вчитися, приймати фідбек і рости в команді
                досвідчених спеціалістів!
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
