import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/Product/ProductCard';
import WhatsAppOrder from '@/components/WhatsApp/WhatsAppOrder';
import styles from './Shop.module.css';

const products = [
    { id: '1', name: 'Premium Egyptian Cotton - Navy', price: 6500, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800', collection: 'Cotton' },
    { id: '2', name: 'Lustrous Boski - Ivory', price: 9500, image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800', collection: 'Boski' },
    { id: '3', name: 'Luxury Wash & Wear - Charcoal', price: 4800, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800', collection: 'Wash & Wear' },
    { id: '4', name: 'Classic Karandi - Cream', price: 5500, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800', collection: 'Winter' },
    { id: '5', name: 'Premium Latha - Snow White', price: 7200, image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800', collection: 'Cotton' },
    { id: '6', name: 'Tropical Suiting - Grey', price: 5200, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800', collection: 'Summer' },
];

export default function ShopPage() {
    return (
        <>
            <Navbar />
            <main className={styles.shop}>
                <div className="container">
                    <header className={styles.header}>
                        <h1>Shop All</h1>
                        <p>Refining menswear since heritage.</p>
                    </header>

                    <div className={styles.layout}>
                        <aside className={styles.filters}>
                            <h3>FILTERS</h3>
                            <div className={styles.filterGroup}>
                                <h4>Fabric Type</h4>
                                <label><input type="checkbox" /> Boski</label>
                                <label><input type="checkbox" /> Cotton</label>
                                <label><input type="checkbox" /> Wash & Wear</label>
                                <label><input type="checkbox" /> Karandi</label>
                            </div>
                            <div className={styles.filterGroup}>
                                <h4>Color</h4>
                                <div className={styles.colorGrid}>
                                    <div className={styles.color} style={{ background: '#fff', border: '1px solid #ddd' }} title="White"></div>
                                    <div className={styles.color} style={{ background: '#000' }} title="Black"></div>
                                    <div className={styles.color} style={{ background: '#2c3e50' }} title="Navy"></div>
                                    <div className={styles.color} style={{ background: '#f5f5dc' }} title="Beige"></div>
                                </div>
                            </div>
                            <div className={styles.filterGroup}>
                                <h4>Price Range</h4>
                                <input type="range" min="0" max="20000" className={styles.range} />
                                <div className={styles.priceLabels}>
                                    <span>Rs. 0</span>
                                    <span>Rs. 20,000</span>
                                </div>
                            </div>
                        </aside>

                        <div className={styles.grid}>
                            {products.map(p => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppOrder />
        </>
    );
}
