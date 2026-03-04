import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Package, Truck, CheckCircle } from 'lucide-react';
import styles from './Track.module.css';

export default function TrackOrderPage() {
    return (
        <>
            <Navbar />
            <main className={styles.track}>
                <div className="container">
                    <div className={styles.box}>
                        <h1>TRACK YOUR ORDER</h1>
                        <p>Enter your Order ID or Tracking Number to see the status.</p>

                        <form className={styles.form}>
                            <input type="text" placeholder="Order ID (e.g. #AB1234)" required />
                            <button type="submit">TRACK STATUS</button>
                        </form>

                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.icon}><CheckCircle size={24} /></div>
                                <div className={styles.text}>
                                    <h4>Order Placed</h4>
                                    <p>We have received your order.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.icon}><Package size={24} /></div>
                                <div className={styles.text}>
                                    <h4>Processing</h4>
                                    <p>Your fabric is being quality-checked.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.icon}><Truck size={24} /></div>
                                <div className={styles.text}>
                                    <h4>In Transit</h4>
                                    <p>Order has been shipped via courier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
