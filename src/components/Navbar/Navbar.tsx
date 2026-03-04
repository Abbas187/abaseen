import Link from 'next/link';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.topBar}>
                <p>FREE SHIPPING PAKISTAN-WIDE ON ORDERS ABOVE RS. 5000</p>
            </div>
            <div className={styles.mainNav}>
                <button className={styles.mobileMenu}>
                    <Menu size={24} />
                </button>

                <div className={styles.navLinks}>
                    <Link href="/shop">SHOP</Link>
                    <Link href="/collections">COLLECTIONS</Link>
                    <Link href="/about">OUR STORY</Link>
                </div>

                <Link href="/" className={styles.logo}>
                    THE ABASEEN
                </Link>

                <div className={styles.navIcons}>
                    <button><Search size={22} /></button>
                    <Link href="/track"><small>TRACK ORDER</small></Link>
                    <button className={styles.cartIcon}>
                        <ShoppingBag size={22} />
                        <span className={styles.cartCount}>0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
