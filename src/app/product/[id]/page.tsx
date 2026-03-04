'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppOrder from '@/components/WhatsApp/WhatsAppOrder';
import { Truck, ShieldCheck, RefreshCw, ShoppingBag } from 'lucide-react';
import styles from './ProductDetail.module.css';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const [selectedSize, setSelectedSize] = useState('4.5m');

    // Mock data - in a real app this would be fetched
    const product = {
        id: '1',
        name: 'Premium Egyptian Cotton - Navy',
        price: 6500,
        images: [
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200',
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200'
        ],
        fabric: '100% Giza Cotton',
        type: 'Unstitched',
        description: 'Our Premium Egyptian Cotton collection offers unparalleled softness and breathability. Perfect for office wear and special occasions in the Pakistani summer.',
        features: [
            'Breathable Giza Cotton',
            'Wrinkle-resistant finish',
            'Vibrant color retention',
            '4.5 Meter length (Standard size)'
        ]
    };

    return (
        <>
            <Navbar />
            <main className={styles.productPage}>
                <div className="container">
                    <div className={styles.layout}>
                        {/* Image Gallery */}
                        <div className={styles.gallery}>
                            {product.images.map((img, i) => (
                                <img key={i} src={img} alt={`${product.name} view ${i + 1}`} className={styles.mainImg} />
                            ))}
                        </div>

                        {/* Product Info */}
                        <div className={styles.info}>
                            <div className={styles.breadcrumbs}>HOME / SHOP / {product.type.toUpperCase()}</div>
                            <h1 className={styles.title}>{product.name}</h1>
                            <p className={styles.price}>Rs. {product.price.toLocaleString()}</p>

                            <div className={styles.description}>
                                <p>{product.description}</p>
                            </div>

                            <div className={styles.selection}>
                                <div className={styles.sectionHeader}>
                                    <h4>Fabric Length: <span>{selectedSize}</span></h4>
                                </div>
                                <div className={styles.sizeOptions}>
                                    {['4.0m', '4.5m', '5.0m'].map(size => (
                                        <button
                                            key={size}
                                            className={selectedSize === size ? styles.activeSize : styles.sizeBtn}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.cta}>
                                <button className={styles.atcBtn}>
                                    <ShoppingBag size={20} />
                                    ADD TO CART
                                </button>
                                <button className={styles.buyNowBtn}>BUY IT NOW</button>
                            </div>

                            <div className={styles.bundleBox}>
                                <p><strong>BUNDLE OFFER:</strong> Buy any 2 suites and get Rs. 1000 OFF!</p>
                            </div>

                            <div className={styles.fabricDetails}>
                                <h3>FABRIC DETAILS</h3>
                                <ul>
                                    {product.features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            </div>

                            <div className={styles.trustBadges}>
                                <div className={styles.badge}>
                                    <Truck size={20} />
                                    <span>Free Shipping over Rs. 5000</span>
                                </div>
                                <div className={styles.badge}>
                                    <ShieldCheck size={20} />
                                    <span>Original Fabric Guarantee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Mobile ATC */}
                <div className={styles.stickyAtc}>
                    <div className={styles.stickyInfo}>
                        <p>{product.name}</p>
                        <span>Rs. {product.price.toLocaleString()}</span>
                    </div>
                    <button className={styles.stickyBtn}>ADD TO CART</button>
                </div>
            </main>
            <Footer />
            <WhatsAppOrder />
        </>
    );
}
