'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.subtitle}
                >
                    HERITAGE IN EVERY THREAD
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.title}
                >
                    Premium Unstitched Fabric <br /><span>for Modern Men</span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={styles.ctaGroup}
                >
                    <Link href="/shop" className={styles.primaryBtn}>
                        SHOP THE COLLECTION
                    </Link>
                    <Link href="/collections/boski" className={styles.secondaryBtn}>
                        EXPLORE BOSKI
                    </Link>
                </motion.div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>SCROLL</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
}
