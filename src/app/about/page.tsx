import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppOrder from '@/components/WhatsApp/WhatsAppOrder';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className={styles.about}>
                <div className={styles.hero}>
                    <div className="container">
                        <h1>OUR STORY</h1>
                    </div>
                </div>

                <section className={styles.content}>
                    <div className="container">
                        <div className={styles.textBlock}>
                            <h2>The Heritage of The Abaseen</h2>
                            <p>Founded on the principles of quality and tradition, The Abaseen is more than just a clothing brand. We are custodians of the rich textile heritage of Pakistan, bringing the finest unstitched fabrics to the modern man.</p>
                            <p>Our journey began with a simple mission: to provide fabric that feels like a second skin while embodying the strength and elegance of the Indus River—from which we draw our name, the 'Abaseen'.</p>
                        </div>

                        <div className={styles.grid}>
                            <div className={styles.item}>
                                <h3>Originality</h3>
                                <p>We source only the finest Egyptian cotton and authentic Boski to ensure every thread meets our rigorous standards.</p>
                            </div>
                            <div className={styles.item}>
                                <h3>Craftsmanship</h3>
                                <p>Every collection is designed with precision, blending traditional weaving techniques with modern aesthetics.</p>
                            </div>
                            <div className={styles.item}>
                                <h3>Excellence</h3>
                                <p>From the first touch to the final stitch, we promise a premium experience for every Pakistani gentleman.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppOrder />
        </>
    );
}
