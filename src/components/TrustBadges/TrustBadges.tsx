import { ShieldCheck, Truck, RefreshCw, Award } from 'lucide-react';
import styles from './TrustBadges.module.css';

export default function TrustBadges() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.badge}>
                        <Truck size={32} strokeWidth={1.5} />
                        <div>
                            <h3>Fast Shipping</h3>
                            <p>Pakistan-wide delivery in 3-5 days</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <ShieldCheck size={32} strokeWidth={1.5} />
                        <div>
                            <h3>Secure Payment</h3>
                            <p>Cash on Delivery & Secure Online Pay</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <RefreshCw size={32} strokeWidth={1.5} />
                        <div>
                            <h3>Easy Returns</h3>
                            <p>7-day hassle-free return policy</p>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <Award size={32} strokeWidth={1.5} />
                        <div>
                            <h3>100% Original</h3>
                            <p>Premium quality guaranteed fabric</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
