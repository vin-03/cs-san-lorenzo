"use client";

import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer} id="contatti">
            <div className={styles.grid}>
                {/* Logo e descrizione */}
                <div className={styles.brand}>
                    <div className={styles.logo}>San Lorenzo</div>
                    <p className={styles.description}>
                        Il tuo centro sportivo di fiducia. <br />
                        Sport, benessere e comunità in un unico ambiente
                        d'eccellenza.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.social}>
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.social}>
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.social}>
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Menu */}
                <div className={styles.menu}>
                    <h4>Menu</h4>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#campi">Campi Sportivi</a>
                        </li>
                        <li>
                            <a href="#corsi">I Nostri Corsi</a>
                        </li>
                        <li>
                            <a href="#about">Chi Siamo</a>
                        </li>
                    </ul>
                </div>

                {/* Contatti */}
                <div className={styles.contacts}>
                    <h4>Contatti</h4>
                    <ul>
                        <li>
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                            Via Roma 123, 00100 Italy
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                phone
                            </span>
                            +39 012 345 6789
                        </li>
                        <li>
                            <span className="material-symbols-outlined">
                                mail
                            </span>
                            info@sanlorenzo.it
                        </li>
                    </ul>
                </div>

                {/* Posizione */}
                <div className={styles.location}>
                    <h4>Posizione</h4>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.403925869124!2d14.7093695755017!3d40.77513323374909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc6560d8822e3%3A0x5ec59e65857993bc!2sVia%20S.%20Lorenzo%2C%201%2C%2084085%20Piazza%20del%20Galdo-Sant%27angelo%20SA%2C%20Italia!5e0!3m2!1sit!2sus!4v1775227899658!5m2!1sit!2sus"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.bottom}>
                © 2024 Centro Sportivo San Lorenzo. Tutti i diritti riservati.
                P.IVA 0123456789
            </div>
        </footer>
    );
}
