"use client";

import styles from "./Corsi.module.scss";

interface CorsoProps {
    title: string;
    description: string;
    imageUrl: string;
    alt: string;
    tag: string;
    tagColor: "primary" | "secondary";
    reverse?: boolean; // per flex-row-reverse
}

const corsi: CorsoProps[] = [
    {
        title: "Corsi di Pallavolo",
        description:
            "Scuola volley per tutte le età con focus su tecnica individuale, tattica di squadra e spirito sportivo.",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBAKJmpAqCkTDo429WeEfCG-hvGZBS4mhbdzFHsWclZ6kZTqOhngby8IfZQyqRrFxCadEWHnA1BglDofHO2kK4hHylxtcnzWZs6e4GctfMG5S8dMIUh2eubYvEvoW_pKQrso4IQ1cVyl2IAeFKppDhPyEEdCrlEHGmKS3IYs1c5uIpmzLfJf9OEOlX_R8IGtZ_2bhL8qIsqt2KE5owkYkGwEdXsJLRXRDH0_XtxDEYRJlwxhpNY1vhPyW9BDN8xcHcDgQxnA6-td2k",
        alt: "Pallavolo Action",
        tag: "Sport",
        tagColor: "primary",
    },
    {
        title: "Ginnastica Funzionale",
        description:
            "Allenamento dinamico e coinvolgente per migliorare forza, agilità e benessere nella vita di tutti i giorni.",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCzpRROsZf59kjLbW22ga7eGI1FymUCksjbyOvOPmFGd9nmJ6gP_N-dVu_ax-AI1mibx0BsqzjHpku-MNjicQTAwCe_iFgP4Yraewl6Y0fdo1iJ5qnFkD7-t56WZezTLdD54WVefnjDlVDOPtEOgz94jFE_ktjTdybjS9B7PR9dJeOAbL1t4qTdBv9iOlFnuDHyLmXiF6U4eg4gZxiq4iXdhjhzavSe8WG1H8EO92s742Y-LoqLpF31i-R0HiUvtguOrAG49v2tjh0",
        alt: "Ginnastica Funzionale",
        tag: "Benessere",
        tagColor: "secondary",
        reverse: true,
    },
];

export default function Corsi() {
    return (
        <section className={styles.corsi} id="corsi">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Formazione</span>
                    <h2 className={styles.title}>I Nostri Corsi</h2>
                    <p className={styles.description}>
                        Classi guidate da istruttori certificati per ogni
                        livello, dal principiante all&apos;agonista.
                    </p>
                </div>

                <div className={styles.list}>
                    {corsi.map((corso, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${
                                corso.reverse ? styles.reverse : ""
                            }`}
                        >
                            <div className={styles.cardContent}>
                                {/* <div className={styles.tagWrapper}>
                                    <span
                                        className={
                                            corso.tagColor === "primary" ?
                                                styles.tagPrimary
                                            :   styles.tagSecondary
                                        }
                                    >
                                        {corso.tag}
                                    </span>
                                </div> */}
                                <div className={styles.tagWrapper}>
                                    <span>{corso.tag}</span>
                                </div>
                                <h3 className={styles.cardTitle}>
                                    {corso.title}
                                </h3>
                                <p className={styles.cardDescription}>
                                    {corso.description}
                                </p>
                                <a href="#" className={styles.cardLink}>
                                    Scopri gli orari
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                            <div className={styles.cardImageWrapper}>
                                <img
                                    src={corso.imageUrl}
                                    alt={corso.alt}
                                    className={styles.cardImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
