import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2>THE ABASEEN</h2>
                        <p>Premium unstitched fabric reflecting Pakistani heritage and modern masculinity.</p>
                        <div className={styles.socials}>
                            <Link href="#"><Facebook size={20} /></Link>
                            <Link href="#"><Instagram size={20} /></Link>
                            <Link href="#"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h3>QUICK LINKS</h3>
                        <Link href="/shop">All Products</Link>
                        <Link href="/collections/boski">Boski Collection</Link>
                        <Link href="/collections/cotton">Cotton Collection</Link>
                        <Link href="/collections/wash-wear">Wash & Wear</Link>
                    </div>

                    <div className={styles.links}>
                        <h3>CUSTOMER CARE</h3>
                        <Link href="/track">Track Order</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/about">About Brand</Link>
                        <Link href="/faq">FAQs</Link>
                    </div>

                    <div className={styles.links}>
                        <h3>CONTACT</h3>
                        <p>Support: +92 300 1234567</p>
                        <p>Email: info@theabaseen.com</p>
                        <p>Mon - Sat: 10AM - 8PM</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} The Abaseen. All Rights Reserved.</p>
                    <div className={styles.paymentBadges}>
                        {/* Logic for payment icons could go here */}
                        <span>Cash on Delivery</span>
                        <span className={styles.divider}>|</span>
                        <span>Bank Transfer</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
