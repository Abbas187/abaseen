import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Eye } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    collection: string;
    isSellingFast?: boolean;
    stockLow?: boolean;
}

export default function ProductCard({
    id, name, price, image, collection, isSellingFast, stockLow
}: ProductCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} />

                {isSellingFast && <span className={styles.badge}>SELLING FAST</span>}
                {stockLow && <span className={styles.stockBadge}>LIMITED STOCK</span>}

                <div className={styles.actions}>
                    <button title="Quick View" className={styles.actionBtn}>
                        <Eye size={20} />
                    </button>
                    <button title="Add to Cart" className={styles.actionBtn}>
                        <ShoppingBag size={20} />
                    </button>
                </div>
            </div>

            <div className={styles.details}>
                <p className={styles.collection}>{collection.toUpperCase()}</p>
                <Link href={`/product/${id}`} className={styles.name}>{name}</Link>
                <p className={styles.price}>Rs. {price.toLocaleString()}</p>
            </div>
        </div>
    );
}
