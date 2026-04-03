"use client";

import styles from "./Info.module.scss";

interface InfoItem {
    icon: string;
    title: string;
    description: string;
}

const infoItems: InfoItem[] = [
    {
        icon: "local_parking",
        title: "Parcheggio Gratuito",
        description: "Con area riservata.",
    },
    {
        icon: "shower",
        title: "Spogliatoi & Docce",
        description: "Strutture pulite e moderne.",
    },
    {
        icon: "sports_tennis",
        title: "Noleggio Attrezzatura",
        description: "Racchette e palline disponibili.",
    },
    {
        icon: "wifi",
        title: "Free Wi-Fi",
        description: "Disponibile in tutta la struttura.",
    },
];

export default function Info() {
    return (
        <section className={styles.info} id="info">
            <div className={styles.container}>
                {/* Orari */}
                <div>
                    <h2 className={styles.sectionTitle}>
                        <span className="material-symbols-outlined text-primary">
                            schedule
                        </span>
                        <span className={styles.textPrimary}>
                            Orari di Apertura
                        </span>
                    </h2>
                    <div className={styles.hours}>
                        <div className={styles.hourRow}>
                            <span className={styles.textPrimary}>
                                Lunedì - Venerdì
                            </span>
                            <span className={styles.hour}>08:00 - 22:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.textPrimary}>Sabato</span>
                            <span className={styles.hour}>09:00 - 20:00</span>
                        </div>
                        <div className={styles.hourRow}>
                            <span className={styles.textPrimary}>Domenica</span>
                            <span className={styles.hour}>09:00 - 13:00</span>
                        </div>
                    </div>
                </div>

                {/* Informazioni Utili */}
                <div>
                    <h2 className={styles.sectionTitle}>
                        <span className="material-symbols-outlined text-primary">
                            info
                        </span>
                        <span className={styles.textPrimary}>
                            Informazioni Utili
                        </span>
                    </h2>
                    <div className={styles.infoGrid}>
                        {infoItems.map((item, index) => (
                            <div key={index} className={styles.infoCard}>
                                <span
                                    className={`material-symbols-outlined ${styles.icon}`}
                                >
                                    {item.icon}
                                </span>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
