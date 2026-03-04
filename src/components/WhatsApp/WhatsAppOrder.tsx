'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppOrder.module.css';

export default function WhatsAppOrder() {
    const handleClick = () => {
        window.open('https://wa.me/923001234567?text=Hello The Abaseen, I want to inquire about your products.', '_blank');
    };

    return (
        <button className={styles.whatsapp} onClick={handleClick} aria-label="Order on WhatsApp">
            <MessageCircle size={24} fill="currentColor" />
            <span>ORDER ON WHATSAPP</span>
        </button>
    );
}
