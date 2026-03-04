import ProductCard from '../Product/ProductCard';
import styles from './FeaturedProducts.module.css';

const products = [
    { id: '1', name: 'Premium Egyptian Cotton - Navy', price: 6500, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800', collection: 'Cotton', isSellingFast: true },
    { id: '2', name: 'Lustrous Boski - Ivory', price: 9500, image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800', collection: 'Boski' },
    { id: '3', name: 'Luxury Wash & Wear - Charcoal', price: 4800, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800', collection: 'Wash & Wear', stockLow: true },
    { id: '4', name: 'Classic Karandi - Cream', price: 5500, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800', collection: 'Winter' },
];

export default function FeaturedProducts() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>New Arrivals</h2>
                    <p>Handpicked premium fabrics for the discerning gentleman.</p>
                </div>
                <div className={styles.grid}>
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
