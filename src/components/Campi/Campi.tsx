"use client";

import styles from "./Campi.module.scss";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
}

const cards: CardProps[] = [
    {
        title: "Pallavolo",
        description:
            "Campi indoor con pavimentazione tecnica per performance ai massimi livelli.",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuzlrGEYIKQqUKdONV_kNQkRf9oukNT78QuKp5me7eiHwRDHh4REecnOjDXKNYRUTQHgEIVWMstuwnK7GrO9FvOE3eq5dtUhFaTs2EVmVE5xwvO_h481QKixhir-lSybOxskpzeO4M7dZ4Fhsb9HsxjFgpxvypS96NIITymR2B3gtliDJTbBpOF7NK7ynhmjh71uopETiPStErk5DFuLYbJfA475rbtsoDmIkT2Y6d-CINNf4sM3B9lhDeB3TmuIBtP4I3L-5B8k",
        alt: "Pallavolo",
    },
    {
        title: "Beach Volley",
        description:
            "Sabbia finissima e illuminazione serale per partite estive indimenticabili.",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAP9MW6S7dlodOTwWfWLbjE5NknzauU51OdZtU9cINYPk6yGw7mk1ZmMlvwd1RfB_hVS0YXHp7hfhssRexEVpd7kd_ty_p_tYojrWEBuWxOBKXPQzMT69mqgrH6MW8r54x9dqUyEK0aTOXcCNSU2CHZrSQrZuZIIkf3qa6eHI3FZ7Z28evhKVd5mYwEgNRIBs3yDDSNYvreUKvsKsPE1m_y7ptzM9OGLV9EetqlPVni2IvLv75-XhlVLh8HuvO_zM5fM7oGfVj2Gv8",
        alt: "Beach Volley",
    },
    {
        title: "Padel",
        description:
            "Campi panoramici di ultima generazione con erba sintetica testurizzata.",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5fkswSgUnOymdsSS7U2ANT0KN-TxxJa1qf3GnpQ7DRytMdknZDVGVEdw45XHHjPVyCP5v1P09rt4UNMbSSoXt8JjhcJI6oONBQQZ-BQqdBcorkw_14EddxTryQWtaYBObOtc2VTV9IWNc4vEvLwTPr1LRs8gUM5qNluW6g9hWW8QbbaZ2cChVY9QM03gVnmWuV6U3jr86F5CkajA374J4U5_wEx5TkWdiIAbAVHQ2bE-9hCG4tRH1WsM2FwmN1ySL_7pnyouo58M",
        alt: "Padel",
    },
    {
        title: "Tennis",
        description:
            "Superficie in terra rossa curata quotidianamente per gli amanti della tecnica.",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCe31OGLqWPW1zPI26Up-MJMh76iqRhmo908i4mDYS1imjBOffFDmbTVioJbDkfg6zdgXWHJAZBQAeqeb_giXnfJSBjHRDNnVpngwnyNYrAHxIdRhf4fFvWIfDcxZl0rMZ_Ro1rtttl_8DPpCQklRCDMDbc2p03XXGvmB2ZEVD23VnaYQRfKeJqJzMyYA-WxbnIv3EMSg9YrOUS8rX2cbt8dzLDGUj_b8oEw51cE0rUSOm1PND6oqlfv4WQIaSIMEVfHBSy8VX7VJo",
        alt: "Tennis",
    },
];

export default function Campi() {
    return (
        <section className={styles.campi} id="campi">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Strutture</span>
                    <h2 className={styles.title}>I Nostri Campi</h2>
                    <p className={styles.description}>
                        Prenota la tua sessione di allenamento o la tua partita
                        tra amici nelle nostre strutture dedicate, curate in
                        ogni dettaglio.
                    </p>
                </div>

                <div className={styles.grid}>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={card.imageUrl}
                                    alt={card.alt}
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    {card.title}
                                </h3>
                                <p className={styles.cardDescription}>
                                    {card.description}
                                </p>
                                <span className={styles.cardLink}>
                                    Prenota Ora
                                    <span className="material-symbols-outlined">
                                        east
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
