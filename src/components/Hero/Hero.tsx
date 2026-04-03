"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background */}
            <div className={styles.bg}>
                <Image
                    src="/images/volleyballCourt.png"
                    alt="Centro Sportivo San Lorenzo"
                    fill
                    priority
                    className={styles.image}
                />
                <div className={styles.overlay}></div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <span className={styles.badge}>Eccellenza Sportiva</span>

                <h1 className={styles.title}>
                    Centro Sportivo <br />
                    <span>San Lorenzo</span>
                </h1>

                <p className={styles.subtitle}>
                    Il tuo punto di riferimento per lo sport e il benessere.
                    Strutture all'avanguardia e corsi professionali nel cuore
                    della comunità.
                </p>

                <div className={styles.buttons}>
                    <a href="#campi" className={styles.primaryBtn}>
                        Prenota un Campo
                    </a>
                    <a href="#corsi" className={styles.secondaryBtn}>
                        Esplora i Corsi
                    </a>
                </div>
            </div>
        </section>
    );
}
