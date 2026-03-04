import Link from 'next/link';
import styles from './CollectionGrid.module.css';

const collections = [
    { id: 'wash-wear', name: 'Wash & Wear', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800' },
    { id: 'cotton', name: 'Premium Cotton', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800' },
    { id: 'boski', name: 'Authentic Boski', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800' },
    { id: 'winter', name: 'Winter Collection', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800' },
];

export default function CollectionGrid() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Explore Collections</h2>
                    <Link href="/collections" className={styles.viewAll}>VIEW ALL</Link>
                </div>
                <div className={styles.grid}>
                    {collections.map((col) => (
                        <Link key={col.id} href={`/collections/${col.id}`} className={styles.colCard}>
                            <div className={styles.imgWrapper}>
                                <img src={col.image} alt={col.name} />
                                <div className={styles.overlay}>
                                    <h3>{col.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
