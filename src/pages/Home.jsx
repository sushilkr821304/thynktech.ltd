import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CultureSection from '../components/CultureSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="font-sans text-gray-900 antialiased scroll-smooth">
            <Navbar />
            <HeroSection />

            {/* Main Content */}
            <main>
                <ProductsSection />
                <ServicesSection />
                <CultureSection />
                <WhatWeDoSection />
            </main>

            <Footer />
        </div>
    );
}

export default Home;
