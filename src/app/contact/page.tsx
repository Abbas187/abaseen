import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppOrder from '@/components/WhatsApp/WhatsAppOrder';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className={styles.contact}>
                <div className="container">
                    <header className={styles.header}>
                        <h1>CONTACT US</h1>
                        <p>We're here to assist you with your orders and inquiries.</p>
                    </header>

                    <div className={styles.layout}>
                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <Phone size={24} />
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+92 300 1234567</p>
                                    <p>Mon - Sat (10AM - 8PM)</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <Mail size={24} />
                                <div>
                                    <h3>Email</h3>
                                    <p>support@theabaseen.com</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <MapPin size={24} />
                                <div>
                                    <h3>Head Office</h3>
                                    <p>DHA Phase 6, Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.row}>
                                <input type="text" placeholder="Full Name" required />
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Your Message" rows={6} required></textarea>
                            <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppOrder />
        </>
    );
}
