"use client";

import styles from "./About.module.scss";

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <span className={styles.subtitle}>La Nostra Storia</span>
                <h2 className={styles.title}>
                    Passione per lo Sport, <br />
                    Impegno per la Comunità
                </h2>
                <div className={styles.text}>
                    <p>
                        Nato con l'obiettivo di creare un polo aggregativo
                        d'eccellenza, il Centro Sportivo San Lorenzo è oggi una
                        realtà consolidata nel panorama sportivo locale. La
                        nostra missione è promuovere uno stile di vita sano
                        attraverso la pratica sportiva.
                    </p>
                    <p>
                        Crediamo fermamente che lo sport sia uno strumento
                        fondamentale per la crescita dei più giovani e per il
                        mantenimento del benessere psicofisico in ogni fase
                        della vita. Ogni spazio è pensato per accoglierti al
                        meglio.
                    </p>
                </div>
            </div>
        </section>
    );
}
