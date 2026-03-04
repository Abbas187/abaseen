import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import CollectionGrid from '@/components/Collection/CollectionGrid';
import FeaturedProducts from '@/components/Product/FeaturedProducts';
import TrustBadges from '@/components/TrustBadges/TrustBadges';
import Footer from '@/components/Footer/Footer';
import WhatsAppOrder from '@/components/WhatsApp/WhatsAppOrder';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <TrustBadges />
                <CollectionGrid />
                <FeaturedProducts />
            </main>
            <Footer />
            <WhatsAppOrder />
        </>
    );
}
