"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Process.module.css";

export default function Process() {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  const totalSlides = 5;
  const [index, setIndex] = useState(0);

  const isDesktop = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1179px)").matches;
  }, []);

  const updateTransform = (nextIndex) => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    if (window.matchMedia("(min-width: 1179px)").matches) return;

    const w = viewport.clientWidth;
    track.style.transform = `translateX(-${nextIndex * w}px)`;
  };

  useEffect(() => {
    updateTransform(index);

    const onResize = () => updateTransform(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateTransform(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const onPrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const onNext = () => setIndex((prev) => Math.min(totalSlides - 1, prev + 1));

  return (
    <section className={styles.process} id="process">
      <h2 className={styles.processTitle}>Мій процес</h2>
      <p className={styles.processSubtitle}>
        Поетапний підхід до створення продуманих дизайн-рішень
      </p>

      <div className={styles.processSlider}>
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}
          type="button"
          aria-label="Previous step"
          onClick={onPrev}
          disabled={index === 0}
        >
          <svg
            className={styles.sliderIcon}
            width="35"
            height="48"
            aria-hidden="true"
          >
            <use href="/icons/symbol-defs.svg#icon_left_arrow"></use>
          </svg>
        </button>

        <div className={styles.sliderViewport} ref={viewportRef}>
          <ul className={styles.sliderTrack} ref={trackRef}>
            <li className={styles.processCard}>
              <span className={styles.cardStep}>1</span>
              <div className={`${styles.cardIcon} ${styles.search}`}>
                <svg
                  className={styles.cardIconSvg}
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <use href="/icons/symbol-defs.svg#search"></use>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Дослідження</h3>
              <p className={styles.cardText}>
                Вивчаю потреби користувачів, аналізую конкурентів та збираю
                інсайти
              </p>
            </li>
            <li className={styles.processCard}>
              <span className={styles.cardStep}>2</span>
              <div className={`${styles.cardIcon} ${styles.bulb}`}>
                <svg
                  className={styles.cardIconSvg}
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <use href="/icons/symbol-defs.svg#bulb"></use>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Ідеація</h3>
              <p className={styles.cardText}>
                Генерую ідеї та концепції рішень на основі даних дослідження
              </p>
            </li>
            <li className={styles.processCard}>
              <span className={styles.cardStep}>3</span>
              <div className={`${styles.cardIcon} ${styles.pencil}`}>
                <svg
                  className={styles.cardIconSvg}
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <use href="/icons/symbol-defs.svg#pencil"></use>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Дизайн</h3>
              <p className={styles.cardText}>
                Створюю wireframes, прототипи та фінальні візуальні дизайни
              </p>
            </li>
            <li className={styles.processCard}>
              <span className={styles.cardStep}>4</span>
              <div className={`${styles.cardIcon} ${styles.stick}`}>
                <svg
                  className={styles.cardIconSvg}
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <use href="/icons/symbol-defs.svg#stick"></use>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Тестування</h3>
              <p className={styles.cardText}>
                Провожу юзабіліті тести та збираю фідбек від користувачів
              </p>
            </li>
            <li className={styles.processCard}>
              <span className={styles.cardStep}>5</span>
              <div className={`${styles.cardIcon} ${styles.star}`}>
                <svg
                  className={styles.cardIconSvg}
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <use href="/icons/symbol-defs.svg#star"></use>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Ітерація</h3>
              <p className={styles.cardText}>
                Покращую дизайн на основі отриманих результатів та фідбеку
              </p>
            </li>
          </ul>
        </div>

        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}
          type="button"
          aria-label="Next step"
          onClick={onNext}
          disabled={index === totalSlides - 1}
        >
          <svg
            className={styles.sliderIcon}
            width="35"
            height="48"
            aria-hidden="true"
          >
            <use href="/icons/symbol-defs.svg#icon_right_arrow"></use>
          </svg>
        </button>
      </div>
    </section>
  );
}
