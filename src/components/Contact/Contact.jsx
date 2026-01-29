"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={styles.contactTitle}>Зв&apos;язатися зі мною</h2>

        <p className={styles.contactSubtitle}>
          Шукаєте дизайнера для свого проєкту? Давайте обговоримо, як я можу
          допомогти!
        </p>

        <div className={styles.contactLayout}>
          <form
            className={styles.contactForm}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="786a7a48-4eda-4eb7-ab92-b2207458260b"
            ></input>
            <input
              type="hidden"
              name="subject"
              value="New Website Request"
            ></input>

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

            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <input
              type="hidden"
              name="redirect"
              value="https://angelina-portfolio-next-js.vercel.app/thank-you"
            />

            <button className={styles.contactFormBtn} type="submit">
              Відправити повідомлення
              <svg
                className={`${styles.icon} ${styles.iconSend}`}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/icons/symbol-defs.svg#icon_telegram"></use>
              </svg>
            </button>
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
                Розглядаю можливості співпраці у сфері UX/UI дизайну. Відкрита
                до розвитку, конструктивного фідбеку та роботи в професійній
                команді.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
