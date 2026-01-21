import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Sticky Header */}
            <Header />

            {/* Hero Section with Booking Form */}
            <HeroSection />

            {/* About Section with Facility Photos */}
            <AboutSection />

            {/* Gallery Section - All Facility Images */}
            <GallerySection />

            {/* Services/Packages with Dropdowns */}
            <ServicesSection />

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Button */}
            <WhatsAppButton />
        </main>
    );
}

